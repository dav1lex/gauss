import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '@/components/ui/slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => (
    <Slider defaultValue={[50]} max={100} step={1} className="w-[200px]" />
  ),
}

export const Range: Story = {
  render: () => (
    <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[200px]" />
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Label>Volume</Label>
      <Slider defaultValue={[50]} max={100} step={1} />
      <p className="text-sm text-muted-foreground">Adjust the volume slider</p>
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <Slider defaultValue={[50]} max={100} step={1} className="w-[150px]" />
  ),
}

export const Large: Story = {
  render: () => (
    <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
  ),
}

export const Steps: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Label className="mb-4 block">Small steps (10)</Label>
        <Slider defaultValue={[30]} max={100} step={10} className="w-full" />
      </div>
      <div>
        <Label className="mb-4 block">Medium steps (25)</Label>
        <Slider defaultValue={[50]} max={100} step={25} className="w-full" />
      </div>
      <div>
        <Label className="mb-4 block">Large steps (50)</Label>
        <Slider defaultValue={[50]} max={100} step={50} className="w-full" />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Slider defaultValue={[50]} max={100} step={1} disabled className="w-[200px]" />
  ),
}