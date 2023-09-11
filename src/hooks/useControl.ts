import { create } from 'zustand'

type Transaction = {
	id: string
	name: string
	value: string
	type: 'red' | 'green'
}

type Control = {
	id: string
	name: string
	values: {
		total: string
		income: string
		expense: string
	}
	transactions: Transaction[]
}

type ControlsProps = {
	controls: Control[]
	addControl: (control: Control) => void
	selectedControl: Control
	setSelectedControl: (control: Control) => void
}

export const useControl = create<ControlsProps>((set) => ({
	controls: [],
	addControl: (control: Control) => {
		set((state) => ({
			controls: [
				...state.controls,
				{
					id: control.id,
					name: control.name,
					values: {
						total: control.values.total,
						income: control.values.income,
						expense: control.values.expense,
					},
					transactions: control.transactions,
				},
			],
		}))
	},
	selectedControl: {
		id: '',
		name: '',
		values: {
			total: '',
			income: '',
			expense: '',
		},
		transactions: [],
	},
	setSelectedControl: (selectedControl: Control) => set({ selectedControl }),
}))
