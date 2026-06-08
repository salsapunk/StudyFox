
import "../styles/Cadastro.css";
import { Link } from "react-router";
import bemvindo from "../assets/images/bem-vindo02.png";
import raposaacenando from "../assets/images/fox_greeting.png";
import studyfox from "../assets/images/logotype.png";

export default function Cadastro() { 
  return (
    <div className="PáginaCadastro">

      <div className="ParteEsquerda">
        <img className="MensagemBoasVindas" src={bemvindo} alt="Mensagem de boas vindas"/>
        <img className="RaposaAcenando" src={raposaacenando} alt="Raposa fofinha"/>
      </div>

      <div className="ParteDireita">
        <img className="NomeProjeto" src={studyfox} alt="Este é nome do projeto"/>
        <p>Create your acount:</p>
      </div>

      <div className="Formulário">
        <div className="CriaçãoEmail">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="Email"/>
        </div>

        <div className="CriaçãoSenha">
            <label htmlFor="senha">Password:</label>
            <input type="password" id="password" name="Password"/>
        </div>

        <button className="BotãoCadastrar" onClick={() => console.log("Criando usuário...")}>
          Sign in
        </button>

        <div className="OutrosMeios">
          <button className="BotãoOutrosMeios" aria-label="Login com Google"/>
          <button className="BotãoOutrosMeios" aria-label="Login com FaceBook"/>
          <button className="BotãoOutrosMeios" aria-label="Login com Instagram"/>
        </div>

        <div className="PossuoConta">
          <p>Alredy have an acount?</p>

          <Link to="Login">
          <button className="LoginMinhaConta">
            Login
          </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

