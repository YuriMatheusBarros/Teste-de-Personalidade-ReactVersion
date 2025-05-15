// Importamos o React, que é como a mágica para criar as partes do site
import React from 'react';
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
      {/* Título da página */}
      <h1>Teste de Personalidade</h1>
      {/* Textos explicando o que é o teste */}
      <p>Bem-vindo ao Teste de Personalidade dos Cinco Fatores!</p>
      <p>Este teste é baseado no modelo dos cinco grandes traços de personalidade: Neuroticismo, Conscienciosidade, Extroversão, Agradabilidade e Abertura.</p>
      <p>O objetivo é avaliar como você se comporta e se sente em diferentes situações.</p>
      <p>O teste é composto por 33 perguntas, e você deve avaliar cada uma delas de acordo com a sua percepção.</p>
      <p>As opções de resposta variam de (Discordo Completamente),(Discordo parcialmente),(Neutro),(Concordo parcialmente),(Concordo Completamente).</p>
      <p>Após responder todas as perguntas, você receberá um resultado detalhado sobre os seus traços de personalidade com maior destaque.</p>
      <p>Boa sorte!</p>
      {/* Botão que inicia o teste e chama a função iniciarTeste */}
      <button onClick={iniciarTeste}>Iniciar Teste</button>
    </div>
  );
}

// Exportamos a página Intro para que ela possa ser usada em outras partes do site
export default Intro;

