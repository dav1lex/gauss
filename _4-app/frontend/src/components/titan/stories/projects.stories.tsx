import type { Meta, StoryObj } from '@storybook/react'
import { Projects } from '@/components/titan/projects'

const meta: Meta<typeof Projects> = {
  title: 'Titan/Projects',
  component: Projects,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Projects>

export const Default: Story = {
  render: () => <Projects />,
}