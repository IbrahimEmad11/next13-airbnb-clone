'use client';

import { SafeUser, SafeListing, SafeReservations } from "@/app/types";

import { categories } from "@/app/data/categoriesList";
import { useEffect, useMemo } from "react";

import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import ListingReservation from "@/app/components/listings/ListingReservation";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { differenceInCalendarDays, differenceInDays, eachDayOfInterval } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import { Range } from "react-date-range";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
};

interface ListingClientProps {
    reservations?: SafeReservations[];
    listing: SafeListing & {
        user: SafeUser;
    };
    currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
    reservations=[],
    listing,
    currentUser
}) => {
    const loginModal = useLoginModal();
    const router = useRouter();

    const disabeldDates = useMemo(() => {
        let dates : Date[] = [];
        reservations.forEach((reservation) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.startDate),
                end: new Date(reservation.endDate),
            });
            dates = [...dates, ...range];
        });
        return dates;
    }, [reservations]);

    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice,setTotalPrice] = useState(listing.price);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);

    const onCreateReservation = useCallback(() => {
        if (!currentUser) {
            loginModal.onOpen();
            return;
        }
        
        setIsLoading(true);
        axios.post("/api/reservations", {
            totalPrice,
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            listingId: listing.id,
        }).then(() => {
            toast.success("Reservation created");
            setDateRange(initialDateRange);
            router.push("/trips");
            router.refresh();

        
    })}, [currentUser, dateRange, totalPrice, listing?.id, loginModal, router]);
    
    useEffect(() => {
        if(dateRange.startDate && dateRange.endDate){
            const dayCount = differenceInCalendarDays(dateRange.endDate, dateRange.startDate);
            if(dayCount && listing.price){
                setTotalPrice(dayCount * listing.price);
            }else{
                setTotalPrice(listing.price);
            }
        }
    },[dateRange, listing.price]);


    const category = useMemo(() => {
        return categories.find((item) =>
            item.label === listing.category
        );
    }, [listing.category]);

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead
                        title={listing.title}
                        imageSrc={listing.imageSrc}
                        locationValue={listing.locationValue}
                        id={listing.id}
                        currentUser={currentUser}
                    />
                    <div className = "grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6 ">
                        <ListingInfo
                            user={listing.user}
                            category={category}
                            description={listing.description}
                            roomCount={listing.roomCount}
                            bathroomCount={listing.bathroomCount}
                            guestCount={listing.guestCount}
                            locationValue = {listing.locationValue}
                        
                        />
                        <div className="order-first mb-10 md:order-last md:col-span-3">
                            <ListingReservation
                                price={listing.price}
                                totalPrice={totalPrice}
                                onChangeDate={(value)=> setDateRange(value)}
                                dateRange={dateRange}
                                disabledDates={disabeldDates}
                                disabled={isLoading}
                                onSubmit={onCreateReservation}
                            
                            />

                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default ListingClient;
