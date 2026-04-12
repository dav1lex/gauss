import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '@/components/ui/separator'

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <div>
        <p className="text-sm">Above separator</p>
      </div>
      <Separator />
      <div>
        <p className="text-sm">Below separator</p>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 items-center space-x-4">
      <span className="text-sm">Item 1</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Item 2</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Item 3</span>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm">Section 1 content</p>
      </div>
      <Separator />
      <div>
        <p className="text-sm">Section 2 content</p>
      </div>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className="w-full max-w-sm rounded-lg border p-4">
      <div className="pb-4">
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-sm text-muted-foreground">Card description</p>
      </div>
      <Separator />
      <div className="py-4">
        <p className="text-sm">Main content goes here.</p>
      </div>
      <Separator />
      <div className="pt-4 flex justify-end gap-2">
        <button className="text-sm text-muted-foreground">Cancel</button>
        <button className="text-sm font-medium">Save</button>
      </div>
    </div>
  ),
}