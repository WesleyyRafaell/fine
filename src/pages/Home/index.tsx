import ControlContainer from '@/components/modules/ControlContainer'
import * as S from './style'
import Button from '@/components/elements/button'
import Card from '@/components/elements/Card'
import { useControl } from '@/hooks/useControl'
import { RenderCondition } from '@/utils/renderCondition'
import { v4 as uuidv4 } from 'uuid'

const Home = () => {
	const { controls, selectedControl, addControl, setSelectedControl } =
		useControl()

	const newControl = () => {
		const newIdControl = uuidv4()

		const control = {
			id: newIdControl,
			name: 'Novo controle',
			values: {
				total: '0',
				income: '0',
				expense: '0',
			},
			transactions: [],
		}

		// console.log(`control`, control)
		addControl(control)
		setSelectedControl(control)
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
					<RenderCondition condition={!!selectedControl.name.length}>
						<ControlContainer />
					</RenderCondition>
					<RenderCondition condition={!selectedControl.name.length}>
						<p>Nenhum card selecionado</p>
					</RenderCondition>
				</S.Box>
			</S.Wrapper>
		</S.Container>
	)
}

export default Home
