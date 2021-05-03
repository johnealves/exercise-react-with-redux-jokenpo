import React from 'react';

class PlayerOptions extends React.Component {
  constructor() {
    super()

    this.setChoice = this.setChoice.bind(this);

    this.state = {
      disableOptions: false,
    }
  }

  setChoice({ target }) {
    const { setPlayerGame } = this.props;
    setPlayerGame(target.innerText);
    this.setState({ disableOptions: true })
  }

  render() {
    // const { disableOptions } = this.state;
    return (
      <div>
        <button
          className="button-option"
          type="button"
          onClick={ this.setChoice }
          // disabled={ disableOptions }
        >
          Pedra
        </button>
        <button
          className="button-option"
          type="button"
          onClick={ this.setChoice }
          // disabled={ disableOptions }
        >
          Papel
        </button>
        <button
          className="button-option"
          type="button"
          onClick={ this.setChoice }
          // disabled={ disableOptions }
        >
          Tesoura
        </button>
      </div>
    )
  }
}

export default PlayerOptions;
