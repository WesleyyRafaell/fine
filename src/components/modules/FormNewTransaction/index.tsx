import Input from '@/components/elements/Input'
import * as S from './style'
import SmallButton from '@/components/elements/SmallButton'

const FormNewTransaction = () => {
	return (
		<S.Container>
			<S.Box>
				<Input labelName="Nome transação" placeholder="Luz" inputSize="small" />
				<SmallButton>Receita</SmallButton>
			</S.Box>
			<S.Box>
				<Input labelName="Valor" placeholder="255" money inputSize="small" />
				<SmallButton color="red">Despesa</SmallButton>
			</S.Box>
		</S.Container>
	)
}

export default FormNewTransaction
