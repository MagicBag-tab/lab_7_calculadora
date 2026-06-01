import type { Meta, StoryObj } from '@storybook/react-vite'
import Display from '../components/Display'

const meta = {
  component: Display,
  args: { value: '42' },
} satisfies Meta<typeof Display>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = { args: { value: '42' } }
export const LongValue: Story = { args: { value: '123456789' } }
export const Error: Story = { args: { value: 'ERROR' } }
