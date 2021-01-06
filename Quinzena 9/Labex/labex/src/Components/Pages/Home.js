import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const Body = styled.div`
    text-align:center;
    height: 90vh;
    background-image: url(https://images2.alphacoders.com/677/677167.jpg);
    background-size: cover;
    color: white;
`

const Btn = styled(Button)`
    margin-top: 150px;
`

export default function Home(){
    const history = useHistory()

    return(
        <Body>
            <h1> 
                Se aventurar na galáxia nunca foi tão fácil ! <br/>
                Vem conhecer a LabeX!
            </h1>
            <Btn size='lg' onClick={() => {history.push("/trip-list")}}>Quero ver todas as viagens</Btn>
        </Body>
    )
}