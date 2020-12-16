import React from 'react'; 
import axios from 'axios';

import{Button, CreateContainer} from './styled'

const axiosConfig = {
    headers: {
        Authorization: "felipe-cerqueira-tang"
    }
}

class CreatePlaylist extends React.Component{
    state = {
        playlistName: ""
    }

    createPlaylist = () => {
        const body = {
            "name": this.state.playlistName
        }

        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, axiosConfig)
        .then((response) => {
            this.setState({playlistName: ""})
        })
        .catch((error) => {
            console.log(error.meessage)
        })
    }


    onChangePlaylist = (event) => {
        this.setState({playlistName : event.target.value})
    }

    render () {
        return(
            <CreateContainer>
                <h3>Create Playlist: </h3>
                <input placeholder="Playlist Name" value={this.state.playlistName} onChange={this.onChangePlaylist}/>
                <Button onClick={this.createPlaylist}> Create </Button>
                
            </CreateContainer>
        )
    }
}

export default CreatePlaylist