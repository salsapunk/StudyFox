import { createBrowserRouter } from "react-router";

// Páginas:
import Inicio from "@/pages/Inicio";
import Login from "@/pages/Login";
import Cadastro from "@/pages/Cadastro";
import Materias from "@/pages/Materias";
import Opcoes from "@/pages/Opcoes.jsx";
import Tarefas from "@/pages/Tarefas";
import Tarefa from "@/pages/Tarefa";
import CriarTarefa from "@/pages/CriarTarefa";
import CriarMateria from "@/pages/CriarMateria";

// Layouts:
import MainLayout from "@/layouts/MainLayout";

// Loaders e Actions:
import tarefaLoader from "./loaders/tarefaLoader";
import tarefasLoader from "./loaders/tarefasLoader";
import authLoader from "./loaders/authLoader";
import materiasLoader from "./loaders/materiasLoader";
import criarMateriaAction from "./actions/criarMateriaAction";

let router = createBrowserRouter([
	{
		path: "/",
		children: [
			{ index: true, Component: Inicio },
			{ path: "/login", Component: Login },
			{ path: "/cadastro", Component: Cadastro },
			{ path: "/opcoes", Component: Opcoes },
			{
				Component: MainLayout,
				loader: authLoader,
				children: [
					{ 
						path: "/materias", 
						Component: Materias, 
						loader: materiasLoader,
						children: [
							{
								path: "/materias/criarMateria",
								Component: CriarMateria,
								action: criarMateriaAction
							}
						]
					},
					{
						path: "/materias/:materiaId",
						Component: Tarefas,
						loader: tarefasLoader,
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
