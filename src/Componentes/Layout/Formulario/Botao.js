import styles from "./Botao.module.css"

function Botao (props){
    return (
        <button type={props.tipo} className={`${styles.botao} ${styles[props.customClass]}`} name={props.texto}>{props.texto}</button>
    )
}

export default Botao