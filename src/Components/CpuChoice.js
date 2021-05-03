import React, { Component } from 'react';
import { connect } from 'react-redux';

class CpuChoice extends Component {
  componentDidMount() {
    const options = ['Pedra', 'Papel', 'Tesoura'];
    const choice = options[Math.floor(Math.random() * options.length)]
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

})

export default connect(mapStateToProps, mapDispatchToProps)(CpuChoice);
