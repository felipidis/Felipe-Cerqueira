import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const Body = styled.div`
    padding-top: 140px;
    height: 90vh;
    background-image: url(https://images2.alphacoders.com/677/677167.jpg);
    background-size: cover;
`

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    background-color: DarkSlateBlue;
    max-width: 600px;
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

export default function LoginPage(){
    const [form, setForm] = useState({email: "", password: ""})
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        token ? history.push("/create-trip") : history.push("/login")
    }, [history])

    
    function onSubmitForm(event) {
        event.preventDefault();
        const body = {
            email: form.email,
            password: form.password
        };

        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/login", body)
            .then(response => {
            localStorage.setItem("token", response.data.token)
            history.push("/create-trip")
            })
            .catch(error => {})}

        const handleInput = (event) => {
            const {value, name} = event.target
            setForm({...form, [name]: value})
        }

    return (
        <Body>
            <StyledContainer>
                <Form onSubmit={onSubmitForm} >
        
                        <H1>Login</H1>
                
                    <Groups>
                    <Form.Label> Email: </Form.Label>
                    <Form.Control
                        type="email"
                        onChange={handleInput}
                        value={form.email}
                        name={"email"}
                        required
                    />   
                    </Groups>

                    <Groups>
                    <Form.Label> Senha: </Form.Label>
                    <Form.Control
                        type= "password"
                        onChange={handleInput}
                        value={form.password}
                        name={"password"}
                        required
                    />
                    </Groups>

                    <Btn>Login</Btn>
                </Form>      
            </StyledContainer>
        </Body>
    );
}