import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helper'

import CardTransaction from '.'

describe('<CardTransaction />', () => {
	it('should render the button', () => {
		renderWithTheme(<CardTransaction name="Luz" value="R$ 255" />)

		expect(screen.getByText(/Luz/i)).toBeInTheDocument()
	})
})
