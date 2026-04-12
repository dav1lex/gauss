import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from '@/components/titan/hero'

const meta: Meta<typeof Hero> = {
  title: 'Titan/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  render: () => <Hero />,
}