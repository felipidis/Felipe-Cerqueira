import React from 'react';
import './App.css';
import CreatePlaylist from './Components/createplaylist/CreatePlaylist';
import GetPlaylist from './Components/getplaylist/GetPlaylist';
import styled from 'styled-components';
import song from './img/song.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.header`
  background-color: darkgreen;
  display: flex;
  justify-content: space-between;
  width: 100%
`
const Song = styled.img`
  width: 200px;
`

class App extends React.Component {
  render () {
    return (
      <Container className="App">
        <Header>
          <h3>Labefy</h3>
          <Song src={song} />
        </Header>
        <CreatePlaylist />
        <GetPlaylist />
      </Container>
  );
  }
}

export default App;