import Box from "../Layout/Box";

import styles from "./Login.module.css"

function Login(){
    return(
        <Box customClass='min-height'>
            <div className={styles.titulo}>
                <h1>Bem-vindo de volta!</h1>
                <p>Faça o seu login e volte a administrar a sua biblioteca com a gente</p>
            </div>
        </Box>
    )
}

export default Login;