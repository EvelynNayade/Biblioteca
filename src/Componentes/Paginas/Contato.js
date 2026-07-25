import Box from '../Layout/Box'
import FormContato from '../Layout/Formulario/FormContato';
import styles from './Contato.module.css'

function Contato(){
    return(
        <Box customClass='contato'>
            <div className={styles.texto}>
                <h1>Contate-nos</h1>
                <p>Nossos atendentes estão preparados para te ajudar!</p>
            </div>
        <FormContato/>   
        </Box>
    )
}

export default Contato;