import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from '@/components/titan/navbar'
import { Hero } from '@/components/titan/hero'
import { Services } from '@/components/titan/services'
import { Projects } from '@/components/titan/projects'
import { About } from '@/components/titan/about'
import { Contact } from '@/components/titan/contact'
import { Footer } from '@/components/titan/footer'

const meta: Meta = {
  title: 'Titan/Landing Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const FullPage: Story = {
  render: () => (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  ),
}