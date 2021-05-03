import React from 'react';
import './App.css';
import CpuChoice from './Components/CpuChoice';
import Player from './Components/Player';
import ResultMessage from './Components/resultMessge';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Jokenpo</h1>
        <section className="game-board">
          <ResultMessage />
          <CpuChoice />
          <p>VS</p>
          <Player />
        </section>
      </div>
    );
  }
}

export default App;
