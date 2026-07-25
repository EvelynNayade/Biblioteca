import styles from "./Botao.module.css"

function Botao (props){
    return (
        <input type={props.tipo} className={styles.botao} name="enviar"></input>
    )
}

export default Botao