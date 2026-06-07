async function getLoggedUser() {
  const res = await fetch('https://studyfoxapi.onrender.com/api/v1/validate', {
    credentials: 'include',
  });

  if (!res.ok) return null; // não autenticado
  return res.json();        // { id, nome, email, ... }
}

export default getLoggedUser;
