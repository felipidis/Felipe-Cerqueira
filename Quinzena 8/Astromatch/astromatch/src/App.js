import React, {useState} from 'react';
import Main from './Components/Main';
import Match from './Components/Match';

function App() {

  const [currentScreen, setCurrentScreen] = useState("main")

  const chooseCurrentScreen = () => {
    switch (currentScreen) {
      case "main":
        return <Main goToMatch={goToMatch}/>
      case "match":
        return <Match goToMain={goToMain}/>
      default:
        return <div>Error: Page not found</div>
    }
  }

  const goToMain = () => {
    setCurrentScreen("main")
  }

  const goToMatch = () => {
    setCurrentScreen("match")
  }

  return (
    <div className="App">
     {chooseCurrentScreen()}
    </div>
  );
}

export default App;