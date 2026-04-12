import type { Meta, StoryObj } from '@storybook/react'
import { HeroParallax, HeroParallaxAnimated } from '@/components/titan/hero-parallax'

const meta: Meta<typeof HeroParallax> = {
  title: 'Titan/HeroParallax',
  component: HeroParallax,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof HeroParallax>

export const Default: Story = {
  args: {
    backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
  },
}

export const WithAnimatedParallax: Story = {
  render: () => (
    <HeroParallaxAnimated backgroundImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80" />
  ),
}

export const WithCityBackground: Story = {
  args: {
    backgroundImage: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=80',
  },
}

export const WithAbstractBackground: Story = {
  args: {
    backgroundImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80',
  },
}