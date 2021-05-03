export const rockSelected = (cpuSelect) => {
  if (cpuSelect === 'Pedra') return 'Empate';
  if (cpuSelect === 'Papel') return 'Derrota';
  if (cpuSelect === 'Tesoura') return 'Vitoria';
}

export const paperSelected = (cpuSelect) => {
  if (cpuSelect === 'Pedra') return 'Vitoria';
  if (cpuSelect === 'Papel') return 'Empate';
  if (cpuSelect === 'Tesoura') return 'Derrota';
}

export const scisorSelected = (cpuSelect) => {
  if (cpuSelect === 'Pedra') return 'Derrota';
  if (cpuSelect === 'Papel') return 'Vitoria';
  if (cpuSelect === 'Tesoura') return 'Empate';
}
