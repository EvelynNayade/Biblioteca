import {Link} from 'react-router-dom'

import Box from './Box'

import styles from './Navbar.module.css'

function Navbar(){
    return(
       <Box customClass='navbar'>
        <Link to="/" className={styles.nome}>Biblioteca Central de Trocas</Link>
        <ul className={styles.links}>
            <li className={styles.contato}>
            <Link to ="/contato">Contate-nos</Link>
            </li>
            <li className={styles.botao}>
            <Link to ="/place2">Iniciar Sessão</Link>
            </li>
            <li className={styles.botao}>
            <Link to ="/place3">Cadastre-se</Link>
            </li>
        </ul>
       </Box>
    )
}

export default Navbar