import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const perguntas = [
  "Me preocupo com as coisas",
  "Me irrito facilmente",
  "Costumo me sentir desanimado(a)",
  "Tenho dificuldade de me aproximar dos outros",
  "Estou sempre ocupado",
  "Completo as tarefas que me são passadas",
  "Gosto de organizar as coisas",
  "Tenho claro meus objetivos",
  "Trabalho duro",
  "Gosto de ler textos desafiadores",
  "Faço amigos com facilidade",
  "Amo festas grandes",
  "Expresso minhas emoções intensamente",
  "Prefiro variedade à rotina",
  "Cometo exageros",
  "Gosto de ajudar nas tarefas de casa",
  "Confio nos outros",
  "Mantenho minhas promessas",
  "Estou sempre preparado",
  "Me sinto confortável no meio das pessoas",
  "Tenho imaginação vívida",
  "Acredito na importância da arte",
  "Me considero criativo",
  "Adoro histórias fantásticas",
  "Vejo beleza em coisas que os outros não vêem"
];

function QuestionScreen() {
  const [respostas, setRespostas] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (value) => {
    const updatedRespostas = [...respostas, value];
    setRespostas(updatedRespostas);

    if (updatedRespostas.length < perguntas.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calcularResultado(updatedRespostas);
      navigate('/resultado'); 
    }
  };

  const calcularResultado = (respostas) => {
    const neuroticismo = calcularFator(respostas, 0, 5, 50);
    const conscienciosidade = calcularFator(respostas, 5, 10, 50);
    const extroversao = calcularFator(respostas, 10, 15, 50);
    const agradabilidade = calcularFator(respostas, 15, 20, 50);
    const abertura = calcularFator(respostas, 20, 25, 50);

    sessionStorage.setItem("resultado", JSON.stringify({ neuroticismo, conscienciosidade, extroversao, agradabilidade, abertura }));
  };

  const calcularFator = (respostas, inicio, fim, maxPontos) => {
    let soma = 0;
    for (let i = inicio; i < fim; i++) {
      soma += respostas[i];
    }
    return (soma / maxPontos) * 100;
  };

  return (
    <div className="question-screen">
      <h1>Pergunta {currentQuestion + 1}</h1>
      <p>{perguntas[currentQuestion]}</p>
      <button onClick={() => handleAnswer(0)}>Discordo Completamente</button>
  
      <button onClick={() => handleAnswer(2.5)}>Discordo parcialmente</button>
      
      <button onClick={() => handleAnswer(5)}>Neutro</button>

      <button onClick={() => handleAnswer(7.5)}>Concordo parcialmente</button>

      <button onClick={() => handleAnswer(10)}>Concordo Completamente</button>
    </div>
  );
}

export default QuestionScreen;

