import React from 'react';
import { connect } from 'react-redux';
import { rockSelected, paperSelected, scisorSelected } from '../Data';

class resultMessage extends React.Component {
  constructor(props) {
    super(props);

    this.checkWinner = this.checkWinner.bind(this);
  }

  checkWinner() {
    const { playerOption, cpuOption } = this.props;
    switch (playerOption) {
    case 'Pedra':
      return rockSelected(cpuOption);
    case 'Papel':
      return paperSelected(cpuOption)
    case 'Tesoura':
      return scisorSelected(cpuOption)
    default:
      return '';
    }
  }

  render() {
    const { startGame } = this.props;
    return (
      <div>
        <p>{(startGame) ? <h2>{ this.checkWinner() }</h2> : 'Escolha uma opção e clique em jogar'}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(resultMessage);
