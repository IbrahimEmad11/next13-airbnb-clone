'use client';

import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservations, SafeUser } from "../types";
import { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";

interface TripsClientProps {
    reservations: SafeReservations[];
    currentUser ?: SafeUser | null;
}

const TripsCLient : React.FC<TripsClientProps> = ({reservations, currentUser}) => {

    const router = useRouter();
    const [deletingId, setDeletingId] = useState("");

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
            .then(() => {
                toast.success("Reservation cancelled");
                router.refresh();
            })
            .catch((error) => {
                toast.error("Something went wrong");
            })
            .finally(() => {
                setDeletingId("");
            });
    }, [router]);

    return(
    <Container>
        <Heading
            title="Trips"
            subtitle="Manage your trips"
        />
        <div 
            className=" grid 
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        xl:grid-cols-5
                        2xl:grid-cols-6
                        gap-8
                        mt-8" 
        >
            {reservations.map((reservation) => (
                <ListingCard
                    key={reservation.id}
                    reservation={reservation}
                    currentUser={currentUser || undefined}
                    data={reservation.listing}
                    actionId={reservation.id}
                    onAction={onCancel}
                    disabled={deletingId === reservation.id}
                    actionLabel="Cancel Reservation"
            />
        ))}

                    
        </div>
    </Container>
    );
}

export default TripsCLient;