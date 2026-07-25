import styles from './Entrada.module.css'

function Entrada(props){
    return (
        <div className={styles.entradas}>
            <p>{props.titulo}:</p>
            {props.tipo!=="textarea" ? (
                <input type={props.tipo} 
                name={props.titulo}
                id={props.titulo}
                value={props.value}
                placeholder={props.placeholder}/>

            ) : (
                <textarea rows={props.rows} cols={props.cols} placeholder={props.placeholder}/>
            )}
        </div>
    )
}

export default Entrada;