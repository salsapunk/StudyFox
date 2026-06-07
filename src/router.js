import { createBrowserRouter } from "react-router";

// Páginas:
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Materias from "./pages/Materias";
import Tarefas from "./pages/Tarefas";
import Tarefa from "./pages/Tarefa";

// Layouts:
import MainLayout from "./layouts/MainLayout";

let router = createBrowserRouter([
	{
		path: "/",
		children: [
			{ index: true, Component: Inicio },
			{ path: "/Login", Component: Login },
			{ path: "/Cadastro", Component: Cadastro },
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
								Component: Tarefa
							}
						]
					},
				]
			}
		]
	},
])

export default router;
