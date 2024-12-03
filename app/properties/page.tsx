import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";



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

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState 
          title="No Properties found" 
          subtitle="Looks like you have no properties yet." 
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient 
        listings={listings} 
        currentUser={currentUser} 
      />
    </ClientOnly>
  );
};

const Page = () => {
  return <TripsPage />;
};

export default Page;
