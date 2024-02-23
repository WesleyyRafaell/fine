import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helper'

import Home from '.'

describe('NPage Home', () => {
	it('shoud show home elements', () => {
		renderWithTheme(<Home />)

		expect(
			screen.getByRole('button', { name: /Novo controle/i }),
		).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /receita/i })).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /despesa/i })).toBeInTheDocument()

		expect(screen.getByText(/Nome do controle/i)).toBeInTheDocument()
		expect(screen.getByText(/total/i)).toBeInTheDocument()
		expect(screen.getByText(/receitas/i)).toBeInTheDocument()
		expect(screen.getByText(/despesas/i)).toBeInTheDocument()
		expect(screen.getByText(/Nome transação/i)).toBeInTheDocument()
		expect(screen.getByText(/valor/i)).toBeInTheDocument()
	})
})
