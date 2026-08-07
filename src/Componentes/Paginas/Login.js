import { Link } from "react-router-dom";
import Box from "../Layout/Box";
import FormLogin from "../Layout/Formulario/FormLogin";

import styles from "./Login.module.css"

function Login(){
    return(
        <Box customClass='min-height'>
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
            <div className={styles.cadastro}>
                    <p>Não possui uma conta?</p>
                    <Link to="/cadastro">Cadastre-se!</Link>
            </div>

        </Box>
    )
}

export default Login;