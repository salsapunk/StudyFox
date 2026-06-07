import "../styles/Login.css";
export default function Login() {
  return (
    <div className="PáginaLogin">

      
      <div className="ParteEsquerda">

        <div className="login-header">
          <img src="./src/assets/images/logotype.png" alt="Logo StudyFox" className="LogoStudyfox" />
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

        <button className="BotãoLogin" onClick={() => console.log("Fazendo login...")}>
          Login
        </button>

        <div className="OutrosMeios">
          <button className="BotãoOutrosMeios" aria-label="Login com Google" />
          <button className="BotãoOutrosMeios" aria-label="Login com Facebook" />
          <button className="BotãoOutrosMeios" aria-label="Login com Instagram" />
        </div>

        <div className="SignUp">
          <p>Don't have an account?</p>
          <button className="Cadastrar" onClick={() => console.log("Aguarde...")}>
            Sign up
          </button>
        </div>

      </div>

      
      <div className="ParteDireita">
        <img src="./src/assets/images/bem-vindo01.png" alt="Bem-vindo de volta!" className="bemvindodevolta" />
        <img src="./src/assets/images/fox_standing_on_book.png" alt="Raposa fofa" className="RaposaSentada" />
      </div>

    </div>
  );
}

