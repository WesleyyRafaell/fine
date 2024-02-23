import type { Meta, StoryObj } from '@storybook/react'

import SmallButton from '.'

const meta: Meta<typeof SmallButton> = {
	title: 'SmallButton',
	component: SmallButton,
	argTypes: {
		color: {
			options: ['red', 'green'],
			control: { type: 'radio' },
		},
	},
	args: {
		children: 'Receita',
	},
}

export default meta
type Story = StoryObj<typeof SmallButton>
export const Default: Story = {}
