import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import ReservationsClient from "./ReservationsClient";

const ReservationPage = async () => {
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

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState 
          title="No Reservations found" 
          subtitle="You don't have any reservations yet." 
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationsClient 
        reservations={reservations} 
        currentUser={currentUser} 
      />
    </ClientOnly>
  );
};

const Page = () => {
  return <ReservationPage />;
};

export default Page;
