async function postNewTask(subjectCode, requestBody) {
	const res = await fetch(`/api/materia/${subjectCode}/tarefa`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(requestBody)
	})
	
	return await res.json()
}

export default postNewTask;
