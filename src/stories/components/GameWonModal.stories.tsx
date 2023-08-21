// React
import { unstable_batchedUpdates } from 'react-dom'

// Third Party
import type { Meta, StoryObj } from '@storybook/react'

// Project
import GameWonModal from '~/ui/components/GameWonModal'
import { CurrentPlayer, useTicTacToe } from '~/zustand/tic-tac-toe'

type Story = StoryObj<typeof GameWonModal>

const meta = {
  title: 'components/GameWonModal',
  component: GameWonModal,
  argTypes: {
    userThatWon: {
      control: 'radio',
      options: ['circle', 'cross'] satisfies CurrentPlayer[],
    },
  },
} satisfies Meta<typeof GameWonModal>

export default meta

export const Primary: Story = {
  args: {
    isOpen: true,
    userThatWon: 'circle',
    onClose: () =>
      //* NOTE: https://docs.pmnd.rs/zustand/guides/event-handler-in-pre-react-18
      unstable_batchedUpdates(() => useTicTacToe.getState().resetState()),
  },
}
