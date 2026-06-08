import { useReducer } from "react"
import { useNavigate } from 'react-router'

import $ from '@/styles/CriarMateria.module.css'

import CloseWindow from '@/assets/icons/close-window.svg?react'

export default function CriarMateria() {
	const initialFormState = {
		nome: ''
	}

	const navigate = useNavigate()
	const [formState, alterFormState] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, initialFormState)

	const handleExitModal = () => navigate(-1)
	const onFormSubmit = (event) => {
		event.preventDefault()
		/* Lógica da API aqui... */
		navigate(-1)
	}

	return (
		<form className={$.modal} onSubmit={onFormSubmit}>
			<header className={$.form_header}>
				<h2>Nova matéria</h2>
				<button 
					className={$.btn_exit}
					type="button"
					onClick={handleExitModal}
				>
					<CloseWindow className={$.svg} />
				</button>
			</header>
			<div className={$.form_content}>
				<div className={$.input_wrapper}>
					<label htmlFor="nome">Nome:</label>
					<input 
						type="text" name="nome" 
						value={formState.nome}
						onChange={(e) => alterFormState({ nome: e.target.value })}
					/>
				</div>
				<button 
					className={$.btn_submit}
					type="submit"
				>
					Criar matéria
				</button>
			</div>
		</form>
	)
}

