import * as React from 'react';
import { render } from "react-dom";
import logo from './images/woolverine.jpg';
import './App.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          STICH MY BITCH UP, MOTHAFUKKAAAS.
        </p>
      </div>
    );
  }
}

export default App;
