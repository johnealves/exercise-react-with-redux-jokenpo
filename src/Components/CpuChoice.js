import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCpuGame } from '../Actions';

class CpuChoice extends Component {
  componentDidMount() {
    const { setCpuGame } = this.props;
    const options = ['Pedra', 'Papel', 'Tesoura'];
    const choice = options[Math.floor(Math.random() * options.length)]
    setCpuGame(choice)
  }

  render() {
    const { startGame, cpuOption } = this.props;
    return (
      <p>CPU: { (startGame) ? cpuOption : 'aguardando jogador'}</p>
    );
  }
}

const mapStateToProps = (state) => ({
  cpuOption: state.gameReducer.cpuOption,
  startGame: state.gameReducer.startGame,
})

const mapDispatchToProps = (dispatch) => ({
  setCpuGame: (choice) => dispatch(setCpuGame(choice))
})

export default connect(mapStateToProps, mapDispatchToProps)(CpuChoice);
