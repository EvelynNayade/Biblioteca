import styles from './CheckBox.module.css'
function CheckBox(props){
    return (
        <label className={styles.checkBox}>
                <input  type="checkbox"
                    checked={props.status}
                    onChange={props.setValor}
                    />
                {props.texto}
        </label>
    )
}

export default CheckBox