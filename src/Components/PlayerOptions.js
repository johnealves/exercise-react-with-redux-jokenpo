import React from 'react';
import { connect } from 'react-redux';

class PlayerOptions extends React.Component {
  constructor() {
    super()

    this.setChoice = this.setChoice.bind(this);
  }

  setChoice({ target }) {
  
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
 
})

export default connect(null, mapDispatchToprops)(PlayerOptions);
