import CardTarefa from "@/components/CardTarefa";
import Coluna from "@/components/Coluna";

import $ from "@/styles/Tarefas.module.css";
import TAREFAS from '@/temp_data/tarefas';

export default function Tarefas() {
	/* SOBRE A EXIBIÇÃO DAS TAREFAS
	 *	Apesar da filtragem provavelmente se manter, o nível de complexidade
	 *	para esta página alterará com a integração do site com a API, devido
	 *	à lógica de fetching das tarefas.
	 */
	const aFazer = TAREFAS.filter(tar => tar.coluna == 1);
	const emAndamento = TAREFAS.filter(tar => tar.coluna == 2);
	const concluidas = TAREFAS.filter(tar => tar.coluna == 3);

	return (
		<main className={$.page}>
			<header className={$.header}>
				<h1>Tarefas</h1>
				<button>+ Criar tarefa</button>
			</header>
			<section className={$.kanban_board}>
				<Coluna className={$.column} nome="A fazer">
					{aFazer.map((tar, idx) => (
						<CardTarefa nome={tar.nome} coluna={tar.coluna} key={idx} />
					))}
				</Coluna>
				<Coluna className={$.column} nome="Em andamento">
					{emAndamento.map((tar, idx) => (
						<CardTarefa nome={tar.nome} coluna={tar.coluna} key={idx} />
					))}
				</Coluna>
				<Coluna className={$.column} nome="Concluídas">
					{concluidas.map((tar, idx) => (
						<CardTarefa nome={tar.nome} coluna={tar.coluna} key={idx} />
					))}
				</Coluna>
			</section>
		</main>
	)
}

