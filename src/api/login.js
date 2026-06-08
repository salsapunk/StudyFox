async function login(email, senha) {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
    credentials: 'include', // ← essencial para cookies funcionarem
  });

  if (!res.ok) throw new Error('Credenciais inválidas');
}

export default login;
