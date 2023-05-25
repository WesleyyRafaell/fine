import type { Meta, StoryObj } from '@storybook/react'

import CardTransaction from '.'

const meta: Meta<typeof CardTransaction> = {
	title: 'CardTransaction',
	component: CardTransaction
}

// argTypes: {
// 	type: {
// 		options: ['red', 'green'],
// 		control: { type: 'radio' }
// 	}
// }

export default meta

type Story = StoryObj<typeof CardTransaction>

export const Default: Story = {
	args: {
		name: 'Luz',
		value: '250,00'
	}
}
