import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Info Alert</AlertTitle>
      <AlertDescription>This is an informational alert.</AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert className="border-green-500 bg-green-50">
      <AlertTitle className="text-green-700">Success</AlertTitle>
      <AlertDescription className="text-green-600">
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert className="border-yellow-500 bg-yellow-50">
      <AlertTitle className="text-yellow-700">Warning</AlertTitle>
      <AlertDescription className="text-yellow-600">
        Your session will expire soon.
      </AlertDescription>
    </Alert>
  ),
}

export const Error: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Alert className="gap-3">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>You can add icons to your alerts.</AlertDescription>
      </div>
    </Alert>
  ),
}

export const Dismissible: Story = {
  render: () => (
    <Alert className="pr-10 relative">
      <AlertTitle>Dismissible</AlertTitle>
      <AlertDescription>This alert can be dismissed.</AlertDescription>
      <button className="absolute top-2 right-2 opacity-70 hover:opacity-100">×</button>
    </Alert>
  ),
}