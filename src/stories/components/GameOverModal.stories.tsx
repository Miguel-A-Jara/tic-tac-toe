// React
import { unstable_batchedUpdates } from 'react-dom'

// Third Party
import type { Meta, StoryObj } from '@storybook/react'

// Project
import { useTicTacToe } from '~/zustand/tic-tac-toe'
import GameOverModal from '~/ui/components/GameOverModal'

type Story = StoryObj<typeof GameOverModal>

const meta = {
  title: 'components/GameOverModal',
  component: GameOverModal,
} satisfies Meta<typeof GameOverModal>

export default meta

export const Primary: Story = {
  args: {
    isOpen: true,
    onClose: () =>
      //* NOTE: https://docs.pmnd.rs/zustand/guides/event-handler-in-pre-react-18
      unstable_batchedUpdates(() => useTicTacToe.getState().resetState()),
  },
}
