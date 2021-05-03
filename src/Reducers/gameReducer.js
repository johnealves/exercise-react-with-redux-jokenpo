const INITIAL_STATE = {
  displayOptions: true,
  playerOption: '',
  cpuOption: '',
  startGame: false,
}

const gameReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'SET_DISPLAT_OPTIONS':
    return {
      ...state,
      displayOptions: action.status,
    }
  case 'SET_PLAYER_GAME':
    return {
      ...state,
      playerOption: action.choice,
    }
  case 'SET_CPU_GAME':
    return {
      ...state,
      cpuOption: action.choice,
    }
  case 'START_GAME':
    return {
      ...state,
      startGame: true,
    }
  default:
    return state;
  }
}

export default gameReducer;
