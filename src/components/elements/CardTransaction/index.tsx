import { useState } from 'react'
import * as S from './style'
import Image from 'next/image'

export type CardTransactionProps = {
	name: string
	value: string
}

export type TypeCardProps = 'red' | 'green'

const containerMotion = {
	rest: {
		height: '9.1rem',
		transition: {
			duration: 0.4
		}
	},
	hover: {
		height: '15rem',
		transition: {
			duration: 0.4
		}
	}
}

const opacityMotion = {
	rest: { opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
	hover: {
		opacity: 1,
		transition: {
			duration: 0.4
		}
	}
}

const CardTransaction = ({ name, value }: CardTransactionProps) => {
	const [enableCard, setEnableCard] = useState<boolean>(true)
	const [typeCard, setTypeCard] = useState<TypeCardProps>('green')

	const toogleCard = () => {
		setEnableCard(!enableCard)
	}

	const handleChangeTypeCard = (type: TypeCardProps) => {
		setTypeCard(type)
	}

	return (
		<S.Container
			variants={containerMotion}
			initial="rest"
			whileHover="hover"
			animate="rest"
			enableCard={enableCard}
			data-testid="card"
		>
			<S.TypeTransaction
				data-testid="cardType"
				type={typeCard}
				enableCard={enableCard}
			/>
			<S.Content>
				<S.HeaderContent variants={opacityMotion}>
					<S.Wrapper>
						<S.CircleButton
							onClick={() => handleChangeTypeCard('red')}
							color="red"
							data-testid="buttonRed"
						/>
						<S.CircleButton
							onClick={() => handleChangeTypeCard('green')}
							color="green"
							data-testid="buttonGreen"
						/>
					</S.Wrapper>
				</S.HeaderContent>
				<S.MainContent>
					<S.Text>{name}</S.Text>
					<S.Text>R$ {value}</S.Text>
				</S.MainContent>
				<S.FooterContent variants={opacityMotion}>
					<S.Wrapper>
						<S.ImageButton>
							{enableCard ? (
								<Image
									src="/icons/trashIcon.png"
									width={24}
									height={24}
									alt="Trash icon"
								/>
							) : (
								<Image
									src="/icons/trashLight.png"
									width={24}
									height={24}
									alt="Trash icon"
								/>
							)}
						</S.ImageButton>
						<S.ImageButton data-testid="buttonDisableCard" onClick={toogleCard}>
							{enableCard ? (
								<Image
									src="/icons/disableIcon.png"
									width={22}
									height={22}
									alt="Disable Icon"
								/>
							) : (
								<Image
									src="/icons/enable.png"
									width={24}
									height={24}
									alt="Disable Icon"
								/>
							)}
						</S.ImageButton>
					</S.Wrapper>
				</S.FooterContent>
			</S.Content>
		</S.Container>
	)
}

export default CardTransaction
