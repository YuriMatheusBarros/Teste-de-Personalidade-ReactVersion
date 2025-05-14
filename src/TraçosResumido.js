import React from 'react';
import { useNavigate } from 'react-router-dom';

function TraçosResumido() {
  const navigate = useNavigate();

  const explicacoes = {

    neuroticismo: "Refere-se à tendência de vivenciar emoções negativas, como ansiedade, insegurança e instabilidade emocional. Pessoas com pontuação alta costumam ser mais sensíveis ao estresse, enquanto pontuações baixas indicam maior estabilidade emocional. É importante notar que o neuroticismo não é necessariamente negativo, pois pode ajudar a identificar e lidar com situações desafiadoras.",
    conscienciosidade: "Relaciona-se com autodisciplina, organização, responsabilidade e foco em objetivos. Indivíduos com pontuação alta são organizados, determinados e confiáveis; pontuações mais baixas indicam impulsividade ou desorganização. Esse traço é frequentemente associado ao sucesso acadêmico e profissional, pois pessoas conscienciosas tendem a ser mais persistentes e comprometidas com suas metas.",
    extroversao: "Mede o quanto uma pessoa é sociável, energética e comunicativa. Altas pontuações revelam indivíduos extrovertidos, que gostam de interações sociais; baixas pontuações indicam pessoas mais reservadas e introspectivas. A extroversão não é uma questão de certo ou errado, mas sim uma preferência pessoal. Indivíduos extrovertidos podem se sentir energizados em ambientes sociais, enquanto os introvertidos podem preferir momentos de solidão ou interações mais profundas.",
    agradabilidade: "Envolve gentileza, empatia, cooperação e confiança. Pessoas com alta agradabilidade tendem a ser mais compreensivas e altruístas, enquanto níveis mais baixos indicam ceticismo, competitividade ou assertividade. Esse traço é importante para relacionamentos interpessoais, pois pessoas agradáveis costumam ser mais colaborativas e solidárias. No entanto, é essencial encontrar um equilíbrio entre agradabilidade e assertividade, pois ser excessivamente complacente pode levar a dificuldades em estabelecer limites.",
    abertura: "Reflete a criatividade, curiosidade intelectual, interesse por arte, novas ideias e experiências. Altas pontuações indicam pessoas imaginativas e abertas ao novo; pontuações mais baixas sugerem uma preferência por rotina e familiaridade. Esse traço é frequentemente associado à apreciação estética e à busca por experiências enriquecedoras. A abertura pode influenciar a forma como uma pessoa lida com mudanças e incertezas, sendo um fator importante na adaptação a novas situações.",
  };

  // Esta função apaga os resultados e leva a pessoa de volta para o início
  const refazerTeste = () => {
    sessionStorage.clear(); // Limpamos os dados guardados do teste
    navigate('/'); // Voltamos para a página inicial
  };

  return (
    <div className="result-screen">
      {/* Título da página */}
      <h1>Teoria big five</h1>
      {/* Explicação geral sobre os cinco traços de personalidade */}
      <h3>A teoria dos Cinco Grandes Fatores de Personalidade (Big Five) descreve a personalidade humana em cinco dimensões principais. Cada pessoa possui uma combinação única desses traços, que ajudam a explicar padrões de pensamento, emoção e comportamento:</h3>
      {/* Mostramos as explicações de cada traço */}
      <p>Neuroticismo: {explicacoes.neuroticismo}</p>
      <p>Conscienciosidade: {explicacoes.conscienciosidade}</p>
      <p>Extroversão: {explicacoes.extroversao}</p>
      <p>Agradabilidade: {explicacoes.agradabilidade}</p>
      <p>Abertura: {explicacoes.abertura}</p>

      {/* Botão para refazer o teste */}
      <button onClick={refazerTeste}>Refazer Teste</button>
    </div>
  );
}

export default TraçosResumido;