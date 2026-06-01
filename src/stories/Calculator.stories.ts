import type { Meta, StoryObj } from '@storybook/react-vite'
import Calculator from '../components/Calculator'

const meta = {
  component: Calculator,
} satisfies Meta<typeof Calculator>

export default meta
type Story = StoryObj<typeof meta>

export const Initial: Story = {}
