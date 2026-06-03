import { useState } from "react";
import { Outlet } from "react-router";

import $ from "@/styles/MainLayout.module.css";
import OpcoesModal from "./modals/OpcoesModal";

import _gearIcon from '@/assets/icons/gear.png'

export default function MainLayout() {
	const [modalAberto, setModalAberto] = useState(false);

	return (
		<>
			<header className={$.header}>
				<div>
					<button 
						onClick={() => setModalAberto(true)}
						className={$.options_btn}
					>
						<img src={_gearIcon} alt="Botão de configurações" />
					</button>
				</div>
				<div className={$.logotype}>
					<h1 className={$.title}>StudyFox</h1>
					<img src={_gearIcon} alt="Logotipo do StudyFox" /> {/* TBD: Substituir _gearIcon pelo ícone da logotipo */}
				</div>
			</header>

			<OpcoesModal
				aberto={modalAberto}
				onFechar={() => setModalAberto(false)}
			/>

			<Outlet context={{ abrirOpcoes: () => setModalAberto(true) }} />
		</>
	);
}

