import type { Meta, StoryObj } from '@storybook/react'

import DisplayResults from '.'

const meta: Meta<typeof DisplayResults> = {
	title: 'DisplayResults',
	component: DisplayResults
}

export default meta

type Story = StoryObj<typeof DisplayResults>

export const Default: Story = {
	args: {
		total: '600',
		income: '900',
		expense: '300'
	}
}
