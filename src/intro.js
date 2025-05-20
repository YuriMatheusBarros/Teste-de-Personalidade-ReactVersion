// Importamos o React, que é como a mágica para criar as partes do site
import React from 'react';

import './css/intro.css'

// Importamos o useNavigate, que ajuda a mudar de página no site
import { useNavigate } from 'react-router-dom';

import cerebroImg from './image/cerebro.png';
import objetivoImg from './image/objetivo.png';
import info from './image/info.png';
import circuloAzul from './image/circuloAzul.png';

// Criamos uma função chamada Intro, que é uma parte do site (uma página)
function Intro() {
  // Aqui usamos o useNavigate para poder mudar de página
  const navigate = useNavigate();

  // Esta função é chamada quando clicamos no botão "Iniciar Teste"
  const iniciarTeste = () => {
    // Quando clicamos, ela nos leva para a página de perguntas ("/perguntas")
    navigate('/perguntas'); 
  };

  // Aqui está o que aparece na tela quando estamos nesta página
  return (
    <div className="intro">
      {/* Textos explicando o que é o teste */}
      <div className='img-titulo'>
        <img src={cerebroImg} alt="Ícone de cérebro"/>
        <h1 className='boasVindas'>Bem-vindo ao Teste de Personalidade dos Cinco Fatores!</h1>
      </div>
      <p className='explicacao-tracos'>Este teste é baseado no modelo dos cinco grandes traços de personalidade: <strong>Neuroticismo</strong>, <strong>Conscienciosidade</strong>, <strong>Extroversão</strong>, <strong>Agradabilidade</strong> e <strong>Abertura</strong>.</p>

      <div className='conjunto-img-texto'>
        <img className='imagens-demonstrativas' src={objetivoImg} alt='Imagem de um alvo'/>
        <p className='explicacao'> Objetivo: Avaliar como você reage em diferentes situações com base nos Cinco Fatores. Composto por 30 perguntas </p>
      </div>

      <div className='conjunto-img-texto'>
        <img className='imagens-demonstrativas' src={info} alt='imagem de simbolo que representa informação'/>
        <p className='explicacao'><em>Este é um teste de demonstração e não substitui uma avaliação psicológica profissional</em></p>
      </div>

      <div className='conjunto-img-texto'>
        <img className='imagens-demonstrativas' src={circuloAzul} alt='Simbolo circulo azul'/>
        <p className='explicacao'>As opções de resposta variam entre:</p>
      </div>
        <ul type='circle' className='opcoes'>
          <li>Discordo Completamente</li>
          <li>Discordo parcialmente</li>
          <li>Neutro</li>
          <li>Concordo parcialmente</li>
          <li>Concordo Completamente</li>
        </ul>

      <p className='explicacao '>Após responder todas as perguntas, você receberá um resultado detalhado sobre os seus traços de personalidade com maior destaque.<span className='text-cliqueParaComecar'>Pronto? Clique abaixo para começar!</span></p>

      <div className='divButton-iniciar'>
        {/* Botão que inicia o teste e chama a função iniciarTeste */}
        <button className='button-iniciarTeste' onClick={iniciarTeste}>COMEÇAR TESTE</button>
      </div>

    </div>
  );
}

// Exportamos a página Intro para que ela possa ser usada em outras partes do site
export default Intro;

