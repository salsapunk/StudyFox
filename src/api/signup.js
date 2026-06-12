async function signup(email, senha) {
    const res = await fetch(`/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
    });

    const data = await res.json();
    
    return {
        response: res, data
    };
}

export default signup;
