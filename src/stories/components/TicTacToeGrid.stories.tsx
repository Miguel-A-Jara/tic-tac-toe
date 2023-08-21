// Third Party
import type { Meta, StoryObj } from '@storybook/react'

// Project
import TicTacToeGrid from '~/ui/components/TicTacToeGrid'
import { useTicTacToe } from '~/zustand/tic-tac-toe'

type Story = StoryObj<typeof TicTacToeGrid>

const meta = {
  title: 'components/TicTacToeGrid',
  component: TicTacToeGrid,
  args: {
    grid: useTicTacToe.getState().ticTacToeGrid,
  },
} satisfies Meta<typeof TicTacToeGrid>

export default meta

export const Primary: Story = {
  args: {},
}
