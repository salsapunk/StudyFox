import getTasksFromSubject from '@/api/getTasksFromSubject';

const COLUNAS = [ // Quantidade de colunas disponíveis na visualização kanban
    { id: 1, nome: "A fazer" },
    { id: 2, nome: "Em andamento" },
    { id: 3, nome: "Concluídas" },
]

async function tarefasLoader({ params }) {
	const { materiaId } = params
	const TAREFAS = await getTasksFromSubject(materiaId);

	return { tarefas: TAREFAS.data, colunas: COLUNAS };
}

export default tarefasLoader;
