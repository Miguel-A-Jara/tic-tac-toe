import { CurrentPlayer } from '~/zustand/tic-tac-toe'

export default function getRandomPlayer(): CurrentPlayer {
  const randomNumber = Math.random()

  if (randomNumber > 0.5) return 'circle'
  return 'cross'
}
