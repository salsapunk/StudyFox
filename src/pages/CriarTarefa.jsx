import { useReducer } from "react"
import { useNavigate } from 'react-router'

import $ from '@/styles/CriarTarefa.module.css'
import getTomorrowDate from "@/utils/getTomorrowDate"

import CloseWindow from '@/assets/icons/close-window.svg?react'


export default function CriarTarefa() {
	const navigate = useNavigate()

	const initialFormState = {
		nome: '',
		prazo: getTomorrowDate().toISOString().split('T')[0],
		anotacao: '',
	}

	const navigate = useNavigate()
	const [formState, alterFormState] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, initialFormState)

	const handleExitModal = () => navigate(-1)

	return (
		<form className={$.modal}>
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
					<input 
						type="text" name="nome" 
						value={formState.nome}
						onChange={(e) => alterFormState({ nome: e.target.value })}
					/>
				</div>
				<div className={$.input_wrapper}>
					<label htmlFor="prazo">Prazo:</label>
					<input 
						type="date" name="prazo" 
						value={formState.prazo} 
						onChange={(e) => alterFormState({ prazo: e.target.value })}
					/>
				</div>
			</div>
			<div className={$.middle_form}>
				<div className={$.input_wrapper}>
					<label htmlFor="anotacao">Anotação:</label>
					<textarea 
						name="anotacao" spellCheck="true"
						rows="6" wrap="soft"
						value={formState.anotacao}
						onChange={(e) => alterFormState({ anotacao: e.target.value })}
					/>
				</div>
			</div>
			<div className={$.lower_form}>
				<button 
					className={$.btn_submit}
					type="submit"
				>
					Criar tarefa
				</button>
				<button 
					className={$.btn_reset}
					type="reset"
				>
					Limpar tudo
				</button>
			</div>
		</form>
	)
}

