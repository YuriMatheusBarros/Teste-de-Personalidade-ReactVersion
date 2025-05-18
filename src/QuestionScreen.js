import React, { useState, useEffect } from 'react'; // UseEffect serve para executar ações automáticas: carregar, embaralhar, animar, etc.
// Esse "useNavigate" é como um mapa que nos ajuda a ir para outra página.
import { useNavigate } from 'react-router-dom';

import './css/QuestionScreen.css'

// Cada pergunta tem um texto, um peso (o quanto ela vale) e qual tipo de personalidade ela mede.
const perguntas = [
  //  Neuroticismo
  { texto: "É comum que pequenos problemas fiquem na minha cabeça por bastante tempo.", peso: 2, tipo: "neuroticismo" }, // ansiedade moderada
  { texto: "Certas situações do dia a dia conseguem me deixar impaciente com facilidade.", peso: 2, tipo: "neuroticismo" }, // reatividade emocional
  { texto: "Geralmente me sinto confortável ao lidar com situações novas ou desafiadoras.", peso: 2, tipo: "neuroticismo", inverso: true }, // baixa segurança interna
  { texto: "Sou resistente ao estresse", peso: 1, tipo: "neuroticismo", inverso: true }, // característica positiva oposta
  { texto: "Costumo me sentir desanimado(a)", peso: 3, tipo: "neuroticismo" }, // depressividade intensa
  { texto: "Tenho mudanças de humor repentinas", peso: 3, tipo: "neuroticismo" }, // instabilidade emocional alta
  

  //  Conscienciosidade
  { texto: "Completo as tarefas que me são passadas dentro do prazo", peso: 2, tipo: "conscienciosidade" }, // responsabilidade geral
  { texto: "Gosto de organizar as coisas", peso: 2, tipo: "conscienciosidade" }, // ordem e estrutura
  { texto: "Tenho claro meus objetivos", peso: 1, tipo: "conscienciosidade" }, // clareza de metas, peso leve
  { texto: "Trabalho duro", peso: 3, tipo: "conscienciosidade" }, // esforço intenso e dedicação
  { texto: "Sou disciplinado em minha rotina", peso: 3, tipo: "conscienciosidade" }, // autodisciplina elevada
  { texto: "Costumo procrastinar minhas tarefas", peso: 2, tipo: "conscienciosidade", inverso: true }, // comportamento oposto ao fator

  //  Extroversão
  { texto: "Evito ser o centro das atenções", peso: 2, tipo: "extroversao", inverso: true }, // timidez, inverso do traço
  { texto: "Tenho facilidade em iniciar conversas com pessoas novas", peso: 2, tipo: "extroversao" }, // sociabilidade
  { texto: "Amo festas grandes", peso: 3, tipo: "extroversao" }, // preferência por estímulo social intenso
  { texto: "Em grupos, normalmente prefiro observar antes de participar", peso: 1, tipo: "extroversao", inverso: true }, // retraimento social leve
  { texto: "Demonstro com clareza como estou me sentindo", peso: 2, tipo: "extroversao" }, // expressividade emocional
  { texto: "Gosto de experimentar coisas novas com frequência", peso: 1, tipo: "extroversao" }, // busca de novidade
  { texto: "Sinto-me à vontade em ambientes com muitas pessoas", peso: 3, tipo: "extroversao" }, // adaptabilidade social


  //  Agradabilidade
  { texto: "Tenho dificuldade em deixar para trás mágoas do passado", peso: 3, tipo: "agradabilidade", inverso: true }, // ressentimento elevado
  { texto: "Gosto de ajudar nas tarefas de casa", peso: 1, tipo: "agradabilidade" }, // cooperação básica
  { texto: "Geralmente acredito nas boas intenções das pessoas", peso: 2, tipo: "agradabilidade" }, // confiança interpessoal
  { texto: "Mantenho minhas promessas", peso: 3, tipo: "agradabilidade" }, // confiabilidade elevada
  { texto: "Normalmente sou receptivo com desconhecidos.", peso: 2, tipo: "agradabilidade" }, // afabilidade social
  { texto: "Costumo ceder para evitar conflitos", peso: 2, tipo: "agradabilidade" }, // tendência conciliadora
  { texto: "Tendo a desconfiar das pessoas", peso: 2, tipo: "agradabilidade", inverso: true }, // baixa confiança

  //  Abertura
  { texto: "Costumo imaginar cenários detalhados quando penso em algo.", peso: 2, tipo: "abertura" }, // imaginação criativa
  { texto: "Geralmente encontro significado em músicas, pinturas ou outras expressões artísticas.", peso: 2, tipo: "abertura" }, // valorização estética
  { texto: "Frequentemente encontro maneiras diferentes de resolver problemas ou expressar ideias.", peso: 3, tipo: "abertura" }, // criatividade pessoal
  { texto: "Prefiro ideias práticas a conceitos abstratos", peso: 2, tipo: "abertura", inverso: true }, // pragmatismo reduzido
  { texto: "Fico facilmente envolvido por histórias de mundos imaginários ou situações irreais.", peso: 1, tipo: "abertura" }, // gosto por fantasia
  { texto: "Às vezes sou tocado por detalhes ou cenas que a maioria das pessoas nem nota.", peso: 3, tipo: "abertura" }, // sensibilidade estética elevada
  { texto: "Evito temas filosóficos ou existenciais", peso: 2, tipo: "abertura", inverso: true } // restrição à reflexão abstrata
];


function QuestionScreen() {
  const [respostas, setRespostas] = useState([]); // Guardamos aqui as respostas da pessoa
  const [currentQuestion, setCurrentQuestion] = useState(0); // Qual pergunta estamos mostrando agora
  const [perguntasEmbaralhadas, setPerguntasEmbaralhadas] = useState([]); // Perguntas embaralhadas
  const navigate = useNavigate(); // Usado para mudar de tela

  // Embaralhar perguntas apenas uma vez quando o componente monta
  useEffect(() => {
    const perguntasMisturadas = embaralharArray([...perguntas]);
    setPerguntasEmbaralhadas(perguntasMisturadas);
  }, []);

  // Função para embaralhar usando Fisher-Yates, Essa função embaralha as perguntas como se fosse cartas
  const embaralharArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Quando a pessoa clica numa resposta, essa função é chamada
  const handleAnswer = (value) => {
    const updatedRespostas = [...respostas, value]; // Adicionamos a nova resposta
    setRespostas(updatedRespostas); // Atualizamos o estado

    if (updatedRespostas.length < perguntasEmbaralhadas.length) {
      // Se ainda tiver pergunta, vamos para a próxima
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Se acabaram as perguntas, calculamos o resultado
      calcularResultado(updatedRespostas, perguntasEmbaralhadas);
      navigate('/resultado'); // E vamos para a tela de resultado
    }
  };

   // Aqui a gente calcula a nota final para cada traço de personalidade
  const calcularResultado = (respostas, perguntasUsadas) => {
    const fatores = {
      neuroticismo: [],
      conscienciosidade: [],
      extroversao: [],
      agradabilidade: [],
      abertura: [],
    };

    // Para cada resposta, somamos seu valor (com ou sem inversão) e peso
    respostas.forEach((resposta, index) => {
      const pergunta = perguntasUsadas[index];
      const valorFinal = pergunta.inverso ? 10 - resposta : resposta;

      fatores[pergunta.tipo].push({
        valor: valorFinal,
        peso: pergunta.peso,
      });
    });

     // Calcula uma média ponderada para cada traço (nota final de 0 a 100)
    const calcularMediaPonderada = (entradas) => {
      let somaPonderada = 0;
      let somaPesos = 0;
      entradas.forEach(({ valor, peso }) => {
        somaPonderada += valor * peso;
        somaPesos += peso;
      });
      return (somaPonderada / (somaPesos * 10)) * 100;
    };

    // Resultado final guardado em porcentagens
    const resultadoFinal = {
      neuroticismo: calcularMediaPonderada(fatores.neuroticismo),
      conscienciosidade: calcularMediaPonderada(fatores.conscienciosidade),
      extroversao: calcularMediaPonderada(fatores.extroversao),
      agradabilidade: calcularMediaPonderada(fatores.agradabilidade),
      abertura: calcularMediaPonderada(fatores.abertura),
    };

    // Salvamos o resultado para usar na próxima tela
    sessionStorage.setItem("resultado", JSON.stringify(resultadoFinal));
  };

   // Se as perguntas ainda estiverem carregando (ou seja, se a lista estiver vazia), mostramos uma mensagem
  if (perguntasEmbaralhadas.length === 0) {
    return <p>Carregando perguntas...</p>;
  }

  // Aqui mostramos a pergunta atual e os botões de resposta
  return (
    <div className="question-screen">
      <h1 className='pergunta-numero'>Pergunta {currentQuestion + 1}</h1>
      <div className='caixa-pergunta'>
        <p className='perguntas'>{perguntasEmbaralhadas[currentQuestion].texto}</p>
      </div>
      <div className='buttons-opcoes'>
        <button className='button-opcao' onClick={() => handleAnswer(0)}>DISCORDO COMPLETAMENTE</button>
        <button className='button-opcao' onClick={() => handleAnswer(2.5)}>DISCORDO PARCIALMENTE</button>
        <button className='button-opcao' onClick={() => handleAnswer(5)}>NEUTRO</button>
        <button className='button-opcao' onClick={() => handleAnswer(7.5)}>CONCORDO PARCIALMENTE</button>
        <button className='button-opcao' onClick={() => handleAnswer(10)}>CONCORDO COMPLETAMENTE</button>
      </div>
    </div>
  );
}

export default QuestionScreen;