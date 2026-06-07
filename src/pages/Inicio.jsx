import styles from "../styles/Inicio.module.css";
import { Link } from "react-router";
import titulo from "../assets/images/arch_type_logotype.png";
import foxhomepage from "../assets/images/fox_studying.png";

export default function Inicio() {
  return (
    <div>
      <div className={styles.tituloderosto}>

        <img
          src={titulo}
          alt="StudyFox"
          className={styles.tituloArco}
        />

        <img
          src={foxhomepage}
          alt="Mascote StudyFox"
          className={styles.imagemRaposa}
        />

      <Link to="/login">
    <button className={styles.botaoLogin}>
    conecte-se
    </button>
      </Link>

      </div>

      <section className={styles.conteudo}>

        <div className={styles.sobre}>

          <div className={styles.cabecalhoSobre}>

            <span className={styles.rotulo}>
              o que é o
            </span>

            <span className={styles.marca}>
              STUDYFOX
            </span>

            <span className={styles.rotulo}>
              ?
            </span>

          </div>

          <p className={styles.textoSobre}>
            O StudyFox é um sistema de gerenciamento de tarefas voltado para o público estudante em geral. Ele apresenta uma interface clara e intuitiva para facilitar a organização de ciclos de estudos com a definição de prazos e ordenação com base nas matérias, tarefas e anotações definidas pelo usuário.
          </p>

        </div>

        <div className={styles.titulodois}>

          <p className={styles.tituloChamada}>
            COMECE
            <br />
            AGORA!
          </p>

          <Link to="/cadastro">
    <button className={styles.botaoCadastro}>
    cadastre-se
    </button>
          </Link>

        </div>

      </section>

      <footer className={styles.rodape}>
  <p>
    desenvolvido por @salsapunk, @ligiandrz,
    @lucarl07, @madubr e @jpedrooss no GitHub.
    Para mais informações acesse {" "}

    <a
      href="https://github.com/salsapunk/StudyFox"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://github.com/salsapunk/StudyFox
    </a>

  </p>
</footer>

    </div>
  );
}
