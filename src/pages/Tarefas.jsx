import CardTarefa from "@/components/CardTarefa";
import Coluna from "@/components/Coluna";

import $ from "@/styles/Tarefas.module.css";

export default function Tarefas() {
	return (
		<main className={$.page}>
			<header className={$.header}>
				<h1>Tarefas</h1>
				<button>+ Criar tarefa</button>
			</header>
			<section className={$.kanban_board}>
				<Coluna className={$.column} nome="A fazer">
					<CardTarefa nome="Lorem ipsum dolor sit amet"/>
					<CardTarefa nome="Lorem ipsum dolor sit amet"/>
				</Coluna>
				<Coluna className={$.column} nome="Em andamento">
					<CardTarefa nome="Lorem ipsum dolor sit amet"/>
				</Coluna>
				<Coluna className={$.column} nome="Concluídas">
					<CardTarefa nome="Lorem ipsum dolor sit amet"/>
					<CardTarefa nome="Lorem ipsum dolor sit amet"/>
					<CardTarefa nome="Lorem ipsum dolor sit amet"/>
				</Coluna>
			</section>
		</main>
	)
}

