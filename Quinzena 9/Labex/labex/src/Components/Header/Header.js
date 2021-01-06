import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

const Header = styled(Navbar)`
    background-color: DarkSlateBlue;
    background-image: url("https://www.osmais.com/wallpapers/201204/1e698136bd-1680x1050.jpg");
    height: 10vh;

` 
const Btn = styled(Button)`
    margin: 10px;
`

export default function NavBar(){
    const history = useHistory()
    const token = localStorage.getItem("token")

    const logout = (path) => {
            localStorage.removeItem("token")
            history.push(path)
    }
    

    return(
        <Header collapseOnSelect expand="sm" variant ="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Btn onClick={() => {history.push("/")}}>Home</Btn>
                <Btn onClick={() => {history.push("/trip-list")}}>Viagens</Btn>
                <Btn onClick={() => {history.push("/application-page")}}>Candidate-se</Btn> 
                {token ? <Btn onClick={() => {history.push("/create-trip")}}>Criar viagem</Btn > : ""}
                {!token ? <Btn onClick={() => {history.push("/login")}}>Login</Btn>: <Button name="sair" onClick={() => {logout("/login")}}>Sair</Button>}
            </Navbar.Collapse>
        </Header>
    )
}