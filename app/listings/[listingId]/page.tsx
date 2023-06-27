import ClientOnly from "<Fran/app/components/ClientOnly";
import getListingById from "../../actions/getListingById";
import EmptyState from "<Fran/app/components/EmptyState";
import getCurrentUser from "<Fran/app/actions/getCurrentUser";
import ListingClient from "./ListingClient";
import getReservations from "<Fran/app/actions/getReservations";
interface IParams{
    listingId?:string
}
const ListingPage = async ({params}: {params: IParams}) => {
    const listing = await getListingById(params);
    const currentUser = await getCurrentUser()
    const reservations = await getReservations(params)
    if(!listing){
        return(
            <ClientOnly>
                <EmptyState/>
            </ClientOnly>

        )
    }
    return (
    <ClientOnly>
        <ListingClient
            listing={listing}
            reservations = {reservations}
            currentUser = {currentUser}
        />
    </ClientOnly>  
    
    );
}
 
export default ListingPage;