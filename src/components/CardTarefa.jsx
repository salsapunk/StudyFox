import $ from "@/styles/CardTarefa.module.css";
import { useDraggable } from "@dnd-kit/react";

function CardTarefa({ id, nome, coluna = 1 }) {
	const { ref } = useDraggable({ id })

	const estilo_coluna = coluna == 1
		? $.todo : (coluna == 2
			? $.doing
			: $.done
		);
	const estilos = `${$.task_card} ${estilo_coluna}`;

	return (
		<article ref={ref} className={estilos}>
			<h3>{nome}</h3>
		</article>
	)
}

export default CardTarefa
