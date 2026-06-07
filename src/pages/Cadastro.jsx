
import "@/src/styles/Cadastro.css";

export default function Cadastro() { 
  return (
    <div className="PáginaCadastro">

      <div className="ParteEsquerda">
        <img className="MensagemBoasVindas" src="./src/images/bem-vindo02.png" alt="Mensagem de boas vindas"/>
        <img className="RaposaAcenando" src="./src/images/RaposaAcenando.png" alt="Raposa fofinha"/>
      </div>

      <div className="ParteDireita">
        <img className="NomeProjeto" src="./src/images/STUDYFOX.png" alt="Este é nome do projeto"/>
        <p>Create your acount:</p>
      </div>

      <div className="Formulário">
        <div className="CriaçãoEmail">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="Email"/>
        </div>

        <div className="CriaçãoSenha">
            <label htmlFor="senha">Password</label>
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
          <button className="LoginMinhaConta">
            Login
          </button>
        </div>

      </div>

    </div>
  );
}

