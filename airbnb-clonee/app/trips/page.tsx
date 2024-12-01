import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import TripsCLient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState 
          title="Unauthorized" 
          subtitle="You must be logged in to view this page." 
        />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState 
          title="No Trips found" 
          subtitle="You have not reserved any trips yet." 
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsCLient 
        reservations={reservations} 
        currentUser={currentUser} 
      />
    </ClientOnly>
  );
};

const Page = () => {
  return <TripsPage />;
};

export default Page;
