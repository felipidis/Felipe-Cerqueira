import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    Post: [],
    userValue: "",
    picValue: "",
    linkValue: ""
  }

  addPosts = () => {
    const novoPost = {
    userValue: this.state.userValue,
    picValue: this.state.picValue,
    linkValue: this.state.linkValue
    }
    
    const novoPosts = [...this.state.Post, novoPost]
    this.setState({Post: novoPosts})
    this.state.userValue = ""
    this.state.picValue = ""
    this.state.linkValue = ""
  }

  onChangeInputUsuario = (event) => {
    this.setState({userValue: event.target.value})
  }
  
  onChangeInputFoto = (event) => {
    this.setState({picValue: event.target.value})
  }

  onChangeInputLink = (event) => {
    this.setState({linkValue: event.target.value})
  }

  render() {
    const Posted = this.state.Post.map((postagem) => {
    return(
      <Post
          nomeUsuario={postagem.userValue}
          fotoUsuario={postagem.picValue}
          fotoPost={postagem.linkValue}
        />
    )
    })

    return (
      <div className={'app-container'}>
        <div>
        <input value={this.state.userValue} onChange={this.onChangeInputUsuario} placeholder="Nome de Usuario"/>
        <input value={this.state.picValue} onChange={this.onChangeInputFoto} placeholder="Foto de Usuario"/>
        <input value={this.state.linkValue} onChange={this.onChangeInputLink} placeholder="Link da foto"/>
        <button onClick={this.addPosts}>enviar</button>
        </div>

        <div>
          {Posted}
        </div>
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