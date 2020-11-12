import React from 'react';
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Final from './components/Final'
import styled from 'styled-components'
export class App extends React.Component {
  
  state = {
    phase: 1,
    button: true
  }

  phasesRender = () => {
    switch(this.state.phase){
      case 1:
        return <First/>;
      case 2:
        return <Second/>;
      case 3:
        return <Third/>;
      case 4:
        return <Final/>;
      default:
        return
    }
  }

  nextPhase = () => {
      let counter = this.state.phase + 1
      this.setState({
        phase: counter
      })
      if (counter === 4) {
        this.setState({
          button: false
        })
      }
    } 

    styledForm = styled.div`
    text-align: center;
    line-height: 4vh;
    margin-left: 40px;
    `

  render() {
    return (<div>
      {this.phasesRender()}
    
      <this.styledForm>
        {this.state.button ? <button onClick = {this.nextPhase}>Próximo</button>:"" }
        </this.styledForm>
      </div>
    )
  }
}

export default App;