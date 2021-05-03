import React, { Component } from 'react';

class CpuChoice extends Component {
  constructor() {
    super()

    this.state = {
      cpuGame: ''
    }
  }
  componentDidMount() {
    const { handleCpuSelect } = this.props;
    const options = ['Pedra', 'Papel', 'Tesoura'];
    const choice = options[Math.floor(Math.random() * options.length)]
    this.setState({ cpuGame: choice })
    handleCpuSelect(choice);
  }

  // cpuOption() {
  //   const { handleCpuSelect } = this.props;
  //   const options = ['Pedra', 'Papel', 'tesoura'];
  //   const choice = options[Math.floor(Math.random() * options.length)];
  //   handleCpuSelect(choice);
  //   return choice;
  // }

  render() {
    const { playerChoiceSelectd } = this.props;
    const { cpuGame } = this.state;
    return (
      <p>CPU: { (playerChoiceSelectd) ? cpuGame : 'aguardando jogador'}</p>
    );
  }
}

export default CpuChoice;
