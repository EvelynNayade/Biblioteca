import styles from "./Select.module.css"

function Select ({nome,options,handleChange,value}){
    return(
        <div className={styles.selection}>
            <select name={nome} id={nome} >
                {
                    options.map((option)=>(
                        <option value={option.id} key={option.id}>{option.pais}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Select