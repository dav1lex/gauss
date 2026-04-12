import type { Meta, StoryObj } from '@storybook/react'
import { Contact } from '@/components/titan/contact'

const meta: Meta<typeof Contact> = {
  title: 'Titan/Contact',
  component: Contact,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Contact>

export const Default: Story = {
  render: () => <Contact />,
}