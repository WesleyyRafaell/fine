import CardTransaction from '../CardTransaction'
import DisplayResults from '../DisplayResults'
import FormNewTransaction from '../FormNewTransaction'
import * as S from './style'

const ControlContainer = () => {
	return (
		<S.Container>
			<DisplayResults total="600" income="900" expense="300" />
			<CardTransaction name="luz" value="250" />
			<CardTransaction name="luz" value="250" />
			<FormNewTransaction />
		</S.Container>
	)
}

export default ControlContainer
