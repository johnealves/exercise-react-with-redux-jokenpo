export const statusDisplayOptions = (status) => ({
  type: 'SET_DISPLAT_OPTIONS',
  status,
})

export const setPlayerGame = (choice) => ({
  type: 'SET_PLAYER_GAME',
  choice,
})

export const setCpuGame = (choice) => ({
  type: 'SET_CPU_GAME',
  choice,
})

export const statusButtonPlay = (status) => ({
  type: 'STATUS_BUTTON_PLAY',
  status
})

export const activeStartGame = () => ({
  type: 'START_GAME'
})

export const setDisplayButtonReload = () => ({
  type: 'DISPLAY_BUTTON_RELOAD'
})