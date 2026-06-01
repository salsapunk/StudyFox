import { useState } from "react";
import { Outlet } from "react-router";
import OpcoesModal from "./modals/OpcoesModal";

export default function MainLayout() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <header>
        <h1>StudyFox</h1>
        <p>(insira logo aqui)</p>
      </header>

      <nav>
        <button onClick={() => setModalAberto(true)}>Abrir opções</button>
      </nav>

      <OpcoesModal
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
      />

      <Outlet context={{ abrirOpcoes: () => setModalAberto(true) }} />
    </>
  );
}

