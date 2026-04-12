import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Design System/Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const Headings: Story = {
  render: () => (
    <div className="space-y-6 p-8 max-w-4xl">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Heading 1 - The quick brown fox
      </h1>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Heading 2 - The quick brown fox
      </h2>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Heading 3 - The quick brown fox
      </h3>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Heading 4 - The quick brown fox
      </h4>
      <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
        Heading 5 - The quick brown fox
      </h5>
      <h6 className="scroll-m-20 text-base font-semibold tracking-tight">
        Heading 6 - The quick brown fox
      </h6>
    </div>
  ),
}

export const Paragraphs: Story = {
  render: () => (
    <div className="space-y-6 p-8 max-w-4xl">
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Default paragraph - The quick brown fox jumps over the lazy dog. 
        This is standard body text that you'll use throughout the application.
      </p>
      <p className="text-sm leading-7 [&:not(:first-child)]:mt-6">
        Small paragraph - The quick brown fox jumps over the lazy dog. 
        Use for captions, helper text, and secondary information.
      </p>
      <p className="text-lg leading-8 [&:not(:first-child)]:mt-6">
        Large paragraph - The quick brown fox jumps over the lazy dog. 
        Use for important callouts and featured content.
      </p>
    </div>
  ),
}

export const TextStyles: Story = {
  render: () => (
    <div className="space-y-6 p-8 max-w-4xl">
      <div className="space-y-2">
        <p className="font-medium">Medium weight</p>
        <p className="font-normal">Normal weight</p>
        <p className="font-semibold">Semibold weight</p>
        <p className="font-bold">Bold weight</p>
        <p className="font-extrabold">Extrabold weight</p>
      </div>
      
      <hr />
      
      <div className="space-y-2">
        <p className="text-xs">Extra small text - 12px</p>
        <p className="text-sm">Small text - 14px</p>
        <p className="text-base">Base text - 16px</p>
        <p className="text-lg">Large text - 18px</p>
        <p className="text-xl">Extra large - 20px</p>
      </div>
    </div>
  ),
}

export const Muted: Story = {
  render: () => (
    <div className="space-y-4 p-8">
      <p className="text-muted-foreground">
        Muted foreground - The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-muted-foreground text-sm">
        Muted with small - The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  ),
}

export const Code: Story = {
  render: () => (
    <div className="space-y-4 p-8">
      <p className="font-mono">Monospace text - const x = 42;</p>
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        Inline code
      </code>
      <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
        <code className="font-mono text-sm">
{`function hello() {
  console.log("Hello, World!");
}`}
        </code>
      </pre>
    </div>
  ),
}

export const Links: Story = {
  render: () => (
    <div className="space-y-4 p-8">
      <p>
        This is a <a href="#" className="text-primary underline-offset-4 hover:underline">primary link</a> in text.
      </p>
      <p>
        This is a <a href="#" className="text-muted-foreground underline-offset-4 hover:underline">muted link</a> in text.
      </p>
    </div>
  ),
}