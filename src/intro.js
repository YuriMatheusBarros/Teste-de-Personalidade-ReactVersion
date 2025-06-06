// Importamos o React, que é como a mágica para criar as partes do site
import React from 'react';

import './css/intro.css'

// Importamos o useNavigate, que ajuda a mudar de página no site
import { useNavigate } from 'react-router-dom';

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

      <h1 className='boasVindas'>Bem-vindo ao Teste de Personalidade dos Cinco Fatores!</h1>

      <p className='explicacao-tracos'>Este teste é baseado no modelo dos cinco grandes traços de personalidade: <strong>Neuroticismo</strong>, <strong>Conscienciosidade</strong>, <strong>Extroversão</strong>, <strong>Agradabilidade</strong> e <strong>Abertura</strong>.</p>
      <p className='explicacao negrito'> O objetivo é avaliar como você reage em diferentes situações com base nos Cinco Fatores.</p>

      <p className='explicacao aviso'>Este é um teste de demonstração e não substitui uma avaliação psicológica profissional</p>

      <p className='explicacao opcoes'>As opções de resposta variam entre:</p>

      <ul type='circle' className='opcoes'>
        <li>Discordo Completamente</li>
        <li>Discordo parcialmente</li>
        <li>Neutro</li>
        <li>Concordo parcialmente</li>
        <li>Concordo Completamente</li>
      </ul>

      <p className='explicacao txt-aposResponder'>Após responder todas as perguntas, você receberá um resultado detalhado sobre os seus traços de personalidade com maior destaque.</p>
      <p className='text-cliqueParaComecar'>Pronto? Clique abaixo para começar!</p>
      <div className="info-extra">
        <p><i class="fa-solid fa-clock"></i><strong>Duração estimada:</strong> 4 minutos</p>
        <p><i class="fa-solid fa-puzzle-piece"></i><strong>Total de perguntas:</strong> 30</p>
        <p><i class="fa-solid fa-lock"></i><strong>Seus dados não são salvos</strong></p>
      </div>
      <div className='divButton-iniciar'>
        {/* Botão que inicia o teste e chama a função iniciarTeste */}
        <button className='button-iniciarTeste' onClick={iniciarTeste}>COMEÇAR TESTE</button>
      </div>
    </div>
  );
}

// Exportamos a página Intro para que ela possa ser usada em outras partes do site
export default Intro;

