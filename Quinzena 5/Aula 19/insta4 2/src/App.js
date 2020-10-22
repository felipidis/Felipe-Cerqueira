import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Jason'}
          fotoUsuario={'https://picsum.photos/50/59'}
          fotoPost={'https://picsum.photos/200/157'}
        />

        <Post
          nomeUsuario={'Freddy'}
          fotoUsuario={'https://picsum.photos/50/55'}
          fotoPost={'https://picsum.photos/200/155'}
        />

        <Post
          nomeUsuario={'Michael'}
          fotoUsuario={'https://picsum.photos/50/90'}
          fotoPost={'https://picsum.photos/200/162'}
        />

      </div>
    );
  }
}

export default App;