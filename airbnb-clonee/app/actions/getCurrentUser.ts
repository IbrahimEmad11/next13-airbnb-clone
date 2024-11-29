import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
    try {
        const session = await getServerSession(authOptions);
        console.log('GET SESSION session:', session);
        return session;
    } catch (error) {
        console.error('Error fetching session:', error);
        return null;
    }
}


export default async function getCurrentUser() {
    try {
        const session = await getSession();
        console.log("GETCURRENT SESSION session:", session);

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: { email: session.user.email as string },
        });
        console.log("Current User:", currentUser);

        if (!currentUser) {
            return null;
        }

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
        };
    } catch (error: any) {
        console.error("Error in getCurrentUser:", error);
        return null;
    }
}
