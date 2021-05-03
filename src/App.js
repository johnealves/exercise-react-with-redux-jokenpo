import React from 'react';
import './App.css';
import CpuChoice from './Components/CpuChoice';
import Player from './Components/Player';
import ResultMessage from './Components/resultMessge';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.statusPlayerChoice = this.statusPlayerChoice.bind(this);
    this.handleCpuSelect = this.handleCpuSelect.bind(this);
    this.handlePlayerSelect = this.handlePlayerSelect.bind(this);

    this.state = {
      playerChoiceSelectd: false,
      playerSelect: '',
      cpuSelect: '',
    }
  }

  statusPlayerChoice() {;
    this.setState({ playerChoiceSelectd: true })
  }

  handleCpuSelect(value) {
    this.setState({ cpuSelect: value })
  }

  handlePlayerSelect(value) {
    this.setState({ playerSelect: value })
  }

  render() {
    const { playerChoiceSelectd, playerSelect, cpuSelect } = this.state;
    return (
      <div className="App">
        <h1>Jokenpo</h1>
        <section className="game-board">
          <ResultMessage
            playerChoiceSelectd={ playerChoiceSelectd }
            playerSelect={ playerSelect }
            cpuSelect={ cpuSelect }
          />
          <CpuChoice
            playerChoiceSelectd={ playerChoiceSelectd }
            handleCpuSelect={ this.handleCpuSelect }
          />
          <p>VS</p>
          <Player 
            statusPlayerChoice={ this.statusPlayerChoice }
            handlePlayerSelect={ this.handlePlayerSelect }
          />
        </section>
      </div>
    );
  }
}

export default App;
