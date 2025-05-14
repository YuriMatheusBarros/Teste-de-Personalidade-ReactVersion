import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Aqui estão as perguntas que o teste vai fazer
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
  // Aqui guardamos as respostas que a pessoa dá
  const [respostas, setRespostas] = useState([]);
  // Aqui sabemos qual pergunta estamos mostrando agora
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  // Quando a pessoa responde, guardamos a resposta e passamos para a próxima pergunta
  const handleAnswer = (value) => {
    const updatedRespostas = [...respostas, value];
    setRespostas(updatedRespostas);

    // Se ainda tem perguntas, mostramos a próxima
    if (updatedRespostas.length < perguntas.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Se acabaram as perguntas, calculamos o resultado e vamos para a página de resultados
      calcularResultado(updatedRespostas);
      navigate('/resultado'); 
    }
  };

  // Aqui calculamos os traços de personalidade com base nas respostas
  const calcularResultado = (respostas) => {
    // Cada traço é calculado somando as respostas de um grupo de perguntas
    const neuroticismo = calcularFator(respostas, 0, 5, 50);
    const conscienciosidade = calcularFator(respostas, 5, 10, 50);
    const extroversao = calcularFator(respostas, 10, 15, 50);
    const agradabilidade = calcularFator(respostas, 15, 20, 50);
    const abertura = calcularFator(respostas, 20, 25, 50);

    // Guardamos os resultados para usar depois na página de resultados
    sessionStorage.setItem("resultado", JSON.stringify({ neuroticismo, conscienciosidade, extroversao, agradabilidade, abertura }));
  };

  // Esta função pega as respostas de um grupo de perguntas e calcula uma porcentagem
  const calcularFator = (respostas, inicio, fim, maxPontos) => {
    let soma = 0;
    for (let i = inicio; i < fim; i++) {
      soma += respostas[i];
    }
    return (soma / maxPontos) * 100; // Transformamos a soma em uma porcentagem
  };

  return (
    <div className="question-screen">
      {/* Mostramos o número da pergunta e o texto dela */}
      <h1>Pergunta {currentQuestion + 1}</h1>
      <p>{perguntas[currentQuestion]}</p>
      {/* Botões para a pessoa escolher a resposta */}
      <button onClick={() => handleAnswer(0)}>Discordo Completamente</button>
      <button onClick={() => handleAnswer(2.5)}>Discordo parcialmente</button>
      <button onClick={() => handleAnswer(5)}>Neutro</button>
      <button onClick={() => handleAnswer(7.5)}>Concordo parcialmente</button>
      <button onClick={() => handleAnswer(10)}>Concordo Completamente</button>
    </div>
  );
}

export default QuestionScreen;