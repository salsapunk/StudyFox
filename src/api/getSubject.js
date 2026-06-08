async function getSubject(subjectCode) {
	const url = `/api/materias`

	const res = await fetch(url, {
		method: 'GET',
		credentials: 'include', 
	});

	if (!res.ok) throw new Error('Erro ao obter a lista de matérias');

	return await res.json();
}

export default getSubject; 
