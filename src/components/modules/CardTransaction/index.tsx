import { useEffect, useState } from 'react'
import * as S from './style'
import Image from 'next/image'
import Input from '../../elements/Input'
import { useForm } from 'react-hook-form'
import { useControl } from '@/hooks/useControl'
import { formatCurrency } from '@/utils/formatCurrency'

export type TypeCardProps = 'red' | 'green'

export type CardTransactionProps = {
	idControl: string
	idTransaction: string
	name: string
	value: string
	type: TypeCardProps
}

const containerMotion = {
	rest: {
		height: '9.1rem',
		transition: {
			duration: 0.4,
		},
	},
	hover: {
		height: '15rem',
		transition: {
			duration: 0.4,
		},
	},
}

const opacityMotion = {
	rest: { opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
	hover: {
		opacity: 1,
		transition: {
			duration: 0.4,
		},
	},
}

const CardTransaction = ({
	idControl,
	idTransaction,
	name,
	value,
	type,
}: CardTransactionProps) => {
	const [enableCard, setEnableCard] = useState(true)
	const { updateTransaction } = useControl()

	const methods = useForm({
		defaultValues: {
			nameEdit: name,
			valueEdit: value,
		},
	})

	const { setValue, watch } = methods

	const nameInput = watch('nameEdit')
	const valueInput = watch('valueEdit')

	const toogleCard = () => {
		setEnableCard(!enableCard)
	}

	useEffect(() => {
		updateTransaction(idControl, idTransaction, 'name', nameInput)
	}, [nameInput])

	useEffect(() => {
		updateTransaction(idControl, idTransaction, 'value', valueInput)
	}, [valueInput])

	return (
		<S.Container
			variants={containerMotion}
			initial="rest"
			whileHover="hover"
			animate="rest"
			enablecardcontainer={+enableCard}
			data-testid="card"
		>
			<S.TypeTransaction
				data-testid="cardType"
				type={type}
				enable={enableCard}
			/>
			<S.Content>
				<S.HeaderContent variants={opacityMotion}>
					<S.Wrapper>
						<S.CircleButton
							onClick={() => console.log('red')}
							color="red"
							data-testid="buttonRed"
						/>
						<S.CircleButton
							onClick={() => console.log('green')}
							color="green"
							data-testid="buttonGreen"
						/>
					</S.Wrapper>
				</S.HeaderContent>
				<S.MainContent>
					<Input
						name="nameEdit"
						value={nameInput}
						onChange={(e) => setValue('nameEdit', e.target.value)}
						error={undefined}
						inputSize="small"
					/>
					<Input
						name="valueEdit"
						value={valueInput}
						onChange={(e) =>
							setValue('valueEdit', formatCurrency(e.target.value))
						}
						error={undefined}
						inputSize="small"
						money
					/>
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
