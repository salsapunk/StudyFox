import { Children } from "react";

import $ from "@/styles/Coluna.module.css";

function Coluna({ nome, children }) {
	return (
		<section className={$.column}>
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
