import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import AppBar from './AppBar'
import Container from '@material-ui/core/Container'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton'
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import Button from '@material-ui/core/Button'

const MainContainer = styled(Container)`
    background-color: #a6d4fa;
`

const CardImage = styled.img`
width: 400px;
height: 350px;
`
const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
text-align: center;
padding: 10px;
justify-content: space-around;
`
const IconsContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
text-align: center;
justify-content: center;
`
const Footer = styled.div`
    display: flex;
    justify-content: space-between;
`

function Main(props) {

    const [profile, setProfile] = useState([])

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-cerqueira/person")
        .then((response) => {
            setProfile(response.data.profile)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const match = (option) => {
        const body = {
            id: profile.id,
            choice: option
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-cerqueira/choose-person", body)
        .then((response) => {
            getProfileToChoose()
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const resetMatches = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-cerqueira/clear")
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.message)
        })
      }

  return (
    <MainContainer maxWidth='sm'>
        <AppBar/>

        <CardContainer>
            <CardImage src={profile.photo}/>
        </CardContainer>
        <hr/>
        <h2>{profile.name}, {profile.age}</h2>
        <p>{profile.bio}</p>
        <hr/>
        <IconsContainer>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => match(false)}>
                <NotInterestedIcon fontSize='large' color='primary'/> 
            </IconButton>

            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => match(true)}>
                <FavoriteIcon fontSize='large' color='primary'/> 
            </IconButton>
        </IconsContainer>
        <Footer>
            <Button onClick={resetMatches} variant='contained' color='primary' >Reset matches</Button>
            <Button onClick={props.goToMatch} variant='contained' color='primary' >Match screen</Button>
        </Footer>
    </MainContainer>
  );
}

export default Main;