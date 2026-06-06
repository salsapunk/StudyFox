import { useLoaderData } from "react-router"
import $ from '@/styles/Tarefa.module.css'

export default function Tarefa() {
	const { nome, prazo, anotacao } = useLoaderData();

	return (
		<section className={$.modal}>
			<header>
				<hgroup>
					<h2>{nome}</h2>
					{/*<p>{prazo}</p>*/}
				</hgroup>
				<div className={$.button_wrapper}>
					<button>
						<img src="#" alt="Apagar tarefa"/>
					</button>
					<button>
						<img src="#" alt="Fechar janela"/>
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

