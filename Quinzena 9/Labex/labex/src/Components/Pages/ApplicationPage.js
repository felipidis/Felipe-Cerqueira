import React, {useState} from 'react';
import CountryChoice from '../TripOptions/CountryOptions';
import TripID from '../TripOptions/TripId'
import {RequestPost} from '../Challenge/Request'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const Body = styled.div`
    padding-top: 70px;
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
const H1 = styled.h1`
    text-align: center;
`
const Groups = styled(Form.Group)`
    margin: 10px;
`

const Btn = styled(Button)`
    margin: 10px;
`


export default function ApplicationPage(){
    const [form , setForm] = useState()
    const [messageForm, setMessageForm] =useState (0)

    const handleInput = (event) => {
        const {value, name, id} = event.target
        setMessageForm(0)
        setForm({...form, [name]:value})
    }

    function onSubmitForm(event) {
        event.preventDefault();
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText ,
            profession: form.profession,
            country: form.country
        };
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/trips/${form.id}/apply`
        RequestPost(url, body)
        setMessageForm(1)
    }

    return(
        <Body>
        <StyledContainer fluid="sm"> 
            <Form onSubmit={onSubmitForm} >
                <H1>Candidato</H1>
                
                <Form.Row>
                    
                    <Groups as={"Col"} controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            pattern={"[A-Za-z]{3,}"}
                            type="text"
                            onChange={handleInput}
                            name={"name"}
                            required
                            />
                    </Groups>
                    
                    <Groups as={"Col"} controlId="formIdade">
                        <Form.Label>Idade</Form.Label>
                        <Form.Control
                        min="18"
                        type= "number"
                        onChange={handleInput}
                        name={"age"}
                        required
                        />
                    </Groups>
                </Form.Row>
                
                <Groups>
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control
                    pattern={"[A-Za-z]{30,}"}
                    type= "text"
                    onChange={handleInput}
                    name={"applicationText"}
                    required
                    />
                </Groups>

                <Groups>
                    <Form.Label>Profissão</Form.Label>
                    <Form.Control
                    pattern={"[A-Za-z]{10,}"}
                    type= "text"
                    onChange={handleInput}
                    name={"profession"}
                    required
                    />
                </Groups>

                <Groups>
                    <CountryChoice 
                    name="country"
                    onchange={handleInput}
                    required/>
                    <TripID 
                    name="trip"
                    onchange={handleInput}
                    required/>
                </Groups>

                <Btn variant="outline-primary"> Embarcar !</Btn>
                {messageForm === 1 ? <p>Bem vindo à bordo tripulante !</p> : ""}

            </Form>

        </StyledContainer> 
        </Body>
    )
}