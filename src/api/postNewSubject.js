async function postNewSubject(name) {
	const res = await fetch('/api/materia', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ nome: name })
	})

	if (!res.ok) throw new Error('Erro durante a criação da matéria')

	return await res.json()
}

export default postNewSubject;
