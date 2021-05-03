import React from 'react';

class ComandButtons extends React.Component {
  constructor(props) {
    super(props)

    this.playGame = this.playGame.bind(this);
    this.refreshPage = this.refreshPage.bind(this);

    this.state = {
      displayButtonReload: false,
    }
  }

  playGame() {
    const { statusPlayerChoice, handleDisplayOptions, handleDiplayPlay } = this.props;
    statusPlayerChoice();
    this.setState({ displayButtonReload: true });
    handleDisplayOptions();
    handleDiplayPlay();
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    const { displayButtonPlay } = this.props;
    const { displayButtonReload } = this.state;
    return (
      <div>
        {(displayButtonPlay) && (
          <button className="button-play" type="button" onClick={ this.playGame }>
            Jogar
          </button>
        )}
        {(displayButtonReload) && (
          <button className="button-reload" type="button" onClick={ this.refreshPage }>
            Recarregar
          </button>
        )}
      </div>
    )
  }
}

export default ComandButtons;
