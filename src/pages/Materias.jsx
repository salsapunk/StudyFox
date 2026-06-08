import { useState } from 'react'
import styles from '@/styles/Materias.module.css'
import { Outlet, useLoaderData, useMatch, useNavigate } from 'react-router'

export default function Materias() {
	const navigate = useNavigate()
	const { materias } = useLoaderData()
    const [listaMaterias, setListaMaterias] = useState(materias)
	const isModalOpen = !useMatch("/materias") 

    const handleClickCriarMateria = () => {
		navigate(`/materias/criarMateria`)
    }
	const handleClickCard = (codigoMateria) => {
		navigate(`/materias/${codigoMateria}`)
	}
	const handleClickOverlay = () => navigate(-1)
	const handleClickModal = (event) => event.stopPropagation()

    return (<>
        <div className={styles.principal_container}>
            <div className={styles.grid_container}>
                {listaMaterias && listaMaterias.map((materia) => (
                    <div 
						key={materia.codigo_materia} 
						className={styles.card} 
						onClick={() => handleClickCard(materia.codigo_materia)}
					>
                        <span className={styles.card_label}>{materia.nome.toUpperCase()}</span>
                    </div>
                ))}
            </div>

            <button className={styles.nova_btn} onClick={handleClickCriarMateria}>
                <span className={styles.nova_label}>NOVA MATÉRIA</span>
                <div className={styles.plus_icon}>+</div>
            </button>
        </div>

		{isModalOpen && (
			<div className={styles.modal_overlay} onClick={handleClickOverlay}>
				<div className={styles.modal_content} onClick={handleClickModal}>
					<Outlet />
				</div>
			</div>
		)}
    </>)
}
