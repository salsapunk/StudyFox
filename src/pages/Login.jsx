import { useState } from "react";
import { useNavigate } from "react-router";

import "../styles/Login.css";
import login from "@/api/login";
import { Link } from "react-router";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(null);
    const [carregando, setCarregando] = useState(false);

    async function onAttemptLogin(e) {
        e.preventDefault();
        setErro(null);
        setCarregando(true);

        try {
			await login(email, senha)
            navigate("/materias");
        } catch (err) {
            setErro(err.message);
        } finally {
            setCarregando(false);
        }
    }

    return (
        <div className="PáginaLogin">

            <form className="ParteEsquerda" onSubmit={onAttemptLogin}>

                <div className="login-header">
                    <img src="./src/assets/images/logotype.png" alt="Logo StudyFox" className="LogoStudyfox" />
                    <p className="login-subtitle">Login to your account:</p>
                </div>

                <div className="Formulário">
                    <div className="LoginEmail">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="LoginSenha">
                        <label htmlFor="senha">Password:</label>
                        <input
                            type="password"
                            id="senha"
                            name="Password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {erro && <p className="LoginErro" role="alert">{erro}</p>}

                <button className="BotãoLogin" type="submit" disabled={carregando}>
                    {carregando ? "Entrando..." : "Login"}
                </button>

                <div className="OutrosMeios">
                    <button className="BotãoOutrosMeios" aria-label="Login com Google" />
                    <button className="BotãoOutrosMeios" aria-label="Login com Facebook" />
                    <button className="BotãoOutrosMeios" aria-label="Login com Instagram" />
                </div>

				<div className="SignUp">
				  <p>Don't have an account?</p>

				  <Link to="/Cadastro">
				  <button className="Cadastrar" onClick={() => console.log("Aguarde...")}>
					Sign up
				  </button>
				  </Link>

				</div>

            </form>

            <div className="ParteDireita">
                <img src="./src/assets/images/bem-vindo01.png" alt="Bem-vindo de volta!" className="bemvindodevolta" />
                <img src="./src/assets/images/fox_standing_on_book.png" alt="Raposa fofa" className="RaposaSentada" />
            </div>

        </div>
    );
}
