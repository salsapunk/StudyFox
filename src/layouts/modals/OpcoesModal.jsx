import { createPortal } from "react-dom";

export default function OpcoesModal({ aberto, onFechar }) {
	if (!aberto) return null;

	return createPortal(
		<div className="modal-overlay" onClick={onFechar}>
			<div className="modal-conteudo" onClick={e => e.stopPropagation()}>
				<button onClick={onFechar}>Fechar</button>
				<h2>Confiugrações</h2>
				{/* opções do site */}
			</div>
		</div>,
		document.body
	);
}
