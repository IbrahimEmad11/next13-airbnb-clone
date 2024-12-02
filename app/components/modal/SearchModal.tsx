'use client';

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Range, RangeKeyDict } from "react-date-range";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import queryString from "query-string";
import { formatISO } from "date-fns";
import Heading from "../Heading";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";

enum STEPS {
    LOCATION = 0,
    DATE = 1,
    INFO = 2
}

const SearchModal = () => {
    const router = useRouter();
    const params = useParams();
    const searchModal = useSearchModal();
    
    const [step, setStep] = useState(STEPS.LOCATION);
    const [guestCount, setGuestCount] = useState(1);
    const [roomCount, setRoomCount] = useState(1);
    const [bathroomCount, setBathroomCount] = useState(1);
    const [location, setLocation] = useState<CountrySelectValue>();
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });
    

    // Dynamically import the Map component
    const Map = useMemo(() => dynamic(() => import("../Map"),{
        ssr:false
      }), [location]);

    const onNext = useCallback(() => {
        setStep((prev) => prev + 1);
    }, []);

    const onBack = useCallback(() => {
        setStep((prev) => prev - 1);
    }, []);

    const onSubmit = useCallback(async () => {
        if (step !== STEPS.INFO) {
            onNext();
            return;
        }
        let currentQuery = {};

        if (params) {
            currentQuery = queryString.parse(params.toString());
        }

        const updatedQuery = {
            ...currentQuery,
            locationValue: location?.value,
            guestCount,
            roomCount,
            bathroomCount,
            startDate: dateRange.startDate ? formatISO(dateRange.startDate) : undefined,
            endDate: dateRange.endDate ? formatISO(dateRange.endDate) : undefined
        };

        const url = queryString.stringifyUrl({
            url: "/",
            query: updatedQuery
        }, { skipNull: true });

        setStep(STEPS.LOCATION);
        searchModal.onClose();
        router.push(url);
    }, [step, location, dateRange, guestCount, roomCount, bathroomCount, params, onNext, router, searchModal]);

    const actionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return "Search";
        }
        return "Next";
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.LOCATION) {
            return undefined;
        }
        return "Back";
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Where do you want to go?"
                subtitle="Find the perfect place to stay"
            />
            <CountrySelect
                value={location}
                onChange={(value) => setLocation(value as CountrySelectValue)}
            />
            <hr />
            <Map
            center={location?.latlng}
             />
        </div>
    );

    if (step === STEPS.DATE) {
        bodyContent = (
          <div className="flex flex-col gap-8">
            <Heading 
              title="When do you plan to go?" 
              subtitle="Make sure everyone is free!" 
            />
            <Calendar 
                value={dateRange} 
                onChange={(ranges: RangeKeyDict) => setDateRange(ranges.selection)} 
                />

          </div>
        );
      }

    if (step === STEPS.INFO) {
        bodyContent =(
        <div className="flex flex-col gap-8">
            <Heading 
                title="More information" 
                subtitle="Find your perfect place!" 
            />
            <Counter 
                title="Guests" 
                subtitle="How many guests are coming?" 
                value={guestCount} 
                onChange={(value) => setGuestCount(value)} 
            />
            <Counter 
                title="Rooms" 
                subtitle="How many rooms do you need?" 
                value={roomCount} 
                onChange={(value) => setRoomCount(value)} 
            />
            <Counter 
                title="Bathrooms" 
                subtitle="How many bathrooms do you need?" 
                value={bathroomCount} 
                onChange={(value) => setBathroomCount(value)} 
            />
        </div>
    );
}
      

    return ( 
        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={onSubmit}
            title="Filters"
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
            body={bodyContent}
        />
    );
}
 
export default SearchModal;