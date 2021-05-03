import React from 'react';
import { connect } from 'react-redux';

class ComandButtons extends React.Component {
  constructor(props) {
    super(props)

    this.playGame = this.playGame.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }

  playGame() {

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
  displayButtonPlay: state.buttonsReducer.displayButtonPlay,
  displayButtonReload: state.buttonsReducer.displayButtonReload,
})

const mapDispatchToprops = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToprops)(ComandButtons);
