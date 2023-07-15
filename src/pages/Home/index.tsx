import ControlContainer from '@/components/modules/ControlContainer'
import * as S from './style'
import Button from '@/components/elements/button'
import Card from '@/components/elements/Card'

const Home = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<S.Box>
					<Button>Novo controle</Button>
					<S.CardsContainer>
						<Card />
						<Card />
						<Card />
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
