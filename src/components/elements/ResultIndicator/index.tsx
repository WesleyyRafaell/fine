import * as S from './style'

export type ResultIndicatorProps = {
	total?: string
	text?: string
	moneySignColor?: 'red' | 'green' | 'orange'
}

const ResultIndicator = ({
	text = 'Receitas',
	total = '0',
	moneySignColor = 'orange'
}: ResultIndicatorProps) => {
	return (
		<S.Container>
			<S.Text>{text}</S.Text>
			<S.MoneySign moneySignColor={moneySignColor}>R$</S.MoneySign>
			<S.Number>{total}</S.Number>
		</S.Container>
	)
}

export default ResultIndicator
