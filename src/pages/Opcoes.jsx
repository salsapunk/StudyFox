import { useState } from 'react'
import logo from '../assets/images/logo.png'
import engrenagem from '../assets/icons/gear.png'
import lua from '../assets/icons/lua.png'
import sol from '../assets/icons/sol.png'
import styles from '../styles/Opcoes.module.css'

function Logo() {
    return (
	<div className={styles.logo_container}>
	    <img 
		src={logo}
		alt='StudyFox'
		className={styles.logo}
	    />
	</div>
    )
}

function GearIcon() {
    return (
	<div className={styles.engrenagem_container}>
	    <img 
		src={engrenagem}
		alt='Engrenagem Icon'
		className={styles.engrenagem}
	    />
	</div>
    )
}

function IconLua() {
    return (
	<img 
	    src={lua}
	    alt='Ícone lua'
	    className={styles.iconLua}
	/>
    )
}

function IconSol() {
    return (
	<img 
	    src={sol}
	    alt='Ícone sol'
	    className={styles.iconSol}
	/>
    )
}

export default function Opcoes() {
    const [tema, setTema] = useState('escuro')
    const [tamanhoFonte, setTamanho] = useState(12)

    const mudarTema = (val) => setTema(val)
    
    const aumFonte = () => setTamanho(tamanhoFonte + 1)
    const dimFonte = () => setTamanho(tamanhoFonte - 1)

    return (
	<div className={styles.principal_container}>
	    <div className={styles.titulo_container}>
		<h1 className={styles.texto_titulo}>STUDYFOX</h1>
		<Logo />
	    </div>

	    <div className={styles.config_container}>
		<div className={styles.painel_container}>
		    <GearIcon />
		    <div className={styles.painel_titulo}>
			<span>CONFIGURAÇÕES</span>
		    </div>
		    <button className={styles.painel_btn}>X</button>
		</div>

		<div className={styles.config_row}>
		    <div className={styles.tema_titulo}>
			<span>TEMA</span>
		    </div>
		    <div className={styles.btn_container}>
			<button
			    className={`${styles.btn_mudar} ${tema === 'escuro' ? styles.ativo : ''}`}
			    onClick={() => mudarTema('escuro')}
			    aria-label="Tema escuro"
			>
			    <IconLua />
			</button>
			<button
			    className={`${styles.btn_mudar} ${tema === 'claro' ? styles.ativo : ''}`}
			    onClick={() => mudarTema('claro')}
			    aria-label="Tema claro"
			>
			    <IconSol />
			</button>
		    </div>
		</div>

		<div className={styles.footer_container}>
		    <div className={styles.config_row}>
			<div className={styles.config_label}>
			    <span>TAMANHO DA<br />FONTE :</span>
			</div>
			<div className={styles.tamanho_fonte_control}>
			    <button className={styles.fonte_btn} onClick={dimFonte}>−</button>
			    <div className={styles.fonte_display}>{tamanhoFonte}</div>
			    <button className={styles.fonte_btn} onClick={aumFonte}>+</button>
			</div>
		    </div>
		</div>
	    </div>
	</div>
  )
}
