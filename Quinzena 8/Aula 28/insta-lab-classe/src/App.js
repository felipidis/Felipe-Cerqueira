import React from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <AppContainer>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50?=1'}
        fotoPost={'https://picsum.photos/200/150?=2'}
      />        
    </AppContainer>
  );
}

export default App;
