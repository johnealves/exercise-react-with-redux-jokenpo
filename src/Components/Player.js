import React from 'react';
import ComandButtons from './ComandButtons';
import PlayerOptions from './PlayerOptions';

class Player extends React.Component {
  constructor() {
    super()

    this.setPlayerGame = this.setPlayerGame.bind(this);
    this.handleDisplayOptions = this.handleDisplayOptions.bind(this);
    this.handleDiplayPlay = this.handleDiplayPlay.bind(this);

    this.state = {
      playerGame: '',
      disableButtonPlay: true,
      displayButtonPlay: false,
      displayOptions: true,
    }
  }

  setPlayerGame(value) {
    const { handlePlayerSelect } = this.props
    handlePlayerSelect(value)
    this.setState({ playerGame: value, disableButtonPlay: false, displayButtonPlay: true })
  }

  handleDisplayOptions() {
    this.setState({ displayOptions: false });
  }

  handleDiplayPlay() {
    console.log('button play')
    this.setState({ displayButtonPlay: false })
  }

  render() {
    const { statusPlayerChoice } = this.props
    const { playerGame, disableButtonPlay, displayButtonPlay, displayOptions } = this.state;
    return (
      <div>
        <p>Player: {(playerGame) ? playerGame : "escolha um opção" }</p>
        {(displayOptions) && <PlayerOptions setPlayerGame={ this.setPlayerGame } /> }
        <ComandButtons
          statusPlayerChoice={ statusPlayerChoice }
          disableButtonPlay={ disableButtonPlay }
          displayButtonPlay={ displayButtonPlay }
          handleDisplayOptions={ this.handleDisplayOptions }
          handleDiplayPlay={ this.handleDiplayPlay }
        />
      </div>
    )
  }
}

export default Player;
