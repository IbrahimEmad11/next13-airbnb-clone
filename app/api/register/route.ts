import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prisma from '../../libs/prismadb';


export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, name, password } = body;

        // Validate the required fields
        if (!email || !name || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Normalize email to lowercase to prevent case-sensitive duplicates
        const normalizedEmail = email.toLowerCase();

        const existingUser = await prisma.user.findUnique({
            where: { email: normalizedEmail },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "Email already exists" },
                { status: 409 }
            );
        }

        // Hash the password securely
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email: normalizedEmail,
                name,
                hashedPassword,
            },
        });

        // Return the created user (excluding sensitive fields if needed)
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
