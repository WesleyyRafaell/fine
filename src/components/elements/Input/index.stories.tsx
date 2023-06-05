import type { Meta, StoryObj } from '@storybook/react'

import Input from '.'

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
	parameters: {
		backgrounds: { default: 'dark' }
	}
}

export default meta
type Story = StoryObj<typeof Input>
export const Default: Story = {
	args: {
		labelName: 'Nome transação',
		placeholder: 'Ex 255,00'
	}
}
