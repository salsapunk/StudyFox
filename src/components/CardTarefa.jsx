import $ from "@/styles/CardTarefa.module.css";

function CardTarefa({ nome, coluna = 1 }) {
	const estilo_coluna = coluna == 1
		? $.todo : (coluna == 2
			? $.doing
			: $.done
		);
	const estilos = `${$.task_card} ${estilo_coluna}`;

	return (
		<article className={estilos}>
			<h3>{nome}</h3>
		</article>
	)
}

export default CardTarefa
