import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Design System/Layout',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const Spacing: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <p className="text-sm font-medium mb-2">Spacing Scale</p>
        <div className="flex items-end gap-1">
          {[1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64].map((n) => (
            <div 
              key={n} 
              className="bg-primary"
              style={{ width: '20px', height: `${n * 4}px` }}
              title={`${n * 4}px`}
            />
          ))}
        </div>
      </div>
    </div>
  ),
}

export const ContainerSizes: Story = {
  render: () => (
    <div className="p-8 space-y-6">
      <div className="border border-dashed border-red-500 p-2">
        <p className="text-sm mb-2">max-w-sm (384px)</p>
        <div className="max-w-sm bg-muted p-4 rounded">
          Container content
        </div>
      </div>
      <div className="border border-dashed border-red-500 p-2">
        <p className="text-sm mb-2">max-w-md (448px)</p>
        <div className="max-w-md bg-muted p-4 rounded">
          Container content
        </div>
      </div>
      <div className="border border-dashed border-red-500 p-2">
        <p className="text-sm mb-2">max-w-lg (512px)</p>
        <div className="max-w-lg bg-muted p-4 rounded">
          Container content
        </div>
      </div>
      <div className="border border-dashed border-red-500 p-2">
        <p className="text-sm mb-2">max-w-xl (576px)</p>
        <div className="max-w-xl bg-muted p-4 rounded">
          Container content
        </div>
      </div>
      <div className="border border-dashed border-red-500 p-2">
        <p className="text-sm mb-2">max-w-2xl (672px)</p>
        <div className="max-w-2xl bg-muted p-4 rounded">
          Container content
        </div>
      </div>
    </div>
  ),
}

export const Grid: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <p className="text-sm font-medium mb-2">2 Column Grid</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted p-4 rounded">Item 1</div>
          <div className="bg-muted p-4 rounded">Item 2</div>
          <div className="bg-muted p-4 rounded">Item 3</div>
          <div className="bg-muted p-4 rounded">Item 4</div>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">3 Column Grid</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-muted p-4 rounded">Item 1</div>
          <div className="bg-muted p-4 rounded">Item 2</div>
          <div className="bg-muted p-4 rounded">Item 3</div>
          <div className="bg-muted p-4 rounded">Item 4</div>
          <div className="bg-muted p-4 rounded">Item 5</div>
          <div className="bg-muted p-4 rounded">Item 6</div>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">4 Column Grid</p>
        <div className="grid grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((n) => (
            <div key={n} className="bg-muted p-4 rounded">Item {n}</div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Auto-fit Grid (minmax 200px)</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {[1,2,3,4,5].map((n) => (
            <div key={n} className="bg-muted p-4 rounded">Item {n}</div>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const Flex: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <p className="text-sm font-medium mb-2">Flex Row</p>
        <div className="flex gap-4">
          <div className="bg-muted p-4 rounded">Item 1</div>
          <div className="bg-muted p-4 rounded">Item 2</div>
          <div className="bg-muted p-4 rounded">Item 3</div>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Flex Row - Center</p>
        <div className="flex items-center gap-4">
          <div className="bg-muted p-4 rounded">Item 1</div>
          <div className="bg-muted p-8 rounded">Item 2 (taller)</div>
          <div className="bg-muted p-4 rounded">Item 3</div>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Flex Row - Between</p>
        <div className="flex justify-between">
          <div className="bg-muted p-4 rounded">Left</div>
          <div className="bg-muted p-4 rounded">Right</div>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Flex Column</p>
        <div className="flex flex-col gap-4">
          <div className="bg-muted p-4 rounded">Item 1</div>
          <div className="bg-muted p-4 rounded">Item 2</div>
          <div className="bg-muted p-4 rounded">Item 3</div>
        </div>
      </div>
    </div>
  ),
}

export const AspectRatios: Story = {
  render: () => (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm mb-2">16:9</p>
          <div className="aspect-video bg-muted flex items-center justify-center rounded">
            <span className="text-muted-foreground">16:9</span>
          </div>
        </div>
        <div>
          <p className="text-sm mb-2">4:3</p>
          <div className="aspect-[4/3] bg-muted flex items-center justify-center rounded">
            <span className="text-muted-foreground">4:3</span>
          </div>
        </div>
        <div>
          <p className="text-sm mb-2">1:1</p>
          <div className="aspect-square bg-muted flex items-center justify-center rounded">
            <span className="text-muted-foreground">1:1</span>
          </div>
        </div>
        <div>
          <p className="text-sm mb-2">3:4</p>
          <div className="aspect-[3/4] bg-muted flex items-center justify-center rounded">
            <span className="text-muted-foreground">3:4</span>
          </div>
        </div>
        <div>
          <p className="text-sm mb-2">9:16</p>
          <div className="aspect-[9/16] bg-muted flex items-center justify-center rounded">
            <span className="text-muted-foreground">9:16</span>
          </div>
        </div>
        <div>
          <p className="text-sm mb-2">3:2</p>
          <div className="aspect-[3/2] bg-muted flex items-center justify-center rounded">
            <span className="text-muted-foreground">3:2</span>
          </div>
        </div>
      </div>
    </div>
  ),
}