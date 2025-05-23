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

  neuroticismo: `Neuroticismo é um traço de personalidade que reflete a sensibilidade emocional e a predisposição a sentimentos negativos, levando pessoas com alta pontuação a experimentar ansiedade, irritação e tristeza mais frequentemente, além de maior vulnerabilidade ao estresse e dificuldade de recuperação emocional; por outro lado, quem tem baixo neuroticismo demonstra maior resiliência e calma. Embora não seja um defeito e possa atuar como um "radar emocional" – uma vez que a capacidade de antecipar problemas e a vigilância podem ter conferido uma vantagem evolutiva –, o excesso de neuroticismo pode prejudicar a saúde mental, sendo fundamental compreender esse nível para desenvolver estratégias de regulação emocional e buscar apoio profissional. Em vez de focar em profissões que "evitam" o neuroticismo, é mais útil pensar em carreiras onde essa sensibilidade pode ser canalizada de forma produtiva e onde ambientes de trabalho oferecem suporte ou estrutura para lidar com a intensidade emocional.`,

  conscienciosidade: `Conscienciosidade é um traço de personalidade que reflete o grau de organização, disciplina e responsabilidade de uma pessoa. Indivíduos com alta pontuação nesse traço são planejados, confiáveis e focados, o que frequentemente leva ao sucesso acadêmico, profissional e à manutenção de hábitos saudáveis. Em contrapartida, a baixa conscienciosidade pode se manifestar como impulsividade e desorganização, mas permite maior adaptabilidade, sendo o ponto ideal o reconhecimento e ajuste desse traço aos desafios da vida. Pessoas com alta conscienciosidade geralmente se destacam em profissões que exigem organização, disciplina, atenção a detalhes e cumprimento de prazos, como contadores, engenheiros, médicos, gerentes de projetos, programadores, pesquisadores, analistas de dados e bibliotecários.`,

  extroversao: `Extroversão é o traço de personalidade que define o grau de sociabilidade e busca por estímulos externos, caracterizando indivíduos comunicativos, otimistas e assertivos que se energizam na interação social, buscam recompensas e novidades, e se sentem confortáveis em destaque, sendo profissões como vendas, marketing, relações públicas, ensino, recursos humanos e eventos ideais para eles. Em contrapartida, pessoas introvertidas, com baixa pontuação, preferem interações reservadas e reflexivas, necessitando de solitude para recarregar as energias, mas ambas as naturezas são igualmente valiosas e complementares no mundo.`,

  agradabilidade: `Agradabilidade é o traço de personalidade que mede o quão empática, cooperativa e confiável uma pessoa é, com indivíduos de alta pontuação sendo gentis, generosos e promotores de harmonia, inspirando confiança e evitando conflitos, o que os torna ideais para profissões que exigem colaboração e cuidado interpessoal, como psicólogos, assistentes sociais, professores, enfermeiros, profissionais de recursos humanos, mediadores de conflitos e atendimento ao cliente. Em contraste, uma baixa agradabilidade pode indicar ceticismo ou uma postura mais crítica e assertiva, priorizando a lógica sobre a empatia.`,

  abertura: `Abertura é o traço que indica a disposição de uma pessoa para explorar ideias, sensações, arte e inovação, caracterizando indivíduos curiosos, criativos e receptivos ao novo, que apreciam aprender e pensar de forma abstrata. Essa característica os torna ideais para profissões que exigem criatividade e pensamento crítico, como artistas, designers, escritores, pesquisadores, cientistas, inovadores tecnológicos, arquitetos e consultores estratégicos. Em contraste, pessoas com baixa abertura preferem estabilidade e tradição, valorizando ambientes previsíveis e estruturados.`

  };

  // Verifica se todos os traços estão próximos de 50%
  const todosProximosDe50 = Object.values(resultado).every(valor =>
    Math.abs(valor - 50) < 2 // tolerância de ±3%
  );

  // Traços mais altos, ordenados (usado apenas se houver perfil dominante)
  const maioresDoisTracos = Object.entries(resultado)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 2);

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
      {todosProximosDe50 ? (
        <div className='mensagem-refazer' style={{ marginTop: '2em', textAlign: 'center' }}>
          <h3><strong>Não foi possível identificar um perfil dominante.</strong></h3>
          <ul>Tente refazer o teste respondendo com mais clareza ou sinceridade.</ul>
        </div>
      ) : (
        <>
          <h3 className='titulo-traco-dominante' style={{ marginTop: '1.5em' }}>
            Traços de personalidade mais predominantes:
          </h3>
          <ul>
            {maioresDoisTracos.map(([traco, valor]) => (
              <li key={traco}>
                <strong>{traco.charAt(0).toUpperCase() + traco.slice(1)} ({valor.toFixed(2)}%):</strong> {explicacoes[traco]}
              </li>
            ))}
          </ul>
        </>
      )}

      <div className='botoes-sobre-refazer'>
        {/* Botões para refazer o teste ou aprender mais sobre a teoria */}
        <button className='buttons' onClick={refazerTeste}>REFAZER TESTE</button>
        <button className='buttons' onClick={() => navigate('/traços')}>SABER MAIS SOBRE A TEORIA</button>
      </div>
    </div>
  );
}

export default ResultScreen;


