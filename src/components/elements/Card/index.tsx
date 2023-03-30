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

const Card = () => {
	return (
		<S.Container initial="rest" whileHover="hover" animate="rest">
			<S.Card variants={cardMotion}>
				<S.Text>Fevereiro</S.Text>
				<S.ContainerIcon variants={textMotion}>
					<S.BoxIcon>
						<TrashBlueIcon />
					</S.BoxIcon>
				</S.ContainerIcon>
			</S.Card>
		</S.Container>
	)
}

export default Card
