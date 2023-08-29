import * as S from './style'

import TrashBlueIcon from '../../icons/Trash/index'

const cardMotion = {
	rest: {
		height: 81,
		transition: {
			duration: 0.3
		}
	},
	hover: {
		height: 109,
		transition: {
			duration: 0.4
		}
	}
}

const textMotion = {
	rest: { opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
	hover: {
		opacity: 1,
		transition: {
			duration: 0.4
		}
	}
}

export type CardProps = {
	id: string
	name: string
}

const Card = ({ id, name = 'Novo controle' }: CardProps) => {
	const handleClickSelectCard = () => {
		console.log(`iddd`, id)
	}

	return (
		<S.Container onClick={handleClickSelectCard}>
			<S.Card
				variants={cardMotion}
				initial="rest"
				whileHover="hover"
				animate="rest"
				data-testid="Card"
			>
				<S.Text>{name}</S.Text>
				<S.ContainerIcon variants={textMotion} data-testid="ContainerIcon">
					<S.BoxIcon>
						<TrashBlueIcon />
					</S.BoxIcon>
				</S.ContainerIcon>
			</S.Card>
		</S.Container>
	)
}

export default Card
