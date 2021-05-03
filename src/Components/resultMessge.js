import React from 'react';
import { rockSelected, paperSelected, scisorSelected } from '../Data';

class resultMessage extends React.Component {
  constructor(props) {
    super(props);

    this.checkWinner = this.checkWinner.bind(this);
  }

  checkWinner() {
    const { playerSelect, cpuSelect } = this.props;
    switch (playerSelect) {
    case 'Pedra':
      return rockSelected(cpuSelect);
    case 'Papel':
      return paperSelected(cpuSelect)
    case 'Tesoura':
      return scisorSelected(cpuSelect)
    default:
      return '';
    }
  }

  render() {
    const { playerChoiceSelectd } = this.props;
    return (
      <div>
        <p>{(playerChoiceSelectd) ? <h2>{ this.checkWinner() }</h2> : 'Escolha uma opção e clique em jogar'}</p>
      </div>
    )
  }
}

export default resultMessage;
