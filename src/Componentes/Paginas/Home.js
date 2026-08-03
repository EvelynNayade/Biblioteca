import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

import styles from './Home.module.css'

import imagem from '../../imagens/imagem.png'
import mascote from '../../imagens/mascote.svg'

function importarLogos(r) {
  const arquivos = {};
  r.keys().forEach((key) => {
    arquivos[key.replace('./', '')] = r(key);
  });
  return arquivos;
}

const logos = importarLogos(
  require.context('../../imagens/logos', false, /\.(png|jpe?g|svg)$/)
);

console.log(logos)

function Home(){
    const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Adiciona o evento de redimensionamento
    window.addEventListener('resize', handleResize);

    // Limpa o evento ao desmontar o componente para evitar vazamento de memória
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return(
        <div>
            <section className={styles.box}>
                <h1>Catalogação em nuvem</h1>
                <p>Sua Biblioteca nunca pareceu tão boa.</p>
                <p>Livros, filmes e séries em um só lugar.</p>
            
                    <Link to='/login'>Começar</Link>
               
                <img src={imagem} alt='Tela de Inicio'/>
                <h2>Crie, gerencie e compartilhe suas coleções</h2>
                <p className={styles.justificado}>
                    Nosso serviço de gerenciamento de biblioteca atende bibliotecas, escolas, organizações e 
                    catálogos residencias. Nosso software online permite criar várias coleções, catalogar
                    livros, filmes, séries, criar tags, deixar notas, importar ou exportar informações das 
                    obras, compartilhar suas coleções e muito mais. A Biblioteca Central de Trocas é o melhor 
                    lugar para catolgar e gerenciar sua mídia disponível online.
                </p>
                    <Link to='/login'>Começar</Link>
            </section>
           {screenSize.width < 950 ? 
            <div className={styles.tabela}>
               <div>
                <h3>
                    Dados automáticos para seus livros
                </h3>
                <p>
                    Basta digitalizar seu código de barras ISBN usando um scaner físco, ou enviar suas prórpias
                    informações e nós cuidamos do resto.
                </p>
                </div>
               <div><img src={imagem} className={styles.sombraLateral} alt='biblioteca pessoal'/></div>
               <div>
                <h3>
                    A sincronoia com nuvem mantém suas coleções atualizadas em vários dispositivos.
                </h3>
                <p>
                    Acesse suas coleções de qualquer lugar e de qualquer dispositivo.
                </p>
                </div>
               <div><img src={imagem} alt='sincronia'/></div>
               <div>
                <h3>
                    Crie até 100 coleções com um mix de mídias
                </h3>
                <p>
                    Misture e combine tipos de mídia livremente. Elas são flexíveis para que você possa
                    organizar suas coleções para atender às suas necessidades. Livros, filmes e séries -
                    manteha-os juntos ou separados.
                </p>
               </div>
               <div><img src={imagem} alt='colecoes' /></div>
            </div>
             : 
             <div className={styles.tabela}>
               <div>
                <h3>
                    Dados automáticos para seus livros
                </h3>
                <p>
                    Basta digitalizar seu código de barras ISBN usando um scaner físco, ou enviar suas prórpias
                    informações e nós cuidamos do resto.
                </p>
                </div>
               <div><img src={imagem} className={styles.sombraLateral} alt='biblioteca pessoal'/></div>
               <div><img src={imagem} alt='sincronia'/></div>
               <div>
                <h3>
                    A sincronoia com nuvem mantém suas coleções atualizadas em vários dispositivos.
                </h3>
                <p>
                    Acesse suas coleções de qualquer lugar e de qualquer dispositivo.
                </p>
                </div>
               <div>
                <h3>
                    Crie até 100 coleções com um mix de mídias
                </h3>
                <p>
                    Misture e combine tipos de mídia livremente. Elas são flexíveis para que você possa
                    organizar suas coleções para atender às suas necessidades. Livros, filmes e séries -
                    manteha-os juntos ou separados.
                </p>
               </div>
               <div><img src={imagem} alt='colecoes'/></div>
            </div>
            }
        <section className={styles.consumidores}>
                <div className={styles.gradiente}> 
                    <h2>Mais de 500.000 consumidores felizes</h2>
                    <p>A Biblioteca Central de Trocas foi construida do zero com base diretamente em feedback 
                        do usuário</p>
                </div>
                <img src={mascote} alt='mascote'/>
        </section>
        <section className={styles.confiado}>
            <h2>Confiado por grandes nomes</h2>
            <div className={styles.logos}>
                {
                    Object.entries(logos).map(([nome, src]) => (
                    <img src={src} alt={nome} key={nome}/>
                ))
                }
            </div>
                
        </section>
        </div>
    )
}

export default Home;