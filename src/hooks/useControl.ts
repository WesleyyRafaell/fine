import { create } from 'zustand'

export type Transaction = {
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
	updateControl: (controls: Control[]) => void
	updateNameControl: (id: string, name: string) => void
	addNewTransaction: (id: string, transaction: Transaction) => void
	updateTransaction: (
		idControl: string,
		idTransaction: string,
		type: 'name' | 'value',
		value: string,
	) => void

	selectedControl: Control
	setSelectedControl: (id: string) => void
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
	updateNameControl: (id, name) => {
		set((state) => ({
			controls: [
				...state.controls.map((item) => {
					if (item.id === id) {
						item.name = name
						set({ selectedControl: item })
						return item
					}

					return item
				}),
			],
		}))
	},
	addNewTransaction: (id, transaction) => {
		set((state) => ({
			controls: [
				...state.controls.map((item) => {
					if (item.id === id) {
						item.transactions.push(transaction)
						set({ selectedControl: item })
						return item
					}
					return item
				}),
			],
		}))
	},
	updateTransaction: (idControl, idTransaction, type, value) => {
		set((state) => ({
			controls: [
				...state.controls.map((item) => {
					if (item.id === idControl) {
						item.transactions.map((itemTransaction) => {
							if (itemTransaction.id === idTransaction) {
								itemTransaction[type] = value
							}
							set({ selectedControl: item })
							return item
						})
					}
					return item
				}),
			],
		}))
	},
	updateControl: (controls) => set({ controls }),
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
	setSelectedControl: (id) => {
		set((state) => ({
			selectedControl: state.controls.filter((item) => item.id === id)[0],
		}))
	},
}))
