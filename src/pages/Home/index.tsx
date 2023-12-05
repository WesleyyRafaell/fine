import { v4 as uuidv4 } from 'uuid'

import Button from '@/components/elements/button'
import Card from '@/components/elements/Card'
import ControlContainer from '@/components/modules/ControlContainer'
import { useControl } from '@/hooks/useControl'
import { RenderCondition } from '@/utils/renderCondition'

import * as S from './style'

const Home = () => {
	const { controls, addControl, setSelectedControl } = useControl()

	const newControl = () => {
		const newIdControl = uuidv4()

		const control = {
			id: newIdControl,
			name: 'Novo controle',
			values: {
				total: 0,
				income: 0,
				expense: 0,
			},
			transactions: [],
		}

		addControl(control)
		setSelectedControl(control.id)
	}

	return (
		<S.Container>
			<S.Wrapper>
				<S.Box>
					<Button passFunction={newControl}>Novo controle</Button>
					<S.CardsContainer>
						{controls.map((item) => (
							<Card key={item.id} id={item.id} name={item.name} />
						))}
					</S.CardsContainer>
				</S.Box>
				<S.Box>
					<RenderCondition condition={controls.length > 0}>
						<ControlContainer />
					</RenderCondition>
				</S.Box>
			</S.Wrapper>
		</S.Container>
	)
}

export default Home
