import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from '@/components/titan/navbar'

const meta: Meta<typeof Navbar> = {
  title: 'Titan/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 p-6">
        <p className="text-muted-foreground">Scroll down to see fixed navbar</p>
      </div>
    </div>
  ),
}