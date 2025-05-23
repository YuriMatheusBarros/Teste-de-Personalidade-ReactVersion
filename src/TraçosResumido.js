import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/TraçosResumido.css';

function TraçosResumido() {
  const navigate = useNavigate();

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

  const [tracoAberto, setTracoAberto] = useState(null);

  function toggleTraco(nome) {
    if (tracoAberto === nome) {
      setTracoAberto(null); // fecha se já estiver aberto
    } else {
      setTracoAberto(nome); // abre se estiver fechado
    }
  }


  // Esta função apaga os resultados e leva a pessoa de volta para o início
  const refazerTeste = () => {
    sessionStorage.clear(); // Limpamos os dados guardados do teste
    navigate('/'); // Voltamos para a página inicial
  };

  return (
    <div className="result-screen resultTotal">
      {/* Título da página */}
      <h1>Teoria big five</h1>
      {/* Explicação geral sobre os cinco traços de personalidade */}
      <p className='explicacao-geral'>A Teoria dos Cinco Grandes Fatores de Personalidade, conhecida como Big Five, é um modelo amplamente validado na psicologia que descreve a personalidade humana com base em cinco dimensões centrais: neuroticismo, conscienciosidade, extroversão, agradabilidade e abertura à experiência. Diferente de classificações rígidas, esse modelo entende os traços como escalas contínuas, reconhecendo que cada indivíduo possui uma combinação única dessas características. Desenvolvido a partir de extensas pesquisas empíricas, o Big Five oferece uma visão equilibrada e científica da personalidade, sendo aplicado em contextos como psicologia clínica, organizacional, educacional e desenvolvimento pessoal. Cada fator revela tendências consistentes de pensamento, emoção e comportamento — como a forma como lidamos com o estresse, buscamos novas experiências ou nos relacionamos com os outros. Além de sua base científica sólida, a teoria também demonstra que os traços têm origens biológicas, mas são moldados por experiências ao longo da vida, permitindo espaço para crescimento e mudança. Compreender seu perfil nos cinco traços é uma oportunidade poderosa de autoconhecimento, ajudando você a tomar decisões mais alinhadas com sua natureza, desenvolver habilidades emocionais e melhorar seus relacionamentos pessoais e profissionais:</p>

      {/* Mostramos as explicações de cada traço */}
      {Object.entries(explicacoes).map(([nome, descricao]) => (
        <div key={nome} style={{ marginBottom: '10px' }}>
          <div className='toggle'
            onClick={() => toggleTraco(nome)}
            style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {tracoAberto === nome ? (
              <i className="bi bi-chevron-down"></i>
            ) : (
              <i className="bi bi-chevron-right"></i>
            )}
            {nome.charAt(0).toUpperCase() + nome.slice(1)}
          </div>
          {tracoAberto === nome && (
            <div className='descricao' style={{ marginTop: '5px', paddingLeft: '24px' }}>
              {descricao}
            </div>
          )}
        </div>
      ))}

      <div className='botoes-sobre-refazer tracosResumidos'>
        {/* Botão para refazer o teste */}
        <button className='buttons' onClick={refazerTeste}>REFAZER TESTE</button>
        <button className='buttons' onClick={() => navigate('/resultado')}>VOLTAR PARA O RESULTADO</button>
      </div>
    </div>
  );
}

export default TraçosResumido;