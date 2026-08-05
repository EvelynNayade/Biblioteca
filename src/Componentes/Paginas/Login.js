import Box from "../Layout/Box";
import FormLogin from "../Layout/Formulario/FormLogin";

import styles from "./Login.module.css"

function Login(){
    return(
        <Box customClass='min-height' className={styles.box}>
            <div className={styles.texto}>
                <h1>Bem-vindo de volta!</h1>
                <p>Faça o seu login e volte a administrar a sua biblioteca com a gente</p>
            </div>
            <div className={styles.form}>
                <div className={styles.header}>
                    <h1>Bicentro</h1>
                    <p>Iniciar sessão</p>
                </div>
                <FormLogin/>
            </div>
        </Box>
    )
}

export default Login;