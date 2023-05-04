import * as S from './style'

export type CardTransactionProps = {
	type: 'red' | 'green'
	name: string
	value: string
}

const CardTransaction = ({ type, name, value }: CardTransactionProps) => {
	return (
		<S.Container>
			<S.TypeTransaction type={type} />
			<S.Text>{name}</S.Text>
			<S.Text>{value}</S.Text>
		</S.Container>
	)
}

export default CardTransaction
