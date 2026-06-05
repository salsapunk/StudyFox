import { Children } from "react";
import { useDroppable } from "@dnd-kit/react";

import $ from "@/styles/Coluna.module.css";

function Coluna({ id, nome, children }) {
	const { ref } = useDroppable({ id })

	return (
		<section ref={ref} className={$.column}>
			<header className={$.col_header}>
				<h2>{nome}</h2>
			</header>
			<ol className={$.task_list}>
				{Children.map(children, (child, index) => (
					<li className={$.task_list_item} key={index}>
						{child}
					</li>
				))}
			</ol>
		</section>
	)
}

export default Coluna
