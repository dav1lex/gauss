import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/components/ui/badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Visual style variant'
    }
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge>Default</Badge>
      <Badge className="text-xs">Small</Badge>
      <Badge className="text-sm">Medium</Badge>
      <Badge className="text-lg px-4 py-2">Large</Badge>
    </div>
  ),
}

export const StatusBadges: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="default" className="gap-1">
        <span className="w-2 h-2 rounded-full bg-current" />
        Online
      </Badge>
      <Badge variant="destructive" className="gap-1">
        <span className="w-2 h-2 rounded-full bg-current" />
        Offline
      </Badge>
    </div>
  ),
}