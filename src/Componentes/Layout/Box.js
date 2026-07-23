import styles from './Box.module.css'

function Box(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
    )
}

export default Box