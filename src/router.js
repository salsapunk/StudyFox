import { createBrowserRouter } from "react-router";

// Páginas:
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Materias from "./pages/Materias";
import Tarefas from "./pages/Tarefas";
import Tarefa from "./pages/Tarefa";
import CriarTarefa from "./pages/CriarTarefa";

// Layouts:
import MainLayout from "./layouts/MainLayout";

// Loaders e Actions:
import tarefaLoader from "./api/tarefaLoader";

let router = createBrowserRouter([
	{
		path: "/",
		children: [
			{ index: true, Component: Inicio },
			{ path: "/login", Component: Login },
			{ path: "/cadastro", Component: Cadastro },
			{
				Component: MainLayout,
				children: [
					{ path: "/materias", Component: Materias },
					{
						path: "/materias/:materiaId",
						Component: Tarefas,
						children: [
							{
								path: "/materias/:materiaId/tarefa/:tarefaId",
								Component: Tarefa,
								loader: tarefaLoader
							},
							{
								path: "/materias/:materiaId/criarTarefa",
								Component: CriarTarefa
							}
						]
					},
				]
			}
		]
	},
])

export default router;
