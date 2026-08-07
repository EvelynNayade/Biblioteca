import { useState } from "react";
import { Link } from "react-router-dom";

import Entrada from "./Entrada";
import CheckBox from "./CheckBox";
import Botao from "./Botao"

import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import styles from "./FormLogin.module.css"

function FormLogin(){
    const [email, setEmail]  = useState();
    const [senha, setSenha]   = useState();
    const [lembrar, setLembrar] = useState(false);
    
    const submit = (e) =>{
        e.preventDefault();
        console.log("Email: "+email);
        console.log("Senha: "+senha);
        console.log("Lembrar?: "+lembrar);
        };
    
    return(
        <form onSubmit={submit}>
            <div>
                <Entrada titulo = "email" 
                         tipo = "email" 
                         placeholder="email@exemplo.com" 
                         setValor ={setEmail}/>
                <FaRegUser/>
            </div>
            <div>
                <Entrada titulo = "Senha" 
                         tipo = "password" 
                         placeholder="Digite sua senha" 
                         setValor ={setSenha}/>
                <FaLock/>
            </div>
            <div className={styles.lembrar}>
                <CheckBox texto = "Lembrar-me"
                          status = {lembrar}
                          setValor = {setLembrar}/>
                <Link to ="/lembrar-senha">Esqueceu a senha? </Link>
            </div>
            <Botao tipo = "submit"
                   customClass="botao_grande" texto ="Iniciar Sessão"/>
        </form>
    )
}

export default FormLogin