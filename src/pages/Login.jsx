import { useState } from "react";
import { useNavigate } from "react-router";

import styles from "../styles/Login.css";
import login from "@/api/login";
import { Link } from "react-router";
import studyfox from "../assets/images/logotype.png";
import bemvindo from "../assets/images/bem-vindo01.png";
import raposasentada from "../assets/images/fox_standing_on_book.png";

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
        <div className={styles.PáginaLogin}>



            <form className={styles.ParteEsquerda} onSubmit={onAttemptLogin}>

              <div className={styles.login_header}>
                <img src={studyfox} alt="Logo StudyFox" className={styles.LogoStudyfox} />
                <p className={styles.login_subtitle}>Login to your account:</p>
              </div>

                <div className={styles.Formulário}>
                    <div className={styles.LoginEmail}>
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

                    <div className={styles.LoginSenha}>
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

                {erro && <p className={styles.LoginErro} role="alert">{erro}</p>}

                <button className={styles.BotãoLogin} type="submit" disabled={carregando}>
                    {carregando ? "Entrando..." : "Login"}
                </button>

                <div className={styles.OutrosMeios}>
                    <button className={styles.BotãoOutrosMeios} aria-label="Login com Google" />
                    <button className={styles.BotãoOutrosMeios} aria-label="Login com Facebook" />
                    <button className={styles.BotãoOutrosMeios} aria-label="Login com Instagram" />
                </div>

				<div className={styles.SignUp}>
				  <p>Don't have an account?</p>

				  <Link to="/Cadastro">
				  <button className={styles.Cadastrar} onClick={() => console.log("Aguarde...")}>
					Sign up
				  </button>
				  </Link>

				</div>
      </form>

      <div className={styles.ParteDireita}>
        <img src={bemvindo} alt="Bem-vindo de volta!" className={styles.bemvindodevolta} />
        <img src={raposasentada} alt="Raposa fofa" className={styles.RaposaSentada} />
      </div>

    </div>
    );
}
