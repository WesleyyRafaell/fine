import type { Meta, StoryObj } from '@storybook/react'

import ResultIndicator from '.'

const meta: Meta<typeof ResultIndicator> = {
	title: 'ResultIndicator',
	component: ResultIndicator,
	argTypes: {
		moneySignColor: {
			options: ['red', 'green', 'orange'],
			control: { type: 'radio' },
		},
	},
	parameters: {
		backgrounds: { default: 'dark' },
	},
}

export default meta

type Story = StoryObj<typeof ResultIndicator>

export const Default: Story = {
	args: {
		total: 905,
	},
}
