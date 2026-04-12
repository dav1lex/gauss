import type { Meta, StoryObj } from '@storybook/react'
import { Services } from '@/components/titan/services'

const meta: Meta<typeof Services> = {
  title: 'Titan/Services',
  component: Services,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Services>

export const Default: Story = {
  render: () => <Services />,
}