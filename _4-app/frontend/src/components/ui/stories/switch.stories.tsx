import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" defaultChecked />
      <Label htmlFor="notifications">Notifications</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled" disabled />
      <Label htmlFor="disabled" className="opacity-50">Disabled</Label>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Switch id="marketing" defaultChecked />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="marketing">Marketing emails</Label>
        <p className="text-sm text-muted-foreground">Receive emails about new products and features.</p>
      </div>
    </div>
  ),
}

export const Row: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="notifications-2">Push notifications</Label>
        <Switch id="notifications-2" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="sms">SMS notifications</Label>
        <Switch id="sms" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="email">Email notifications</Label>
        <Switch id="email" defaultChecked />
      </div>
    </div>
  ),
}