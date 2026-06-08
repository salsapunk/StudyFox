async function getTask(subjectCode, taskId) {
	const url = `/api/materia/${subjectCode}/tarefa/${taskId}`

	const res = await fetch(url, {
		method: 'GET',
		credentials: 'include', 
	});

	if (!res.ok) throw new Error('Erro ao obter a tarefa selecionada');

	return await res.json();
}

export default getTask; 
