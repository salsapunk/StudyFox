import postNewTask from '@/api/postNewTask'
import { redirect } from 'react-router'

async function criarTarefaAction({ request, params }) {
	const formData = await request.formData()
	const modeloNovaTarefa = {
		nome: formData.get('nome'),
		prazo: formData.get('prazo'),
		anotacao: formData.get('anotacao') || null
	}

	const novaTarefa = await postNewTask(
		params.materiaId,
		modeloNovaTarefa 
	)

	return redirect(
		`/materias/${params.materiaId}/tarefa/${novaTarefa.data}`
	)
}

export default criarTarefaAction;
