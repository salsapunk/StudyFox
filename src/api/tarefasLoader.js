import _TAREFAS from '@/temp_data/tarefas';

const COLUNAS = [ // Quantidade de colunas disponíveis na visualização kanban
    { id: 1, nome: "A fazer" },
    { id: 2, nome: "Em andamento" },
    { id: 3, nome: "Concluídas" },
]

async function tarefasLoader({ params }) {
	const { materiaId } = params

	const tarefas = _TAREFAS.filter(tarefa =>
		tarefa.codigo === parseInt(materiaId)
	)

	return { tarefas, colunas: COLUNAS };
}

export default tarefasLoader;
