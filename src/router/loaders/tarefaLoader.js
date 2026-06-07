import _TAREFAS from '@/temp_data/tarefas';

async function tarefaLoader({ params }) {
	/* CÓDIGO SERÁ REFATORADO APÓS INTEGRAÇÃO COM A API */

	const { materiaId, tarefaId } = params

	const tarefa = _TAREFAS.find(tarefa =>
		tarefa.codigo === parseInt(materiaId) &&
		tarefa.id === parseInt(tarefaId)
	)
	
	return tarefa;
}

export default tarefaLoader;
