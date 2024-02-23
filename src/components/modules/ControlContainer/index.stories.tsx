import type { Meta, StoryObj } from '@storybook/react'

import ControlContainer from '.'

const meta: Meta<typeof ControlContainer> = {
	title: 'ControlContainer',
	component: ControlContainer,
	parameters: {
		backgrounds: { default: 'dark' },
	},
}

export default meta

type Story = StoryObj<typeof ControlContainer>

export const Default: Story = {}
