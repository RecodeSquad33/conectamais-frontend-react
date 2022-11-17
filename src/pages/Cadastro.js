import { Link } from 'react-router-dom'
import styles from '../styles/Cadastro.module.css'

function Cadastro() {

    return (

        <div className={styles.ladoEsquerdo}>
            <div>
                <h1>Faça parte da transformação.</h1>
            </div>

            <div className={styles.botao}>
                <button id="btn_vol"><Link to="/instituicao">Instituição de Ensino</Link></button>

                <button id="btn_inst"><Link to="/voluntario">Voluntários</Link></button>
            </div><br></br>

            <Link to="/">Home</Link>
        </div>

    );
}

export default Cadastro;