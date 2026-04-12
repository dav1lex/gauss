import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@/components/ui/textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Your message
      </label>
      <Textarea id="message" placeholder="Type your message here." />
      <p className="text-sm text-muted-foreground">Your message will be copied to the support team.</p>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
  },
}

export const Error: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <label htmlFor="message-2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Message
      </label>
      <Textarea
        id="message-2"
        placeholder="Type your message here."
        className="border-red-500"
        defaultValue="This is an error message"
      />
      <p className="text-sm text-red-500">Message is required.</p>
    </div>
  ),
}

export const Small: Story = {
  args: {
    placeholder: 'Small textarea',
    className: 'h-20',
  },
}

export const Large: Story = {
  args: {
    placeholder: 'Large textarea',
    className: 'h-40',
  },
}