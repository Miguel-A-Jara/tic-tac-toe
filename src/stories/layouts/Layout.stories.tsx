// Third Party
import type { Meta, StoryObj } from '@storybook/react'
import { HelmetProvider } from 'react-helmet-async'

// Project
import Layout from '~/ui/layouts/Layout'

type Story = StoryObj<typeof Layout>

const meta = {
  title: 'layouts/Layout',
  component: Layout,
  decorators: [
    (Story) => (
      <HelmetProvider>
        <Story />
      </HelmetProvider>
    ),
  ],
} satisfies Meta<typeof Layout>

export default meta

export const Primary: Story = {
  args: {
    children: <h1 className='text-center text-3xl'>Layout Children</h1>,
  },
}
