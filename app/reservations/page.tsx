import EmptyState from "../components/EmptyState"
import ClientOnly from "../components/ClientOnly"
import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import ReservatiosnClient from "./ReservationsClient"

const ReservationsPage = async () =>{
    const currentUser  = await getCurrentUser()

    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({
        authorId: currentUser.id,
    })

    if(reservations.length === 0) {
        return(
            <ClientOnly>
                <EmptyState
                    title="No reservations found"
                    subtitle="Looks like you have no reservatiosn on your properties"
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <ReservatiosnClient
                reservations = {reservations}
                currentUser = {currentUser}
            />
        </ClientOnly>
    )
}

export default ReservationsPage