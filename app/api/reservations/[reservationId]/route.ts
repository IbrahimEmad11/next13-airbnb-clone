import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";


interface IParams{  
    reservationId?: string;
}

export async function DELETE(
    request: Request,
    {params}: {params:IParams},
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const { reservationId } = params;

    if (!reservationId) {
        return NextResponse.error();
    }

    const reservation = await prisma.reservation.deleteMany({
        where: {
            id: reservationId,
            OR: [
                { userId: currentUser.id },
                { listing: { userId: currentUser.id } },
            ]
        }
    });
    return NextResponse.json(reservation);
}
