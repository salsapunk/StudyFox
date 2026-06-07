import { redirect } from "react-router";
import getLoggedUser from "@/api/getLoggedUser";

async function authLoader() {
  const usuario = await getLoggedUser();

  if (!usuario) {
    throw redirect('/login');
  }

  return { usuario };
}

export default authLoader
