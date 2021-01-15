import React, {useEffect, useState} from 'react'
import axios from 'axios'
import TripInfo from '../Screens/TripDetails'
import styled from 'styled-components'

const H1 = styled.h1`
    margin: 10px;

`

export default function TripList() {
    const[tripList, setTripList] = useState()
    
    const onDelete = (event) =>{
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/trips/${event.target.id}`)
            .then(response =>{
                window.location.reload()
            })
            .catch(error =>{})
    }

    useEffect(() =>{
        getTripList()
    }, [])

    const getTripList = () =>{
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/trips")
            .then(response =>{
                const list = response.data.trips.map((trip) =>{
                    return <TripInfo 
                    id={trip.id}
                    name= {trip.name}
                    date={trip.date}
                    description={trip.description}
                    planet={trip.planet}
                    durationInDays={trip.durationInDays+" dias"}
                    onclick={onDelete}
                    />
                })
                setTripList(list)
            })
            .catch(error =>{})
    }

    return (
        <div>
            <H1>Viagens</H1>
            <hr/>
            {tripList}
        </div>
    )
}