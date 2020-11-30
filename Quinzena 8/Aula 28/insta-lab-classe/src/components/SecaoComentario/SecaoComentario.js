import React, {Component} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

class SecaoComentario extends Component {
	state = {
		inputValue: "",
	}

	onChangeComentario = (event) => {
		this.setState({inputValue: event.target.value})
	}

	render() {
		return <CommentContainer>
			<InputComment
				placeholder={'Comentário'}
				value={this.state.inputValue}
				onChange={this.onChangeComentario}
			/>
			<button onClick={() => {this.props.enviarComentario(this.state.inputValue)}}>Enviar</button>
		</CommentContainer>
	}
}

export default SecaoComentario