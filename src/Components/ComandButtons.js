import React from 'react';
import { connect } from 'react-redux';
import {
  activeStartGame,
  setDisplayButtonReload,
  statusButtonPlay,
  statusDisplayOptions
} from '../Actions';

class ComandButtons extends React.Component {
  constructor(props) {
    super(props)

    this.playGame = this.playGame.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }

  playGame() {
    const {
      displayOptionsStatus,
      statusButtonPlay,
      activeStartGame,
      setDisplayButtonReload
    } = this.props;
    displayOptionsStatus(false)
    statusButtonPlay(false);
    activeStartGame();
    setDisplayButtonReload();
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    const { displayButtonPlay, displayButtonReload } = this.props;
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

const mapStateToProps = (state) => ({

})

const mapDispatchToprops = (dispatch) => ({
  displayOptionsStatus: (status) => dispatch(statusDisplayOptions(status)),
  statusButtonPlay: (status) => dispatch(statusButtonPlay(status)),
  activeStartGame: () => dispatch(activeStartGame()),
  setDisplayButtonReload: () => dispatch(setDisplayButtonReload()),
})

export default connect(mapStateToProps, mapDispatchToprops)(ComandButtons);
