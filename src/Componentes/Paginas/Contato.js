import Box from '../Layout/Box'
import styles from './Contato.module.css'

function Contato(){
    return(
        <Box customClass='contato'>
            <div className={styles.texto}>
                <h1>Contate-nos</h1>
                <p>Nossos atendentes estão preparados para te ajudar!</p>
            </div>
            <div className={styles.form}>
                <p>Seu nome</p>
                <input type='text'/>
                <p>E-mail</p>
                <input type='text'/>
                <p>Comentário / Dúvida</p>
                <input type='text'/>
            </div>
        </Box>
    )
}

export default Contato;