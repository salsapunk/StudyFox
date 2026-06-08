import getSubject from '@/api/getSubject';

async function materiasLoader() {
	const MATERIAS = await getSubject()
	
	return { materias: MATERIAS.data }
}

export default materiasLoader;

