// Third Party
import type { Meta, StoryObj } from '@storybook/react'

// Project
// import App from '~/App'
import DifficultySlider from '~/ui/input/DifficultySlider'

type Story = StoryObj<typeof DifficultySlider>

const meta = {
  title: 'input/DifficultySlider',
  component: DifficultySlider,
  // decorators: [
  //   (Story) => (
  //     <App>
  //       <Story />
  //     </App>
  //   ),
  // ],
} satisfies Meta<typeof DifficultySlider>

export default meta

export const Primary: Story = {}
