import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
    const currentUser = await getCurrentUser()
    const listings = await getFavorites()
    if(listings.length === 0){
        return(
            <ClientOnly>
                <EmptyState
                    title="No favorites found"
                    subtitle="Looks like you don't have favorites listings"
                />
            </ClientOnly>
        )
    }


    return (
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser = {currentUser}
            />
        </ClientOnly>
      );
}
 
export default FavoritesPage;