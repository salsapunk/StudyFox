import "../styles/Cadastro.css";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import bemvindo from "../assets/images/bem-vindo02.png";
import raposaacenando from "../assets/images/fox_greeting.png";
import studyfox from "../assets/images/logotype.png";
import signup from "@/api/signup";

export default function Cadastro() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleCadastro() {
    setErro("");

    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    setCarregando(true);
    try {
      const { response, data } = await signup(email, senha)

      if (!response.ok) {
        setErro(data.message || "Erro ao criar conta. Tente novamente.");
        return;
      }

      navigate("/login");
    } catch {
      setErro("Não foi possível conectar ao servidor.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="PáginaCadastro">

      <div className="ParteEsquerda">
        <img className="MensagemBoasVindas" src={bemvindo} alt="Mensagem de boas vindas" />
        <img className="RaposaAcenando" src={raposaacenando} alt="Raposa fofinha" />
      </div>

      <div className="ParteDireita">
        <img className="NomeProjeto" src={studyfox} alt="Este é nome do projeto" />
        <p>Create your account:</p>
      </div>

      <div className="Formulário">
        <div className="CriaçãoEmail">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="CriaçãoSenha">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {erro && <p className="MensagemErro">{erro}</p>}

        <button
          className="BotãoCadastrar"
          onClick={handleCadastro}
          disabled={carregando}
        >
          {carregando ? "Creating account..." : "Sign up"}
        </button>

        <div className="OutrosMeios">
          <button className="BotãoOutrosMeios" aria-label="Login com Google" />
          <button className="BotãoOutrosMeios" aria-label="Login com FaceBook" />
          <button className="BotãoOutrosMeios" aria-label="Login com Instagram" />
        </div>

        <div className="PossuoConta">
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="LoginMinhaConta">Login</button>
          </Link>
        </div>
      </div>

    </div>
  );
}