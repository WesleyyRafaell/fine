import type { Meta, StoryObj } from '@storybook/react'

import DisplayResults from '.'

const meta: Meta<typeof DisplayResults> = {
	title: 'DisplayResults',
	component: DisplayResults,
	parameters: {
		backgrounds: { default: 'dark' },
	},
}

export default meta

type Story = StoryObj<typeof DisplayResults>

export const Default: Story = {}
