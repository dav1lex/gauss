import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="accept" defaultChecked />
      <Label htmlFor="accept">I agree</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled" className="opacity-50">Disabled checkbox</Label>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="notifications" defaultChecked />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="notifications">Push notifications</Label>
        <p className="text-sm text-muted-foreground">Receive notifications about activity.</p>
      </div>
    </div>
  ),
}

export const List: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="react" defaultChecked />
        <Label htmlFor="react">React</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="vue" />
        <Label htmlFor="vue">Vue</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="angular" />
        <Label htmlFor="angular">Angular</Label>
      </div>
    </div>
  ),
}