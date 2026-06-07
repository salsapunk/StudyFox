import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { Outlet, useNavigate, useParams, useMatch, useLoaderData } from 'react-router';

import CardTarefa from "@/components/CardTarefa";
import Coluna from "@/components/Coluna";
import $ from "@/styles/Tarefas.module.css";

export default function Tarefas() {
	const navigate = useNavigate()
	const { materiaId } = useParams()
	const { tarefas, colunas } = useLoaderData()
	const isModalOpen = !useMatch("/materias/:materiaId")

	const [listaTarefas, setListaTarefas] = useState(tarefas)

	const handleDragEnd = (event) => {
		const tarefaId = event.operation.source?.id
		const colunaId = event.operation.target?.id

		if (!tarefaId || !colunaId) return;

		setListaTarefas(prev =>
			prev.map(tar =>
				tar.id_tarefa === tarefaId	// Atualiza apenas a tarefa movida
					? { ...tar, status: colunaId } 
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
                    {colunas.map((col) => (
                        <Coluna key={col.id} id={col.id} nome={col.nome}>
                            {listaTarefas
                                .filter((tar) => tar.status === col.id)
                                .map((tar) => (
									<CardTarefa 
										key={tar.id_tarefa} id={tar.id_tarefa} 
										nome={tar.nome} coluna={tar.status}
										onContextMenu={(e) => handleClickCard(e, tar.id_tarefa)}
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

