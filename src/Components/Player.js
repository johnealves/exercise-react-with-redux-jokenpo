import React from 'react';
import { connect } from 'react-redux';
import ComandButtons from './ComandButtons';
import PlayerOptions from './PlayerOptions';

class Player extends React.Component {
  render() {
    const { displayOptions, playerOption } = this.props
    return (
      <div>
        <p>Player: {(playerOption) ? playerOption : "escolha um opção" }</p>
        {(displayOptions) && <PlayerOptions /> }
        <ComandButtons />
      </div>
    )
  }
}

const mapStateToProps = (state)  => ({

})

export default connect(mapStateToProps)(Player);
