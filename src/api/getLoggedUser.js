async function getLoggedUser() {
  const res = await fetch('/api/validate', {
    credentials: 'include',
  });

  if (!res.ok) return null; // não autenticado
  return res.json();        // { id, nome, email, ... }
}

export default getLoggedUser;
