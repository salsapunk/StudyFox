
import "../styles/Cadastro.css";
import { Link } from "react-router";
import bemvindo from "../assets/images/bem-vindo02.png";
import raposaacenando from "../assets/images/fox_greeting.png";
import studyfox from "../assets/images/logotype.png";

export default function Cadastro() { 
  return (
    <div className={styles.PáginaCadastro}>

      <div className={styles.ParteEsquerda}>
        <img className={styles.MensagemBoasVindas} src={bemvindo} alt="Mensagem de boas vindas"/>
        <img className={styles.RaposaAcenando} src={raposaacenando} alt="Raposa fofinha"/>
      </div>

      <div className={styles.ParteDireita}>
        <img className={styles.NomeProjeto} src={studyfox} alt="Este é nome do projeto"/>
        <p>Create your acount:</p>
      </div>

      <div className={styles.Formulário}>
        <div className={styles.CriaçãoEmail}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="Email"/>
        </div>

        <div className={styles.CriaçãoSenha}>
            <label htmlFor="senha">Password:</label>
            <input type="password" id="password" name="Password"/>
        </div>

        <button className={styles.BotãoCadastrar} onClick={() => console.log("Criando usuário...")}>
          Sign in
        </button>

        <div className={styles.OutrosMeios}>
          <button className={styles.BotãoOutrosMeios} aria-label="Login com Google"/>
          <button className={styles.BotãoOutrosMeios} aria-label="Login com FaceBook"/>
          <button className={styles.BotãoOutrosMeios} aria-label="Login com Instagram"/>
        </div>

        <div className={styles.PossuoConta}>
          <p>Alredy have an acount?</p>

          <Link to="/login">
          <button className={styles.LoginMinhaConta}>
            Login
          </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

