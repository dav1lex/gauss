import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/components/titan/badge'

const meta: Meta<typeof Badge> = {
  title: 'Titan/Badge',
  component: Badge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'BADGE TEXT',
  },
}

export const WithPulse: Story = {
  args: {
    children: 'AVAILABLE FOR PROJECTS',
    showPulse: true,
  },
}

export const Outline: Story = {
  args: {
    children: 'OUTLINE VARIANT',
    variant: 'outline',
  },
}