import type { Meta, StoryObj } from '@storybook/react'
import { About } from '@/components/titan/about'

const meta: Meta<typeof About> = {
  title: 'Titan/About',
  component: About,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof About>

export const Default: Story = {
  render: () => <About />,
}