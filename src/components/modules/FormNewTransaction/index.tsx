import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Input from '@/components/elements/Input'
import SmallButton from '@/components/elements/SmallButton'
import { formatCurrency } from '@/utils/formatCurrency'

import * as S from './style'

const formNewTransactionSchema = z.object({
	name: z.string().nonempty('Campo obrigatório'),
	value: z.string().nonempty('Campo obrigatório'),
})

type FormNewTransactionData = z.infer<typeof formNewTransactionSchema>

const FormNewTransaction = () => {
	const methods = useForm<FormNewTransactionData>({
		defaultValues: {
			name: '',
			value: '',
		},
		resolver: zodResolver(formNewTransactionSchema),
	})

	const {
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = methods

	const handleFormSubmit = (data: FormNewTransactionData) => {
		console.log(`data`, data)
	}

	return (
		<S.Container onSubmit={handleSubmit(handleFormSubmit)}>
			<S.Box>
				<Input
					name="name"
					value={watch('name')}
					onChange={(e) => setValue('name', e.target.value)}
					labelName="Nome transação"
					placeholder="Luz"
					inputSize="small"
					error={errors?.name?.message}
				/>
				<SmallButton type="submit">Receita</SmallButton>
			</S.Box>
			<S.Box>
				<Input
					name="value"
					value={watch('value')}
					onChange={(e) => setValue('value', formatCurrency(e.target.value))}
					labelName="Valor"
					placeholder="255"
					inputSize="small"
					error={errors?.value?.message}
					money
				/>
				<SmallButton type="submit" color="red">
					Despesa
				</SmallButton>
			</S.Box>
		</S.Container>
	)
}

export default FormNewTransaction
