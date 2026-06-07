import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { Outlet, useNavigate, useParams, useMatch } from 'react-router';

import CardTarefa from "@/components/CardTarefa";
import Coluna from "@/components/Coluna";
import $ from "@/styles/Tarefas.module.css";

import TAREFAS from '@/temp_data/tarefas';
const COLUNAS = [
    { id: 1, nome: "A fazer" },
    { id: 2, nome: "Em andamento" },
    { id: 3, nome: "Concluídas" },
];

export default function Tarefas() {
	const { materiaId } = useParams()
	const navigate = useNavigate()
	const isModalOpen = !useMatch("/materias/:materiaId") // Verifica se o caminho atual não é o da página Tarefas

	/* SOBRE A EXIBIÇÃO DAS TAREFAS
	 *	Apesar da filtragem provavelmente se manter, o nível de complexidade
	 *	para esta página alterará com a integração do site com a API, devido
	 *	à lógica de fetching das tarefas.
	 */
	const [listaTarefas, setListaTarefas] = useState(TAREFAS.filter(
		tarefa => tarefa.codigo === parseInt(materiaId)
	))

	const handleDragEnd = (event) => {
		const tarefaId = event.operation.source?.id
		const colunaId = event.operation.target?.id

		if (!tarefaId || !colunaId) return;

		setListaTarefas(prev =>
			prev.map(tar =>
				tar.id === tarefaId	// Atualiza apenas a tarefa movida
					? { ...tar, coluna: colunaId } 
					: tar
			)
		);
	}
	const handleClickCard = (event, tarefaId) => {
		/* Temporariamente vai ser aberto ao clicar com o botão direito, até eu
		 * criar um componente de menu de contexto e/ou encontrar um método 
		 * melhor. */
		event.preventDefault()
		navigate(`/materias/${materiaId}/tarefa/${tarefaId}`)
	}
	const handleClickCriarTarefa = () => navigate(`/materias/${materiaId}/criarTarefa`)
	const handleClickOverlay = () => navigate(-1)
	const handleClickModal = (event) => event.stopPropagation()

	return (<>
		{/* Rota /materias/:materiaId */}
		<main className={$.page}>
			{/* Cabeçalho da página */}
            <header className={$.header}>
                <h1>Tarefas</h1>
                <button onClick={handleClickCriarTarefa}>
					+ Criar tarefa
				</button>
            </header>

			{/* Quadro Kanban */}
            <section className={$.kanban_board}>
                <DragDropProvider onDragEnd={handleDragEnd}>
                    {COLUNAS.map((col) => (
                        <Coluna key={col.id} id={col.id} nome={col.nome}>
                            {listaTarefas
                                .filter((tar) => tar.coluna === col.id)
                                .map((tar) => (
									<CardTarefa 
										key={tar.id} id={tar.id} 
										nome={tar.nome} coluna={tar.coluna}
										onContextMenu={(e) => handleClickCard(e, tar.id)}
									/>
                                ))
                            }
                        </Coluna>
                    ))}
                </DragDropProvider>
            </section>
        </main>

		{/* Wrapper p/as rotas filhas de /materias/:materiaId */}
		{isModalOpen && (
			<div className={$.modal_overlay} onClick={handleClickOverlay}>
				<div className={$.modal_content} onClick={handleClickModal}>
					<Outlet />
				</div>
			</div>
		)}
	</>);
}

