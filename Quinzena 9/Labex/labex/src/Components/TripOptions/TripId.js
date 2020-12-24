import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TripIdSelect (props) {
    const [listTrip, setListTrip] = useState()
    
    useEffect(() => {
        getListTrip()
        
    },[])

    //pega a  lista de viagem
    const getListTrip = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/trips")
            .then(response => {
                const list = response.data.trips.map((trip) =>{
                    return <option id={trip.id} value={trip.id} name={trip.id}>{trip.name}</option>    
                })
                setListTrip(list)
            })
            .catch(error => {})
    }

    return (
        <div>
            <select onChange={props.onchange} name={props.name}>
                <option>Viagens</option>
                { listTrip }
            </select>
        </div>
    )
}