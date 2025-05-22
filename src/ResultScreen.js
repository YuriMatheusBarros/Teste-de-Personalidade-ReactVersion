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

  neuroticismo: `É o traço que reflete a sensibilidade emocional de uma pessoa e sua predisposição a vivenciar sentimentos negativos. Pessoas com alta pontuação tendem a experimentar emoções como ansiedade, irritação, insegurança, culpa e tristeza com mais frequência e intensidade. São geralmente mais afetadas por situações de estresse e podem reagir exageradamente a eventos cotidianos, interpretando-os de forma mais ameaçadora ou pessimista.
    
  Em contextos sociais, essa hipersensibilidade pode gerar uma preocupação constante com julgamentos alheios ou um medo de rejeição, mesmo quando não há sinais objetivos de ameaça. Além disso, podem enfrentar mais dificuldades para "desligar a mente" ou se recuperar emocionalmente após contratempos.

  Por outro lado, pessoas com baixa pontuação nesse traço demonstram maior resiliência emocional. São mais calmas, confiantes e menos propensas a reações exageradas diante de imprevistos. Isso não significa ausência de emoção, mas sim uma maior capacidade de lidar com elas sem se deixar dominar.

  Vale destacar que o neuroticismo não é um defeito. Ele pode funcionar como uma espécie de radar emocional, ajudando a identificar riscos e refletir profundamente sobre decisões. Entretanto, quando excessivo, pode prejudicar a saúde mental e aumentar a vulnerabilidade a transtornos emocionais.

  Compreender o próprio nível de neuroticismo é um passo essencial para o desenvolvimento de estratégias emocionais mais saudáveis, como o uso de técnicas de regulação emocional, meditação ou psicoterapia.`,

  conscienciosidade: `Está relacionada ao grau de organização, disciplina, responsabilidade e persistência de uma pessoa. Indivíduos com alta pontuação nesse traço tendem a ser planejados, confiáveis, metódicos e determinados. Eles se preocupam com prazos, metas e padrões elevados de desempenho, sendo geralmente vistos como trabalhadores consistentes e focados.

  Esse traço está fortemente associado ao sucesso acadêmico e profissional, pois quem pontua alto tende a ser mais capaz de adiar recompensas imediatas em favor de objetivos de longo prazo. Também é um preditor relevante de saúde física, já que essas pessoas são mais propensas a manter hábitos saudáveis e evitar comportamentos de risco.

  Em contrapartida, indivíduos com baixa conscienciosidade podem demonstrar impulsividade, procrastinação e desorganização. Preferem rotinas flexíveis, improvisações e podem ter dificuldades em manter compromissos ou seguir normas rígidas.

  Nenhum dos extremos é intrinsecamente bom ou ruim: enquanto a alta conscienciosidade favorece estabilidade e previsibilidade, a baixa pode permitir maior adaptabilidade e criatividade em contextos menos estruturados. A chave está em reconhecer como esse traço se manifesta na sua vida e ajustar hábitos conforme os desafios pessoais e profissionais.`,

  extroversao: `É o traço que expressa o grau de sociabilidade, energia social e busca por estímulos externos. Pessoas extrovertidas são naturalmente comunicativas, otimistas, assertivas e sentem-se revigoradas ao interagir com outras pessoas. Costumam gostar de ambientes agitados, têm facilidade para fazer novas amizades e se sentem confortáveis em situações de destaque.

  Além disso, a extroversão está relacionada a um maior nível de dopamina no cérebro, o que contribui para uma maior busca por recompensas e novidades. Indivíduos extrovertidos tendem a viver o presente com entusiasmo e se engajam com mais facilidade em atividades em grupo ou públicas.

  Já pessoas com baixa pontuação, chamadas de introvertidas, preferem interações mais reservadas, profundas e reflexivas. São mais seletivas em suas conexões sociais e podem se sentir drenadas após longos períodos de exposição social, necessitando de momentos de solitude para recarregar a energia.

  Importante: extroversão e introversão não definem o valor de uma pessoa, apenas indicam como ela recarrega suas energias e se relaciona com o mundo ao redor. Ambas têm forças distintas e complementares — introvertidos podem ser excelentes ouvintes e analistas profundos, enquanto extrovertidos brilham em ambientes colaborativos e dinâmicos.`,

  agradabilidade: `Representa o quanto uma pessoa é empática, cooperativa, confiável e disposta a considerar os sentimentos e necessidades dos outros. Indivíduos com alta agradabilidade são gentis, generosos, pacientes e têm uma tendência natural para promover harmonia nos relacionamentos. Valorizam a empatia, o altruísmo e a sensibilidade interpessoal.

  São pessoas que inspiram confiança e costumam evitar conflitos desnecessários, sendo vistas como diplomáticas e conciliadoras. Em ambientes de equipe, tornam-se pontes importantes entre diferentes pontos de vista.

  Já uma baixa pontuação pode indicar traços de ceticismo, competitividade, sarcasmo ou uma postura mais crítica e assertiva. Essas pessoas podem priorizar a lógica sobre a empatia e preferir ambientes onde a franqueza e a autonomia são valorizadas mais do que a cordialidade.

  A agradabilidade não é sinônimo de submissão. Altos níveis desse traço precisam ser equilibrados com assertividade, para evitar o excesso de concessões ou o medo de desagradar. Reconhecer esse traço ajuda na construção de relacionamentos mais saudáveis e autênticos.`,

  abertura: `É o traço que expressa a disposição de uma pessoa para explorar ideias, sensações, arte, inovação e diferentes formas de pensar. Indivíduos altamente abertos são curiosos, criativos, imaginativos e receptivos ao novo. Têm gosto por aprender, experimentar e explorar temas filosóficos, culturais ou artísticos.

  Essa abertura mental permite pensar de forma mais abstrata, tolerar ambiguidade e ter empatia por perspectivas diversas. Muitas vezes, essas pessoas se destacam em áreas que exigem pensamento crítico, inovação ou sensibilidade estética.

  Por outro lado, pessoas com baixa abertura preferem estabilidade, familiaridade e práticas comprovadas. Valorizam tradição, ordem e clareza, sendo mais pragmáticas e realistas. Não significa falta de inteligência ou cultura, mas sim uma inclinação por ambientes previsíveis e estruturados.

  A abertura influencia profundamente como lidamos com mudanças, diferenças culturais, criatividade e aprendizado. Ter consciência desse traço pode ajudar na escolha de ambientes, carreiras e atividades que estejam em sintonia com seu estilo mental.`

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
        {maioresPontuacoes.map((fator, index) => (
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


