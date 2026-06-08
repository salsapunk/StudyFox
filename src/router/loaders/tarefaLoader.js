import getTask from '@/api/getTask';

async function tarefaLoader({ params }) {
	const { materiaId, tarefaId } = params
	const TAREFA = await getTask(materiaId, tarefaId)

	return TAREFA.data;
}

export default tarefaLoader;
