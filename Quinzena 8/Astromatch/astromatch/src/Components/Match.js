import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import AppBar from './AppBar'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

const MainContainer = styled(Container)`
    background-color: #a6d4fa;
`

const CardImage = styled.img`
    width: 100px;
    height: 150px;
`
const Containered = styled.div`
    margin: 10px;
`
const Footer = styled.div`
    display: flex;
    justify-content: space-between;
`
function Match(props) {

    const [profileMatch, setProfileMatch] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-cerqueira/matches")
        .then((response) => {
            setProfileMatch(response.data.matches)
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
    <MainContainer maxWidth="sm">
        <AppBar/>
        <div>
            {profileMatch.map((profile) => {
                return(
                    <Containered key={profile.id} goToMain={props.goToMain}>
                        <CardImage src={profile.photo}/>
                        <h2>{profile.name}</h2>
                        <hr/>
                    </Containered>
                )
            })}
        </div>
        <Footer>
            <Button onClick={resetMatches} variant='contained' color='primary' >Reset matches</Button>
            <Button onClick={props.goToMain} variant='contained' color='primary' >Main screen</Button>
        </Footer>
    </MainContainer>
  );
}

export default Match;