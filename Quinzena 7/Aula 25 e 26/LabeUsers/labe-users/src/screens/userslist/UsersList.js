import React, {Component} from "react"
import axios from "axios"
import {User, Button} from "./styled"
import {BASE_URL, axiosConfig} from "../../constants/requests"

const dados = []

export default class UsersList extends Component {
    state = {
        usersList: dados
    }

    componentDidMount(){
        this.getUser()
    }

    getUser = () => {
        axios
            .get(`${BASE_URL}/users`, axiosConfig)
            .then((response)=> this.setState({usersList: response.data}))
            .catch((error)=>alert(error.message))
    }

    deleteUser = (id) => {
        axios   
            .delete(`${BASE_URL}/users/${id}`, axiosConfig)
            .then(()=> {
                this.getUser()
                alert("Usuário deletado !!")
            })
            .catch((error)=>alert(error.message))
    }

    render(){
        const renderList = this.state.usersList.map((item)=>{
            return (
                <User key={item.id}>
                    {item.name}
                    <Button onClick={() => this.deleteUser(item.id)}>X</Button>
                </User>
            )
        })
        return <div> {renderList} </div>
    }
}