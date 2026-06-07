import "../styles/Login.css";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="PáginaLogin">

      
      <div className="ParteEsquerda">

        <div className="login-header">
          <img src="./src/images/STUDYFOX.png" alt="Logo StudyFox" className="LogoStudyfox" />
          <p className="login-subtitle">Login to your account:</p>
        </div>

        <div className="Formulário">
          <div className="LoginEmail">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="Email" />
          </div>

          <div className="LoginSenha">
            <label htmlFor="senha">Password:</label>
            <input type="password" id="senha" name="Password" />
          </div>
        </div>

        <Link to="/materias">
        <button className="BotãoLogin" onClick={() => console.log("Fazendo login...")}>
          Login
        </button>
        </Link>

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

      </div>

      
      <div className="ParteDireita">
        <img src="./src/images/bem-vindo01.png" alt="Bem-vindo de volta!" className="bemvindodevolta" />
        <img src="./src/images/RaposaSentada.png" alt="Raposa fofa" className="RaposaSentada" />
      </div>

    </div>
  );
}

