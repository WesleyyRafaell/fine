import { create } from 'zustand'

export type Transaction = {
	id: string
	name: string
	value: string
	visible: boolean
	type: 'red' | 'green'
}

type Control = {
	id: string
	name: string
	values: {
		total: number
		income: number
		expense: number
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
	updateTypeTransaction: (
		idControl: string,
		idTransaction: string,
		type: 'red' | 'green',
	) => void
	updateVisibilityTransaction: (
		idControl: string,
		idTransaction: string,
		visible: boolean,
	) => void

	selectedControl: Control
	setSelectedControl: (id: string) => void
	setDeleteControl: (idControl: string) => void
	setDeleteTransaction: (idControl: string, idTransaction: string) => void
	updateResults: (item: Control) => void
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
						state.updateResults(item)
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
							state.updateResults(item)
							return item
						})
					}
					return item
				}),
			],
		}))
	},
	updateTypeTransaction: (idControl, idTransaction, type) => {
		set((state) => ({
			controls: [
				...state.controls.map((item) => {
					if (item.id === idControl) {
						item.transactions.map((itemTransaction) => {
							if (itemTransaction.id === idTransaction) {
								itemTransaction.type = type
							}
							set({ selectedControl: item })
							state.updateResults(item)
							return item
						})
					}
					return item
				}),
			],
		}))
	},
	updateVisibilityTransaction: (idControl, idTransaction, visible) => {
		set((state) => ({
			controls: [
				...state.controls.map((item) => {
					if (item.id === idControl) {
						item.transactions.map((itemTransaction) => {
							if (itemTransaction.id === idTransaction) {
								itemTransaction.visible = visible
							}
							set({ selectedControl: item })
							state.updateResults(item)
							return item
						})
					}
					return item
				}),
			],
		}))
	},
	updateResults: (item) => {
		const incomes = item.transactions.filter(
			(item) => item.type === 'green' && item.value && item.visible,
		)

		const totalIncome = incomes
			.map((item) => parseFloat(item.value.replace('.', '')))
			.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

		const expenses = item.transactions.filter(
			(item) => item.type === 'red' && item.value && item.visible,
		)

		const totalExpense = expenses
			.map((item) => parseFloat(item.value.replace('.', '')))
			.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

		const newValues = {
			expense: totalExpense,
			income: totalIncome,
			total: totalIncome - totalExpense,
		}

		const newSelectedControl = {
			...item,
			values: newValues,
		}

		set({ selectedControl: newSelectedControl })
	},
	setDeleteControl: (idControl) => {
		set((state) => ({
			selectedControl: state.controls[0],
			controls: [...state.controls.filter((item) => item.id !== idControl)],
		}))
	},
	setDeleteTransaction: (idControl, idTransaction) => {
		set((state) => ({
			controls: [
				...state.controls.filter((item) => {
					if (item.id === idControl) {
						item.transactions = item.transactions.filter(
							(itemTransaction) => itemTransaction.id !== idTransaction,
						)
						state.updateResults(item)
						return item
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
			total: 0,
			income: 0,
			expense: 0,
		},
		transactions: [],
	},
	setSelectedControl: (id) => {
		set((state) => ({
			selectedControl: state.controls.filter((item) => item.id === id)[0],
		}))
	},
}))
