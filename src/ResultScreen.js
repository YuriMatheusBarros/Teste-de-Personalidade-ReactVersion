import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/ResultScreen.css'

function ResultScreen() {
  const navigate = useNavigate();
  // Pegamos os resultados que foram guardados no teste
  const resultado = JSON.parse(sessionStorage.getItem("resultado"));

  // Se não houver resultado (alguém veio aqui sem fazer o teste), voltamos para o início
  if (!resultado) {
    navigate('/');
    return null;
  }

  // Aqui explicamos o que cada traço de personalidade significa
  const explicacoes = {

    neuroticismo: "Refere-se à tendência de vivenciar emoções negativas, como ansiedade, insegurança e instabilidade emocional. Pessoas com pontuação alta costumam ser mais sensíveis ao estresse, enquanto pontuações baixas indicam maior estabilidade emocional. É importante notar que o neuroticismo não é necessariamente negativo, pois pode ajudar a identificar e lidar com situações desafiadoras.",
    conscienciosidade: "Relaciona-se com autodisciplina, organização, responsabilidade e foco em objetivos. Indivíduos com pontuação alta são organizados, determinados e confiáveis; pontuações mais baixas indicam impulsividade ou desorganização. Esse traço é frequentemente associado ao sucesso acadêmico e profissional, pois pessoas conscienciosas tendem a ser mais persistentes e comprometidas com suas metas.",
    extroversao: "Mede o quanto uma pessoa é sociável, energética e comunicativa. Altas pontuações revelam indivíduos extrovertidos, que gostam de interações sociais; baixas pontuações indicam pessoas mais reservadas e introspectivas. A extroversão não é uma questão de certo ou errado, mas sim um traço pessoal. Indivíduos extrovertidos podem se sentir energizados em ambientes sociais, enquanto os introvertidos podem preferir momentos de solitude ou interações mais profundas.",
    agradabilidade: "Envolve gentileza, empatia, cooperação e confiança. Pessoas com alta agradabilidade tendem a ser mais compreensivas e altruístas, enquanto níveis mais baixos indicam ceticismo, competitividade ou assertividade. Esse traço é importante para relacionamentos interpessoais, pois pessoas agradáveis costumam ser mais colaborativas e solidárias. No entanto, é essencial encontrar um equilíbrio entre agradabilidade e assertividade, pois ser excessivamente complacente pode levar a dificuldades em estabelecer limites.",
    abertura: "Reflete a criatividade, curiosidade intelectual, interesse por arte, novas ideias e experiências. Altas pontuações indicam pessoas imaginativas e abertas ao novo; pontuações mais baixas sugerem uma preferência por rotina e familiaridade. Esse traço é frequentemente associado à apreciação estética e à busca por experiências enriquecedoras. A abertura pode influenciar a forma como uma pessoa lida com mudanças e incertezas, sendo um fator importante na adaptação a novas situações.",

  };

  // Esta função encontra os traços com as maiores pontuações
  const encontrarMaiores = () => {
    const valores = Object.values(resultado); // Pegamos os números de cada traço
    const maior = Math.max(...valores); // Descobrimos qual é o maior número
    return Object.keys(resultado).filter(
      (fator) => resultado[fator] === maior // Pegamos os traços que têm o maior número
    );
  };

  // Guardamos os traços com as maiores pontuações
  const maioresPontuacoes = encontrarMaiores();

  // Esta função limpa os resultados e volta para o início do teste
  const refazerTeste = () => {
    sessionStorage.clear(); // Apagamos os resultados guardados
    navigate('/'); // Voltamos para a página inicial
  };

  return (
    <div className="result-screen resultCenter">
      <div className='caixa-result'>
        {/* Mostramos os resultados do teste */}
        <h2 className='titulo-result'>Resultado do Teste</h2>
        <p><span className='result-traco'>Neuroticismo:</span> {resultado.neuroticismo.toFixed(2)}%</p>
        <p><span className='result-traco'>Conscienciosidade:</span> {resultado.conscienciosidade.toFixed(2)}%</p>
        <p><span className='result-traco'>Extroversão:</span> {resultado.extroversao.toFixed(2)}%</p>
        <p><span className='result-traco'>Agradabilidade:</span> {resultado.agradabilidade.toFixed(2)}%</p>
        <p><span className='result-traco'>Abertura:</span> {resultado.abertura.toFixed(2)}%</p>
      </div>

      {/* Mostramos os traços mais fortes da pessoa */}
      <h3 className='titulo-traco-dominante' style={{ marginTop: '1.5em' }}>
        {maioresPontuacoes.length > 1 ? 'Traços de personalidade em destaque:' : 'Traço de personalidade dominante:'}
      </h3>
      <ul>
        {maioresPontuacoes.map((fator) => (
          <li key={fator}>
            <strong>{fator.charAt(0).toUpperCase() + fator.slice(1)}:</strong> {explicacoes[fator]}
          </li>
        ))}
      </ul>

      <div className='botoes-sobre-refazer'>
        {/* Botões para refazer o teste ou aprender mais sobre a teoria */}
        <button className='buttons' onClick={refazerTeste}>REFAZER TESTE</button>
        <button className='buttons' onClick={() => navigate('/traços')}>SABER MAIS SOBRE A TEORIA</button>
      </div>
    </div>
  );
}

export default ResultScreen;


