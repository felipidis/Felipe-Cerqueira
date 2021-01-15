import React, { useState } from 'react'
import { RequestPost } from '../Challenge/Request';
import {ProtectedPage} from '../Challenge/ProtectedPage'
import PlanetChoice from '../TripOptions/PlanetOptions';
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button'

const H1 = styled.h1`
    text-align: center;
`
const Body = styled.div`
    padding-top: 50px;
    height: 90vh;
    background-image: url(https://images2.alphacoders.com/677/677167.jpg);
    background-size: cover;
`

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    background-color: DarkSlateBlue;
    color: white;
    border-radius: 10px;
    background-image: url("https://images4.alphacoders.com/102/1020733.jpg");
    
`

const Groups = styled(Form.Group)`
    margin: 10px;
`

const Btn = styled(Button)`
    margin: 10px;
`

export default function CreateTrip(){
    const [messageForm, setMessageForm] = useState (0)
    const [form, setForm] = useState()

    ProtectedPage()

    const handleInput = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
        setMessageForm(0)
    }
    const createTrip = (event) => {
        event.preventDefault()
        
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/trips`
        const header = {headers: {auth: localStorage.getItem("token")}}
        RequestPost(url, body, header)
        setMessageForm(1)
    }

    return(
        <Body>
            <StyledContainer fluid="sm">
                <Form onSubmit={createTrip} >

                    <H1> Criar viagem </H1>

                    <Groups>
                        <Form.Label> Nome da viagem </Form.Label>
                        <Form.Control
                            pattern={"[A-Za-z]{5}"}
                            variant="outlined"
                            size="small"
                            type="text"
                            onChange={handleInput}
                            name={"name"}
                            required
                    />
                    </Groups>

                    <Groups>
                        <Form.Label> Data </Form.Label>
                        <Form.Control
                            variant="outlined"
                            size="small"
                            type= "date"
                            onChange={handleInput}
                            name={"date"}
                            required
                        />
                    </Groups>

                    <Groups>
                        <Form.Label> Descrição </Form.Label>
                        <Form.Control
                            pattern={"[A-Za-z]{30}"}
                            variant="outlined"
                            size="small"
                            type= "text"
                            onChange={handleInput}
                            name={"description"}
                            required
                        />
                    </Groups>


                    <Groups>
                        <Form.Label> Duração </Form.Label>
                        <Form.Control
                            min="50"
                            variant="outlined"
                            size="small"
                            type= "number"
                            onChange={handleInput}
                            name={"durationInDays"}
                            required
                        />
                    </Groups>

                    <Groups>
                    <PlanetChoice
                    name="planet"
                    onchange={handleInput}
                    required
                    />
                    </Groups>

                    <Btn variant="outline-primary"> Iniciar Aventura ! </Btn>
                    {messageForm === 1 ? <p>Bem vindo à bordo tripulante !</p> : ""}
                </Form>
            </StyledContainer>
        </Body>
    )    
}