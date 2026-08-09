import styles from "./Cadastro.module.css"
import Box from "./../Layout/Box"
import FormCadastro from "../Layout/Formulario/FormCadastro";

function Cadastro(){
    return(
        <Box customClass="min-height">
            <div className={styles.head}>
                <div className={styles.titulo}>
                    <h1>Cadastre-se na </h1>
                    <h1 className={styles.nome}>Biblioteca Central de Trocas</h1>
                </div>
                <h2>
                    O catálo da sua biblioteca disponível emm qualquer lugar, a qualquer hora.
                </h2>
            </div>
            <div className={styles.form}>
                <h1>Informações da Conta:</h1>
                <FormCadastro/>
            </div>
        </Box>
    )
}

export default Cadastro;