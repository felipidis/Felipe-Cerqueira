import React, {Component} from "react"
import {Button, Form} from "./styled"
import axios from "axios"
import {BASE_URL, axiosConfig} from "../../constants/requests"

export default class CreateUsers extends Component {
    state = {
        name: "",
        email: ""
    }

    changeName = (event) =>{
        this.setState({name: event.target.value})
    }

    changeEmail = (event) =>{
        this.setState({email: event.target.value})
    }

    createUser = () =>{
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        
        axios
            .post(`${BASE_URL}/users`, body, axiosConfig)
            .then(() => {
                alert(`${this.state.name} cadastrado !!`)
                this.setState({name: "", email: ""})
            })
            .catch((error)=>alert(error.message))
    }

    render(){
        return(
            <Form>
                <p>Nome:</p>
                <input value={this.state.name} onChange={this.changeName}/>
                <p>Email:</p>
                <input value={this.state.email} onChange={this.changeEmail}/>
                <Button>
                    <button onClick={this.createUser}> Enviar </button>
                </Button>
                
            </Form>
        ) 
    }
}