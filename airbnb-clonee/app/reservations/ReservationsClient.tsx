'use client';

import { SafeReservations, SafeUser } from "@/app/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

interface ReservationsClientProps {
    reservations: SafeReservations[];
    currentUser: SafeUser;
}
const ReservationsClient:React.FC<ReservationsClientProps> = ({
    reservations,
    currentUser,
}) => {
    const router = useRouter(); 
    const [deletingId, setDeletingId] = useState('')

    const onCancel = useCallback ((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
        .then(() => {
            toast.success('Reservation cancelled');
            router.refresh();
        }).catch(() => {
            toast.error('Failed to cancel reservation');
        }).finally(() => {
            setDeletingId('');
        })
    }, [router]);
    
    return (
        <Container>
            <Heading
                title="Reservations"
                subtitle="Manage your reservations"
            />
            <div 
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5 
                2xl:grid-cols-6
                gap-8
                mt=8    
                "
            >
                {reservations.map((reservation) => (
                    <ListingCard
                        key={reservation.id}
                        data = {reservation.listing} 
                        reservation={reservation}
                        actionId = {reservation.id}
                        actionLabel="Cancel Guest Reservation"
                        onAction={onCancel}
                        disabled={deletingId === reservation.id}
                        currentUser={currentUser}  
                    />
                ))}

            </div>
        </Container>
    );
};

export default ReservationsClient;