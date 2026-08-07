import styles from './Entrada.module.css'

function Entrada(props){
    return (
        <div className={styles.entradas}>
            {props.tipo!=="textarea" ? (
                <input type={props.tipo} 
                name={props.titulo}
                id={props.titulo}
                value={props.value}
                placeholder={props.placeholder}
                onChange={(e)=>props.setValor(e.target.value)}
                required
                />

            ) : (
                <textarea rows={props.rows} cols={props.cols}
                name={props.titulo} 
                placeholder={props.placeholder}
                onChange={(e)=>props.setValor(e.target.value)}
                />
            )}
        </div>
    )
}

export default Entrada;