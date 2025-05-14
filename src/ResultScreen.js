import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultScreen() {
  const navigate = useNavigate();
  const resultado = JSON.parse(sessionStorage.getItem("resultado"));

  if (!resultado) {
    navigate('/');
    return null;
  }

  const explicacoes = {

    neuroticismo: "Refere-se à tendência de vivenciar emoções negativas, como ansiedade, insegurança e instabilidade emocional. Pessoas com pontuação alta costumam ser mais sensíveis ao estresse, enquanto pontuações baixas indicam maior estabilidade emocional. É importante notar que o neuroticismo não é necessariamente negativo, pois pode ajudar a identificar e lidar com situações desafiadoras.",
    conscienciosidade: "Relaciona-se com autodisciplina, organização, responsabilidade e foco em objetivos. Indivíduos com pontuação alta são organizados, determinados e confiáveis; pontuações mais baixas indicam impulsividade ou desorganização. Esse traço é frequentemente associado ao sucesso acadêmico e profissional, pois pessoas conscienciosas tendem a ser mais persistentes e comprometidas com suas metas.",
    extroversao: "Mede o quanto uma pessoa é sociável, energética e comunicativa. Altas pontuações revelam indivíduos extrovertidos, que gostam de interações sociais; baixas pontuações indicam pessoas mais reservadas e introspectivas. A extroversão não é uma questão de certo ou errado, mas sim uma preferência pessoal. Indivíduos extrovertidos podem se sentir energizados em ambientes sociais, enquanto os introvertidos podem preferir momentos de solidão ou interações mais profundas.",
    agradabilidade: "Envolve gentileza, empatia, cooperação e confiança. Pessoas com alta agradabilidade tendem a ser mais compreensivas e altruístas, enquanto níveis mais baixos indicam ceticismo, competitividade ou assertividade. Esse traço é importante para relacionamentos interpessoais, pois pessoas agradáveis costumam ser mais colaborativas e solidárias. No entanto, é essencial encontrar um equilíbrio entre agradabilidade e assertividade, pois ser excessivamente complacente pode levar a dificuldades em estabelecer limites.",
    abertura: "Reflete a criatividade, curiosidade intelectual, interesse por arte, novas ideias e experiências. Altas pontuações indicam pessoas imaginativas e abertas ao novo; pontuações mais baixas sugerem uma preferência por rotina e familiaridade. Esse traço é frequentemente associado à apreciação estética e à busca por experiências enriquecedoras. A abertura pode influenciar a forma como uma pessoa lida com mudanças e incertezas, sendo um fator importante na adaptação a novas situações.",
    
  };

  const encontrarMaiores = () => {
    const valores = Object.values(resultado);
    const maior = Math.max(...valores);
    return Object.keys(resultado).filter(
      (fator) => resultado[fator] === maior
    );
  };

  const maioresPontuacoes = encontrarMaiores();

  const refazerTeste = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className="result-screen">
      <h2>Resultado do Teste</h2>
      <p>Neuroticismo: {resultado.neuroticismo.toFixed(2)}%</p>
      <p>Conscienciosidade: {resultado.conscienciosidade.toFixed(2)}%</p>
      <p>Extroversão: {resultado.extroversao.toFixed(2)}%</p>
      <p>Agradabilidade: {resultado.agradabilidade.toFixed(2)}%</p>
      <p>Abertura: {resultado.abertura.toFixed(2)}%</p>

      <h3 style={{ marginTop: '1.5em' }}>
        {maioresPontuacoes.length > 1 ? 'Traços de personalidade em destaque:' : 'Traço de personalidade dominante:'}
      </h3>
      <ul>
        {maioresPontuacoes.map((fator) => (
          <li key={fator}>
            <strong>{fator.charAt(0).toUpperCase() + fator.slice(1)}:</strong> {explicacoes[fator]}
          </li>
        ))}
      </ul>



      <button onClick={refazerTeste}>Refazer Teste</button>
      <button onClick={() => navigate('/traços')}>Saber mais sobre a teoria</button>
    </div>
  );
}

export default ResultScreen;


