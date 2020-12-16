import React from "react";
import CreateUsers from "./screens/createusers/CreateUsers"
import UsersList from "./screens/userslist/UsersList"
import "./App.css"

export default class App extends React.Component {
  state = {
    createUsers: true
  }

  changeScreen = () =>{
    this.setState({createUsers: !this.state.createUsers})
  }

  render(){
    return(
    
    <div> 
      <button onClick={this.changeScreen}> {this.state.createUsers ? "Lista" : "Criar"} </button>
      {this.state.createUsers ? <CreateUsers /> : <UsersList />}
    </div>
    )
  }
}