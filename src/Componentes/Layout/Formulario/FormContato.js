import Entrada from "./Entrada"
import Botao from "./Botao"
import styles from "./FormContato.module.css"

function FormContato(){
    return(
        <form className={styles.form}>
                <Entrada titulo = "Seu Nome" tipo = "text" placeholder="Seu nome"/>
                <Entrada titulo = "E-mail" tipo = "email" placeholder="email@exemplo.com"/>
                <Entrada titulo = "Comentário / Dúvida" 
                tipo = "textarea" 
                rows = "5" cols = "50"
                />
                <Botao tipo="submit"/>

        </form>
    )
}

export default FormContato