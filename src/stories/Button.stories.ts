import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import Button from '../components/Button'

const meta = {
  component: Button,
  args: { label: '7', onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Number: Story = { args: { label: '7', variant: 'number' } }
export const Operator: Story = { args: { label: '+', variant: 'operator' } }
export const Action: Story = { args: { label: 'C', variant: 'action' } }
export const Equals: Story = { args: { label: '=', variant: 'equals' } }
