import React from 'react';
import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate();

  const iniciarTeste = () => {
    navigate('/perguntas'); 
  };

  return (
    <div className="intro">
      <h1>Teste de Personalidade</h1>
      <p>Bem-vindo ao Teste de Personalidade dos Cinco Fatores!</p>
      <p>Este teste é baseado no modelo dos cinco grandes traços de personalidade: Neuroticismo, Conscienciosidade, Extroversão, Agradabilidade e Abertura.</p>
      <p>O objetivo é avaliar como você se comporta e se sente em diferentes situações.</p>
      <p>O teste é composto por 25 perguntas, e você deve avaliar cada uma delas de acordo com a sua percepção.</p>
      <p>As opções de resposta variam de (Discordo Completamente),(Discordo parcialmente),(Neutro),(Concordo parcialmente),(Concordo Completamente).</p>
      <p>Após responder todas as perguntas, você receberá um resultado detalhado sobre os seus traços de personalidade com maior destaque.</p>
      <p>Boa sorte!</p>
      <button onClick={iniciarTeste}>Iniciar Teste</button>
    </div>
  );
}

export default Intro;

