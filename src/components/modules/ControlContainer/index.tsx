import { useControl } from '@/hooks/useControl'
import CardTransaction from '../CardTransaction'
import DisplayResults from '../DisplayResults'
import FormNewTransaction from '../FormNewTransaction'
import * as S from './style'

const ControlContainer = () => {
	const {
		selectedControl: { values, transactions },
	} = useControl()

	return (
		<S.Container>
			<DisplayResults
				total={values.total}
				income={values.income}
				expense={values.expense}
			/>
			{transactions?.map(({ id, name, value, type }) => (
				<CardTransaction key={id} name={name} value={value} type={type} />
			))}

			<FormNewTransaction />
		</S.Container>
	)
}

export default ControlContainer
