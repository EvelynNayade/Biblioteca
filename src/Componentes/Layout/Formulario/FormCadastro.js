import {useEffect, useState } from "react"
import styles from "./FormCadastro.module.css"

import Entrada from "./Entrada"
import Botao from "./Botao";
import Select from "./Select";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function FormCadastro(){
    const [pais, setPais] = useState([]);

    useEffect(()=>{
         fetch("http://localhost:5000/paises",{
            method: "GET",
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data)=>{
            setPais(data)
        })
        .catch((err)=>console.log(err))
    },[])

    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confSenha, setConfSenha] = useState();
    
    const [tipoS, setTipoS] = useState("password");
    const [tipoCS, setTipoCS] = useState("password");

    const handleClickS = (e) => {
        e.preventDefault();
        tipoS==="password" ? setTipoS("text") : setTipoS("password");
    };

     const handleClickCS = (e) => {
        e.preventDefault();
        tipoCS==="password" ? setTipoCS("text") : setTipoCS("password");
    };

     const submit = (e) =>{
        e.preventDefault();
        console.log("Nome Completo: "+nome+" "+sobrenome);
        console.log("Email: "+email);
        console.log("Senha: "+senha);
        console.log("Confirmar Senha: "+confSenha)
        console.log("País: "+pais);
    };

    return (
        <form onSubmit={submit}>
            <div className={styles.formulario}>
                <div>
                    <p>Nome</p>
                    <Entrada titulo = "Nome" 
                            tipo = "text" 
                            placeholder="Nome" 
                            setValor ={setNome}/>
                </div>
                <div>
                    <p>Sobrenome</p>
                    <Entrada titulo = "Sobrenome" 
                            tipo = "text" 
                            placeholder="Sobrenome" 
                            setValor ={setSobrenome}/>
                </div>
                <div>
                    <p>Email</p>
                    <Entrada titulo = "Email" 
                            tipo = "email" 
                            placeholder="email@exemplo.com" 
                            setValor ={setEmail}/>
                </div>
                <div>
                    <p>País</p>
                    <Select nome="Selecionar Pais"
                            options={pais}/>
                </div>
                <div>
                    <p>Senha</p>
                    <div className={styles.senha}>
                        <Entrada titulo = "Senha" 
                            tipo = {tipoS} 
                            placeholder="Senha" 
                            setValor ={setSenha}/>
                        {tipoS === "password" ? 
                    <FaEye onClick={handleClickS}/> : 
                    <FaEyeSlash onClick={handleClickS}/>}
                    </div>
                </div>
                <div>
                    <p>Confirmar Senha</p>
                    <div className={styles.senha}>
                        <Entrada titulo = "Confirmar Senha" 
                            tipo = {tipoCS} 
                            placeholder="Confrimar Senha" 
                            setValor ={setConfSenha}/>
                        {tipoCS === "password" ? 
                    <FaEye onClick={handleClickCS}/> : 
                    <FaEyeSlash onClick={handleClickCS}/>}
                    </div>
                </div>
            </div>
            <Botao tipo="submit" customClass="botao_pequeno" texto="Cadastrar"/>
        </form>
    )
}

export default FormCadastro