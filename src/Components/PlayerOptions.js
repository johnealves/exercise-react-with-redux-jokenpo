import React from 'react';
import { connect } from 'react-redux';
import { setPlayerGame, statusButtonPlay } from '../Actions';

class PlayerOptions extends React.Component {
  constructor() {
    super()

    this.setChoice = this.setChoice.bind(this);
  }

  setChoice({ target }) {
    const { setPlayerGame, statusButtonPlay } = this.props;
    setPlayerGame(target.innerText);
    statusButtonPlay(true)
  }

  render() {
    return (
      <div>
        <button
          className="button-option"
          type="button"
          onClick={ this.setChoice }
        >
          Pedra
        </button>
        <button
          className="button-option"
          type="button"
          onClick={ this.setChoice }
        >
          Papel
        </button>
        <button
          className="button-option"
          type="button"
          onClick={ this.setChoice }
        >
          Tesoura
        </button>
      </div>
    )
  }
}

const mapDispatchToprops = (dispatch) => ({
  setPlayerGame: (choice) => dispatch(setPlayerGame(choice)),
  statusButtonPlay: (status) => dispatch(statusButtonPlay(status)),
})

export default connect(null, mapDispatchToprops)(PlayerOptions);
