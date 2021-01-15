import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const Carde = styled(Card)`
    margin: 10px;
    color: white;
`

const CardeHeader = styled(Card.Header)`
    background-color: DarkSlateBlue;
    font-style: oblique;
    font-weight: bold;
`

const CardeBody = styled(Card.Body)`
    background-color: DarkSlateBlue;
    background-image: url(https://images4.alphacoders.com/102/1020733.jpg);
`
const CardeFooter = styled(Carde.Footer)`
    background-color: DarkSlateBlue;
`
export default function DetailsScreen (props) {
    const token = localStorage.getItem("token")
    return (
        <Carde >
            <CardeHeader>{props.name}</CardeHeader>
            <CardeBody>
                <p>{props.description}</p>
                <p>{props.planet}</p>
                <p>{props.date}</p>
                <p>{props.durationInDays}</p>
            </CardeBody>
            <CardeFooter>
                {token ? <Button variant ="primary" id={props.id} onClick={props.onclick}>Deletar</Button> : ""}
            </CardeFooter>
        </Carde>
    )
}