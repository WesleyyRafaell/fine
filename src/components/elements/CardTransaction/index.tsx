import * as S from './style'
import Image from 'next/image'

export type CardTransactionProps = {
	type: 'red' | 'green'
	name: string
	value: string
}

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

const CardTransaction = ({ type, name, value }: CardTransactionProps) => {
	return (
		<S.Container
			variants={containerMotion}
			initial="rest"
			whileHover="hover"
			animate="rest"
		>
			<S.TypeTransaction type={type} />
			<S.Content>
				<S.HeaderContent variants={opacityMotion}>
					<S.Wrapper>
						<S.CircleButton color="red" />
						<S.CircleButton color="green" />
					</S.Wrapper>
				</S.HeaderContent>
				<S.MainContent>
					<S.Text>{name}</S.Text>
					<S.Text>{value}</S.Text>
				</S.MainContent>
				<S.FooterContent variants={opacityMotion}>
					<S.Wrapper>
						<S.ImageButton>
							<Image
								src="/icons/trashIcon.png"
								width={24}
								height={24}
								alt="Trash icon"
							/>
						</S.ImageButton>
						<S.ImageButton>
							<Image
								src="/icons/disableIcon.png"
								width={24}
								height={24}
								alt="Disable Icon"
							/>
						</S.ImageButton>
					</S.Wrapper>
				</S.FooterContent>
			</S.Content>
		</S.Container>
	)
}

export default CardTransaction
