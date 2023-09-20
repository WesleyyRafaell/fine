import { useControl } from '@/hooks/useControl'
import CardTransaction from '../CardTransaction'
import DisplayResults from '../DisplayResults'
import FormNewTransaction from '../FormNewTransaction'
import * as S from './style'

const ControlContainer = () => {
	const {
		selectedControl: { id, values, transactions, name },
	} = useControl()

	return (
		<S.Container>
			<DisplayResults
				total={values.total}
				income={values.income}
				expense={values.expense}
				initialValue={name}
			/>
			{transactions?.map((item) => (
				<CardTransaction
					key={item.id}
					idControl={id}
					idTransaction={item.id}
					name={item.name}
					value={item.value}
					type={item.type}
				/>
			))}

			<FormNewTransaction />
		</S.Container>
	)
}

export default ControlContainer
