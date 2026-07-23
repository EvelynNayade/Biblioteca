import styles from './Footer.module.css'

function Footer(){
    return(
        <div className = {styles.footer}>
            <div className={styles.sobre}>
                <div className={styles.listaBox}>
                    <ul className={styles.lista}>
                        <li className={styles.nomeLista}>Plataforma</li>
                        <li className={styles.itemLista}>Home</li>
                        <li className={styles.itemLista}>Iniciar Sessão</li>
                        <li className={styles.itemLista}>Cadastrar-se</li>
                    </ul>
                     <ul className={styles.lista}>
                        <li className={styles.nomeLista}>Aprenda</li>
                        <li className={styles.itemLista}>Contato</li>
                        <li className={styles.itemLista}>Suporte</li>
                        <li className={styles.itemLista}>Blog</li>
                        <li className={styles.itemLista}>FAQs</li>
                    </ul>
                     <ul className={styles.lista}>
                        <li className={styles.nomeLista}>Políticas</li>
                        <li className={styles.itemLista}>Privacidade</li>
                        <li className={styles.itemLista}>Segurança</li>
                        <li className={styles.itemLista}>Termos</li>
                    </ul>
                    <ul className={styles.lista}>
                        <li className={styles.nomeLista}>Social</li>
                        <li className={styles.itemLista}>YouTube</li>
                        <li className={styles.itemLista}>Notícias</li>
                        <li className={styles.itemLista}>TikTok</li>
                        <li className={styles.itemLista}>Instragram</li>
                    </ul>
                </div>
                <div className={styles.sobreBox}>
                    <h1 className={styles.sobreTitulo}>Biblioteca Central de Trocas</h1>
                <p className={styles.sobreTexto}> Quer você tenha 50 itens ou 5.000 itens, sua biblioteca é preciosa. Com a Biblioteca Central de Trocas
                    gerenciano sua própria biblioteca privada fica muito mais fácil. Crie a sua conte hoje mesmo.
                </p>
                </div>
            </div>
            <div className={styles.direitos}> 
                <p> <span>Biblioteca Central de Trocas </span> &copy; 2026</p>
                <p> Todos os direitos reservados</p>
            </div>
        </div>
    )
}

export default Footer