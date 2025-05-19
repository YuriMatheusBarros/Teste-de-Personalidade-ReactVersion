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

      
      <p className='explicacao'>O objetivo é avaliar como você se comporta e se sente em diferentes situações.</p>
      <p className='explicacao'>Composto por 30 perguntas, <em>este é apenas um teste de demonstração, baseado no modelo dos Cinco Fatores. Não substitui uma avaliação psicológica profissional.</em> — responda conforme sua própria percepção.</p>
      <p className='explicacao'>As opções de resposta variam entre: Discordo Completamente, Discordo parcialmente, Neutro, Concordo parcialmente, Concordo Completamente.</p>
      <p className='explicacao'>Não há respostas certas ou erradas — apenas a sua própria visão sobre si mesmo(a).</p>
      <p className='explicacao'>Após responder todas as perguntas, você receberá um resultado detalhado sobre os seus traços de personalidade com maior destaque.<span className='text-boaSorte'>Bom teste!</span></p>
      <p className='explicacao destaque-suave'> <i class="bi bi-info-circle"></i> É recomendável evitar a opção neutro para maior exatidão do resultado.</p>

      {/* Botão que inicia o teste e chama a função iniciarTeste */}
      <button className='button-iniciarTeste' onClick={iniciarTeste}>INICIAR TESTE</button>
    </div>
  );
}

// Exportamos a página Intro para que ela possa ser usada em outras partes do site
export default Intro;

