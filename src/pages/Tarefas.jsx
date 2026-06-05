import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";

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
	/* SOBRE A EXIBIÇÃO DAS TAREFAS
	 *	Apesar da filtragem provavelmente se manter, o nível de complexidade
	 *	para esta página alterará com a integração do site com a API, devido
	 *	à lógica de fetching das tarefas.
	 */
	const [listaTarefas, setListaTarefas] = useState(TAREFAS)

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

	return (
		<main className={$.page}>
            <header className={$.header}>
                <h1>Tarefas</h1>
                <button>+ Criar tarefa</button>
            </header>
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
									/>
                                ))
                            }
                        </Coluna>
                    ))}
                </DragDropProvider>
            </section>
        </main>
	)
}

