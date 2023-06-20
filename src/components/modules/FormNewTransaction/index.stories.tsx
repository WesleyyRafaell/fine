import type { Meta, StoryObj } from '@storybook/react'

import FormNewTransaction from '.'

const meta: Meta<typeof FormNewTransaction> = {
	title: 'FormNewTransaction',
	component: FormNewTransaction
}

export default meta

type Story = StoryObj<typeof FormNewTransaction>

export const Default: Story = {}
