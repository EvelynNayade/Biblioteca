import { useState } from "react"

import Entrada from "./Entrada"
import Botao from "./Botao"

import styles from "./FormContato.module.css"

function FormContato(){
    const [email, setEmail]  = useState();
    const [nome,  setNome]   = useState();
    const [coment,setComent] = useState();

    const submit = (e) =>{
        e.preventDefault();
        console.log("Nome: "+nome);
        console.log("Email: "+email);
        console.log("Comentário: "+coment);
    };

    return(
        <form className={styles.form} onSubmit={submit}>
                <Entrada titulo = "Seu Nome" 
                         tipo = "text" 
                         placeholder="Seu nome" 
                         setValor ={setNome}/>

                <Entrada titulo = "E-mail" 
                         tipo = "email" 
                         placeholder="email@exemplo.com" 
                         setValor ={setEmail}/>

                <Entrada titulo = "Comentário / Dúvida" 
                         tipo = "textarea" 
                         rows = "5" cols = "50"
                         setValor = {setComent}/>

                <Botao tipo="submit" customClass="botao_pequeno"/>

        </form>
    )
}

export default FormContato