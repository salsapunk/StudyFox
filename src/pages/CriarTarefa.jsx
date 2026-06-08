import { Form, useActionData, useNavigate } from 'react-router'

import $ from '@/styles/CriarTarefa.module.css'
import getTomorrowDate from "@/utils/getTomorrowDate"

import CloseWindow from '@/assets/icons/close-window.svg?react'

export default function CriarTarefa() {
	const tomorrow = getTomorrowDate().toISOString().split('T')[0];

	const actionData = useActionData()
	const navigate = useNavigate()

	const handleExitModal = () => navigate(-1)

	return (
		<Form className={$.modal} method="post">
			<header className={$.form_header}>
				<h2>Nova tarefa</h2>
				<button 
					className={$.btn_exit}
					type="button"
					onClick={handleExitModal}
				>
					<CloseWindow className={$.svg} />
				</button>
			</header>
			<div className={$.upper_form}>
				<div className={$.input_wrapper}>
					<label htmlFor="nome">Nome:</label>
					<input type="text" name="nome" />
				</div>
				<div className={$.input_wrapper}>
					<label htmlFor="prazo">Prazo:</label>
					<input type="date" name="prazo" defaultValue={tomorrow} />
				</div>
			</div>
			<div className={$.middle_form}>
				<div className={$.input_wrapper}>
					<label htmlFor="anotacao">Anotação:</label>
					<textarea name="anotacao" spellCheck="true" rows="6" wrap="soft" />
				</div>
			</div>
			{actionData?.erro && <p>{actionData.erro}</p>}
			<div className={$.lower_form}>
				<button className={$.btn_submit} type="submit">
					Criar tarefa
				</button>
				<button className={$.btn_reset} type="reset">
					Limpar tudo
				</button>
			</div>
		</Form>
	)
}

