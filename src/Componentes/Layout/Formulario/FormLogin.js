import { useState } from "react";
import Entrada from "./Entrada";
import CheckBox from "./CheckBox";

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
    
    const handleCheck = (e) => {
        setLembrar(e.target.checked);
    };

    return(
        <form onSubmit={submit}>
            <Entrada titulo = "email" 
                         tipo = "email" 
                         placeholder="email@exemplo.com" 
                         setValor ={setEmail}/>
            <Entrada titulo = "Senha" 
                         tipo = "password" 
                         placeholder="Digite sua senha" 
                         setValor ={setSenha}/>
            <CheckBox texto = "Lembrar-me"
                      status = {lembrar}
                      setValor = {handleCheck}/>
        </form>
    )
}

export default FormLogin