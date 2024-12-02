import ClientOnly from "../components/ClientOnly"
import EmptyState from "../components/EmptyState"
import getFavoriteListings from "../actions/getFavoriteListing"
import getCurrentUser from "../actions/getCurrentUser"
import FavoritesClient from "./FavoritesClient"

export const dynamic = "force-dynamic";

const ListingPage = async() => {
    const listings = await getFavoriteListings()
    const currentUser = await getCurrentUser()
   
    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No Favorites found"
                    subtitle="You don't have any favorites yet."
                />
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ListingPage;