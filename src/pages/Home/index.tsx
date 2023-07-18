import ControlContainer from '@/components/modules/ControlContainer'
import * as S from './style'
import Button from '@/components/elements/button'
import Card from '@/components/elements/Card'
import cardMock from './cardMock'

const Home = () => {
	const newControl = () => {
		const control = {
			name: 'Novo controle',
			values: {
				total: '0',
				income: '0',
				expense: '0'
			},
			transactions: []
		}

		console.log(`control`, control)
	}

	return (
		<S.Container>
			<S.Wrapper>
				<S.Box>
					<Button passFunction={newControl}>Novo controle</Button>
					<S.CardsContainer>
						{cardMock.map((item) => (
							<Card key={item.name} name={item.name} />
						))}
					</S.CardsContainer>
				</S.Box>
				<S.Box>
					<ControlContainer />
				</S.Box>
			</S.Wrapper>
		</S.Container>
	)
}

export default Home
