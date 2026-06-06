import { useLoaderData } from "react-router"
import $ from '@/styles/Tarefa.module.css'

import CloseWindow from '@/assets/icons/close-window.svg?react'
import TrashCan from '@/assets/icons/trash-can.svg?react'
export default function Tarefa() {
	const { nome, prazo, anotacao } = useLoaderData();
	const prazoFormatado = prazo.toLocaleString('pt-BR')

	return (
		<section className={$.modal}>
			<header>
				<hgroup>
					<h2 className={$.task_name}>{nome}</h2>
					<p className={$.due_date}>{prazoFormatado}</p>
				</hgroup>
				<div className={$.button_wrapper}>
					<button>
						<TrashCan className={$.svg}/>	
					</button>
					<button onClick={handleExitModal}>
						<CloseWindow className={$.svg}/>	
					</button>
				</div>	
			</header>
			<article>
				<p className={$.task_annotation}>
					{anotacao}
				</p>
			</article>
		</section>
	) 
}

