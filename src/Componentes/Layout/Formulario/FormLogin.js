import { useState } from "react";
import { Link } from "react-router-dom";

import Entrada from "./Entrada";
import CheckBox from "./CheckBox";
import Botao from "./Botao"

import { FaRegUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import styles from "./FormLogin.module.css"

function FormLogin(){
    const [email, setEmail]  = useState();
    const [senha, setSenha]   = useState();
    const [lembrar, setLembrar] = useState(false);
    const [tipo, setTipo] = useState("password");

    const submit = (e) =>{
        e.preventDefault();
        console.log("Email: "+email);
        console.log("Senha: "+senha);
        console.log("Lembrar?: "+lembrar);
        };
    
    const handleClick = (e) => {
        e.preventDefault();
        tipo==="password" ? setTipo("text") : setTipo("password");
    };

        return(
        <form onSubmit={submit}>
            <div className={styles.entrada}>
                <FaRegUser/>
                <Entrada titulo = "email" 
                         tipo = "email" 
                         placeholder="email@exemplo.com" 
                         setValor ={setEmail}/>
            </div>
             <div className={styles.senha}>
                <FaLock/>
                <Entrada titulo = "Senha" 
                         tipo = {tipo} 
                         placeholder="Digite sua senha" 
                         setValor ={setSenha}/>
                {tipo === "password" ? 
                <FaEye className={styles.icone} onClick={handleClick}/> : 
                <FaEyeSlash className={styles.icone} onClick={handleClick}/>}
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