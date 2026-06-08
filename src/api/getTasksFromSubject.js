async function getTasksFromSubject(subjectCode) {
	const url = `/api/materia/${subjectCode}/tarefas`

	const res = await fetch(url, {
		method: 'GET',
		credentials: 'include', 
	});

	if (!res.ok) throw new Error('Erro na obtenção das tarefas da matéria acessada');

	return await res.json();
}

export default getTasksFromSubject;
