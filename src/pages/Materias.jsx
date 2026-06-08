import { useState } from 'react'
import styles from '@/styles/Materias.module.css'

export default function Materias() {
    const [materias, setMaterias] = useState([
        { id: 1, nome: 'Matéria' },
        { id: 2, nome: 'Matéria' },
        { id: 3, nome: 'Matéria' },
        { id: 4, nome: 'Matéria' },
    ])

    const adicionarMateria = () => {
        const novaMateria = { id: Date.now(), nome: 'Nova Matéria' }
        setMaterias([...materias, novaMateria])
    }

    return (
        <div className={styles.principal_container}>
            <div className={styles.grid_container}>
                {materias.map((materia) => (
                    <div key={materia.id} className={styles.card}>
                        <span className={styles.card_label}>{materia.nome.toUpperCase()}</span>
                    </div>
                ))}
            </div>

            <button className={styles.nova_btn} onClick={adicionarMateria}>
                <span className={styles.nova_label}>NOVA MATÉRIA</span>
                <div className={styles.plus_icon}>+</div>
            </button>
        </div>
    )
}
