'use client';

import { useEffect} from "react";


import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
    error : Error
}

const ErrorState: React.FC<ErrorStateProps> = ({error}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <EmptyState
            title="Something went wrong"
            subtitle="An error occurred while trying to fetch the data"
        />
    );
}

export default ErrorState;