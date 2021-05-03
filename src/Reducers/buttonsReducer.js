const INITIAL_STATE = {
  displayButtonPlay: false,
  displayButtonReload: false,
}

const buttonsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'STATUS_BUTTON_PLAY':
    return {
      ...state,
      displayButtonPlay: action.status,
    }
  case 'DISPLAY_BUTTON_RELOAD':
    return {
      ...state,
      displayButtonReload: true,
    }
  default:
    return state;
  }
}

export default buttonsReducer;