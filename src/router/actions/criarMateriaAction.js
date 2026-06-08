import postNewSubject from '@/api/postNewSubject'
import { redirect } from 'react-router'

async function criarMateriaAction({ request }) {
	const formData = await request.formData()
	const nome = formData.get('nome')

	const novaMateria = await postNewSubject(nome)
	const codigoMateria = novaMateria.data

	return redirect(`/materias/${codigoMateria}`)
}

export default criarMateriaAction;
