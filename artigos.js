const params = new URLSearchParams(window.location.search);
    const iden = params.get('id');

    const artigo = {
      ia: {
        titulo: 'O que é Inteligência Artificial?',
        paragrafo: `<img src="https://telesintese.com.br/wp-content/uploads/2023/04/Inteligencia-Artificial-IA-AI-freepik-2023.jpg" alt=""><br>
          <p>​A Inteligência Artificial (IA) refere-se à capacidade de máquinas e sistemas computacionais de simular processos de inteligência humana, como aprendizado, raciocínio, resolução de problemas, percepção e compreensão de linguagem. Essencialmente, a IA permite que dispositivos tecnológicos executem tarefas que tradicionalmente requerem a intervenção humana, operando de maneira autônoma e adaptativa.​<br>
A IA funciona por meio da coleta e análise de grandes volumes de dados, identificando padrões e realizando previsões ou decisões com base nessas informações. Algumas das principais técnicas utilizadas incluem o aprendizado de máquina (machine learning), onde algoritmos são treinados para melhorar seu desempenho em tarefas específicas, e o aprendizado profundo (deep learning), que utiliza redes neurais artificiais para processar dados complexos.<br>
            As aplicações da IA são vastas e abrangem diversos setores, incluindo:
            <ul>
              <li>Assistentes virtuais: como Siri, Alexa e Google Assistant, que interagem com os usuários por meio de comandos de voz.​</li>
              <li>Sistemas de recomendação: presentes em plataformas como Netflix e Spotify, que sugerem conteúdos com base nas preferências do usuário.</li>
              <li>Diagnósticos médicos: ferramentas que auxiliam profissionais de saúde na identificação de doenças e proposição de tratamentos.</li>
              <li>Análise financeira: sistemas que preveem tendências de mercado e auxiliam na tomada de decisões de investimento.</li>
              </ul><br>Em resumo, a Inteligência Artificial é uma área da tecnologia que busca desenvolver sistemas capazes de realizar tarefas que, até então, dependiam exclusivamente da inteligência humana, promovendo eficiência e inovação em diversos campos.<br>

          <p>Continue lendo: <a href="artigo.html?id=machine">Descubra o que é Machine Learning e Deep Learning, e suas diferenças</a></p>
        `
      },

      machine: {
        titulo: 'Machine Learning e Deep Learning',
        paragrafo: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKQyDhCLxdjFGIkZ7Hc9--edFdvQ6w8IFiw&s" alt=""><br>
          <h2>O que é Machine Learning</h2>
          <p>Machine Learning (aprendizado de máquina) e Deep Learning (aprendizado profundo) são subcampos da inteligência artificial (IA) que permitem que sistemas aprendam a partir de dados e tomem decisões com o mínimo de intervenção humana.</p>

          <p>Machine Learning refere-se ao uso de algoritmos que analisam dados, aprendem com eles e fazem previsões ou decisões informadas. Em vez de serem programados explicitamente para realizar uma tarefa, os sistemas de Machine Learning são treinados com grandes volumes de dados, permitindo-lhes identificar padrões e melhorar seu desempenho ao longo do tempo. Aplicações comuns incluem sistemas de recomendação, detecção de fraudes e reconhecimento de padrões.</p>

          <h3>Como funciona o Machine Learning</h3>
          <p>O Machine Learning utiliza algoritmos que permitem aos computadores identificar padrões em grandes volumes de dados e elaborar previsões ou tomar decisões com base nesses padrões. O processo geralmente envolve alimentar o algoritmo com um conjunto de dados de treinamento, permitindo que ele ajuste seus parâmetros internos para melhorar a precisão de suas previsões ou decisões.</p>

          <ol>
            <li><strong> Aprendizado Supervisionado:</strong> Neste tipo, o algoritmo é treinado com dados rotulados, ou seja, entradas associadas a saídas conhecidas. O objetivo é que o modelo aprenda a mapear novas entradas para as saídas corretas. Exemplos incluem classificação (como identificar e-mails como spam ou não) e regressão (como prever preços de imóveis com base em características).</li>
            <li><strong> Aprendizado Não Supervisionado:</strong> Aqui, o algoritmo trabalha com dados não rotulados e busca identificar padrões ou estruturas ocultas nos dados. Técnicas comuns incluem agrupamento (clustering), onde o modelo agrupa dados semelhantes, e redução de dimensionalidade, que simplifica conjuntos de dados complexos.</li>
            <li><strong> Aprendizado por Reforço:</strong> Baseia-se em um agente que aprende a tomar decisões através de tentativa e erro, recebendo recompensas ou penalidades com base em suas ações. É frequentemente utilizado em robótica e jogos, onde o agente busca maximizar sua recompensa ao longo do tempo.</li>
          </ol>

          <h2>O que é Deep Learning</h2>
          <p>Deep Learning é uma subárea do Machine Learning que utiliza redes neurais artificiais com múltiplas camadas (daí o termo "profundo") para processar e aprender com grandes volumes de dados. Essas redes são inspiradas na estrutura do cérebro humano e são capazes de realizar tarefas complexas, como reconhecimento de voz, processamento de linguagem natural e reconhecimento de imagens. Aplicações comuns incluem sistemas de reconhecimento de voz, detecção de anomalias e reconhecimento de padrões em imagens.</p>

          <h3>Como funciona o Deep Learning</h3>
          <p>O Deep Learning utiliza redes neurais artificiais profundas para processar e aprender com grandes volumes de dados. Essas redes são compostas por múltiplas camadas de neurônios artificiais que permitem a modelagem de representações complexas dos dados. Cada camada processa as informações recebidas e passa o resultado para a próxima camada, permitindo que a rede aprenda características de alto nível dos dados.</p>

          <p>Principais tipos de redes de Deep Learning:</p>
          <ol>
            <li><strong> Redes Neurais Convolucionais (CNNs):</strong> Especializadas em processar dados com formato de grade, como imagens. Elas utilizam operações de convolução para detectar automaticamente padrões locais, como bordas e texturas, sendo amplamente aplicadas em reconhecimento de imagens e visão computacional.</li>
            <li><strong> Redes Neurais Recorrentes (RNNs):</strong> Projetadas para processar dados sequenciais, como séries temporais ou linguagem natural. Elas possuem conexões recorrentes que permitem manter uma memória interna, capturando dependências temporais nos dados. São utilizadas em aplicações como tradução automática e reconhecimento de fala.</li>
            <li><strong> Redes Neurais de Memória de Longo Curto Prazo (LSTM):</strong> Um tipo especial de RNN que aborda o problema de dependências de longo prazo em dados sequenciais. Elas conseguem aprender e lembrar informações por longos períodos, sendo eficazes em tarefas como modelagem de linguagem e previsão de séries temporais.</li>
            <li><strong> Redes Adversariais Generativas (GANs):</strong> Consistem em duas redes neurais que competem entre si: uma geradora, que cria dados falsos, e uma discriminadora, que tenta distinguir entre dados reais e falsos. Esse processo permite a geração de dados realistas, sendo utilizadas em criação de imagens, vídeos e até na geração de dados sintéticos para treinamento de outros modelos.</li>
          </ol>
        `
      },

      educaia:{
        titulo:'Impacto da i.a na educação',
        paragrafo: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmL_nXiRWrh6sVA3cp8pbgjkqjv-jQUlntQ&s" alt=""><br>
        <p>A Inteligência Artificial (IA) tem transformado diversos setores, e a educação é um dos campos onde seu impacto é particularmente significativo. A implementação da IA no ambiente educacional oferece uma série de benefícios, mas também apresenta desafios que merecem atenção.</p></br>
        <h2>Benefícios da Inteligência Artificial na Educação</h2>
        <ol>
          <li><strong>Personalização do Ensino:</strong> A IA permite adaptar o conteúdo educacional às necessidades individuais de cada aluno, analisando seu desempenho e ajustando materiais e atividades conforme seu ritmo e estilo de aprendizagem. Isso resulta em um aprendizado mais eficaz e engajador.</li>
          <li><strong>Acesso Ampliado a Recursos Educacionais: </strong>Ferramentas baseadas em IA expandem o acesso a materiais de alta qualidade, possibilitando que estudantes de diferentes regiões e contextos socioeconômicos tenham oportunidades educacionais mais equitativas.</li>
          <li><strong>Automação de Tarefas Administrativas:</strong> A IA pode automatizar atividades como correção de provas e gestão de registros acadêmicos, liberando os educadores para se concentrarem mais no ensino e na interação com os alunos. ​</li>
          <li><strong>Detecção Precoce de Dificuldades de Aprendizado:</strong> Sistemas inteligentes podem identificar sinais de dificuldades acadêmicas nos alunos, permitindo intervenções rápidas e eficazes para evitar a evasão escolar.</li>
          <li><strong>Criação de Aulas Imersivas: </strong>A combinação de IA com tecnologias como realidade virtual possibilita experiências educacionais mais envolventes, permitindo que os alunos explorem conceitos de maneira prática e interativa.</li>
          </ol>`
      },
      logica: {
  titulo: 'O Que é Lógica de Programação?',
  paragrafo: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3o-c_QQ6K_vxjcFBKQBL1aEsDPBO39F1nA&s" alt=""><br>
    <p>A lógica de programação é a base fundamental para o desenvolvimento de qualquer software ou sistema computacional. Ela consiste na capacidade de organizar e estruturar instruções de forma coerente e eficiente para que um computador execute tarefas específicas.</p><br>

    <h2>Entendendo a Lógica de Programação</h2>
    <p>A lógica de programação não depende de uma linguagem específica — ela está presente em todas, seja Python, JavaScript, C ou Java. Seu objetivo é criar um <strong>raciocínio lógico</strong> capaz de resolver problemas utilizando uma <strong>sequência de passos</strong>, chamada de algoritmo.</p><br>
        
    <p>Por exemplo, se quisermos criar um programa que diga se uma pessoa pode votar, o algoritmo poderia ser:</p>
    <ul>
      <li>1. Receber a idade da pessoa;</li>
      <li>2. Verificar se a idade é maior ou igual a 16;</li>
      <li>3. Se sim, exibir "Pode votar";</li>
      <li>4. Caso contrário, exibir "Não pode votar".</li>
    </ul><br>

    <h2>Conceitos Fundamentais</h2>
    <ol>
      <li><strong>Sequência:</strong> Instruções executadas uma após a outra, na ordem em que foram escritas.</li>
      <li><strong>Decisão (condicional):</strong> Permite ao programa tomar decisões, como usar <code>if/else</code> para diferentes caminhos.</li>
      <li><strong>Repetição (laços):</strong> Executa blocos de código várias vezes com estruturas como <code>for</code> e <code>while</code>.</li>
      <li><strong>Variáveis:</strong> Espaços na memória onde armazenamos dados (como números, textos, booleanos).</li>
      <li><strong>Operadores:</strong> Símbolos que realizam operações matemáticas, comparativas ou lógicas (<code>+ - * / == &&</code>, etc).</li>
    </ol><br>

    <h2>Importância da Lógica de Programação</h2>
    <p>Dominar a lógica é essencial para:</p>
    <ul>
      <li>Resolver problemas de forma eficiente;</li>
      <li>Escrever códigos limpos, legíveis e reutilizáveis;</li>
      <li>Facilitar o aprendizado de qualquer linguagem de programação;</li>
      <li>Desenvolver o pensamento computacional e a capacidade de abstração.</li>
    </ul><br>

    <h2>Exemplo Prático (Pseudo-código)</h2>
    <p>Imagine um caixa eletrônico que precisa liberar dinheiro se o usuário tiver saldo suficiente:</p>
    <pre>
      INÍCIO
      Solicitar valor desejado
      Verificar saldo
      SE saldo >= valor desejado ENTÃO
          Liberar dinheiro
          Atualizar saldo
      SENÃO
          Exibir "Saldo insuficiente"
      FIM
    </pre><br>

    <h2>Conclusão</h2>
    <p>Lógica de programação é mais do que saber "programar": é desenvolver o raciocínio necessário para <strong>pensar como um programador</strong>, o que significa decompor problemas complexos em soluções simples, passo a passo.</p><br>

    <p>Ao dominar essa habilidade, você estará preparado para construir algoritmos eficientes, entender melhor qualquer linguagem de programação e evoluir como desenvolvedor.</p><br>

    <p>Continue aprendendo: <a href="artigo.html?id=algoritmos">Veja o que são Algoritmos e como criá-los</a></p>
  `
},

algoritimos: {
  titulo: 'O Que é Algoritmos?',
  paragrafo: `<img src="https://acadtec.com.br/storage/posts/pictures/xvJ3NLSKUF4wMqwHrZTe582480234f6a8.jpg" alt=""><br>
  <p>Algoritmos são conjuntos de instruções bem definidas e ordenadas que servem para resolver um problema específico ou realizar uma tarefa. Eles funcionam como receitas de bolo, onde cada passo precisa ser seguido corretamente para se alcançar o resultado esperado. Um algoritmo pode ser usado tanto em problemas simples do dia a dia quanto em sistemas complexos de computadores, e está presente em quase tudo que envolve tecnologia.<br></p>
  <h2>Como criar algoritimos</h2>
  <p>Para criar um algoritmos, é necessário entender qual problema queremos que seja claramente resolvido e planejar as etapas que serao necessarias para resolver esse problema. Em seguida, escrever o algoritmo em uma linguagem de programação, como Python, Java ou C.<br></p>
     <ol>
        <li><strong>Entendimento do Problema:</strong> Antes de tudo, é essencial entender completamente o problema. Pergunte-se: o que o problema pede? Quais são os dados de entrada e saída?</li><br>
        <li><strong>Planejamento das Etapas:</strong> Após entender o problema, divida-o em etapas menores e mais simples. Pense nas ações que devem ser tomadas, uma por vez, para chegar ao resultado final.</li><br>
        <li><strong>Escolha da Representação:</strong> Você pode representar seu algoritmo de várias maneiras, como fluxogramas, pseudocódigo ou até mesmo diretamente com código de uma linguagem de programação.</li><br>
        <li><strong>Implementação:</strong> Uma vez que você tem o algoritmo planejado, é hora de implementá-lo. Isso significa traduzir os passos planejados para uma linguagem de programação que o computador possa entender, como JavaScript, Python, ou C++.</li><br>
        <li><strong>Testes e Validação:</strong> Teste seu algoritmo com diferentes entradas para garantir que ele funcione corretamente e atenda às expectativas.</li><br>
      </ol>

      <h3>Exemplo Prático de Algoritmo</h3>
      <p>Vamos ver um exemplo simples: um algoritmo para calcular a média de três notas.</p><br>

      <pre>
        1. Receber as notas do aluno (nota1, nota2, nota3).
        2. Calcular a média: média = (nota1 + nota2 + nota3) / 3.
        3. Exibir o resultado da média.
        4. Verificar se a média é maior ou igual a 7:
          - Se for, exibir "Aluno aprovado".
          - Se não, exibir "Aluno reprovado".
      </pre><br>

      <p>Este é um algoritmo simples, mas ilustra a ideia de sequência de passos lógicos que devem ser seguidos para resolver o problema de calcular a média de notas.</p><br>

      <h2>Tipos de Algoritmos</h2>
      <p>Algoritmos podem ser classificados de várias formas, por exemplo:</p><br>
      <ul>
        <li><strong>Algoritmos de Busca:</strong> São algoritmos usados para encontrar um elemento específico dentro de uma coleção de dados, como a busca binária.</li><br>
        <li><strong>Algoritmos de Ordenação:</strong> São usados para organizar uma coleção de dados em uma ordem específica, como a ordenação por bolha (Bubble Sort) ou quicksort.</li><br>
        <li><strong>Algoritmos Recursivos:</strong> São algoritmos que chamam a si mesmos para resolver um problema, como o cálculo de fatorial.</li><br>
        <li><strong>Algoritmos Gulosos:</strong> São algoritmos que fazem escolhas locais ótimas em cada etapa, esperando que essas escolhas levem a uma solução ótima global.</li><br>
      </ul><br>

      <p>Em resumo, algoritmos são fundamentais para o desenvolvimento de sistemas computacionais e para a solução de problemas de forma eficiente. Com a prática, você será capaz de criar e otimizar algoritmos para uma variedade de situações.</p><br>

    `
},
  linguagem:{
    titulo: `As 10 melhores linguagens de programação para iniciantes`,
    paragrafo:  `<img src="https://programathor.com.br/blog/wp-content/uploads/2023/08/Capa-Artigo-Template-13.png" alt="">
    <p>Escolher a linguagem de programação certa no início da jornada pode fazer toda a diferença na forma como você aprende e se desenvolve como programador. Algumas linguagens são mais intuitivas, possuem grande comunidade de apoio e recursos educacionais acessíveis, o que facilita o aprendizado. Aqui estão as 10 melhores linguagens para iniciantes:</p><br>

<ol style="list-style: none;">
  <li><strong>1. Python</strong><br>
  Python é frequentemente considerada a linguagem mais amigável para iniciantes devido à sua sintaxe limpa e legível, que se assemelha ao inglês. É amplamente utilizada em diversas áreas, como desenvolvimento web, ciência de dados, inteligência artificial e automação. Sua comunidade ativa oferece vasto suporte e recursos para aprendizado. <a href="https://programathor.com.br/blog/10_melhores_linguagens_de_programacao_para_iniciantes/">Fonte</a></li><br>

  <li><strong>2. JavaScript</strong><br>
  JavaScript é essencial para o desenvolvimento web, permitindo criar interações dinâmicas em sites e aplicações. Com o Node.js, seu uso se estende ao back-end, tornando-a uma linguagem versátil. É uma das linguagens mais populares e possui uma vasta comunidade de desenvolvedores. <a href="https://programathor.com.br/blog/10_melhores_linguagens_de_programacao_para_iniciantes/">Fonte</a></li><br>

  <li><strong>3. Java</strong><br>
  Java é uma linguagem versátil e amplamente adotada, utilizada em aplicações corporativas, desenvolvimento Android e sistemas embarcados. Embora sua sintaxe seja mais complexa, aprender Java proporciona uma sólida compreensão de conceitos de programação orientada a objetos. <a href="https://programathor.com.br/blog/10_melhores_linguagens_de_programacao_para_iniciantes/">Fonte</a></li><br>

  <li><strong>4. C#</strong><br>
  Desenvolvida pela Microsoft, C# é amplamente utilizada no desenvolvimento de aplicações para Windows e jogos com a plataforma Unity. Sua sintaxe é semelhante à do Java, e é uma ótima escolha para quem deseja ingressar no desenvolvimento de software e jogos. <a href="https://programathor.com.br/blog/10_melhores_linguagens_de_programacao_para_iniciantes/">Fonte</a></li><br>

  <li><strong>5. Ruby</strong><br>
  Ruby é conhecida por sua sintaxe simples e elegante, tornando-a acessível para iniciantes. É frequentemente utilizada com o framework Ruby on Rails para desenvolvimento web. A comunidade Ruby é acolhedora e oferece muitos recursos para aprendizado. <a href="https://programathor.com.br/blog/10_melhores_linguagens_de_programacao_para_iniciantes/">Fonte</a></li><br>

  <li><strong>6. PHP</strong><br>
  PHP é amplamente utilizado no desenvolvimento web, especialmente em sites dinâmicos e sistemas de gerenciamento de conteúdo como WordPress. Apesar de críticas, continua sendo uma escolha sólida para iniciantes devido à sua simplicidade e ampla documentação. <a href="https://programathor.com.br/blog/10_melhores_linguagens_de_programacao_para_iniciantes/">Fonte</a></li><br>

  <li><strong>7. Swift</strong><br>
  Desenvolvida pela Apple, Swift é a principal linguagem para desenvolvimento de aplicativos iOS e macOS. Sua sintaxe moderna e segura a torna uma excelente escolha para iniciantes interessados no ecossistema da Apple. <a href="https://programathor.com.br/blog/10_melhores_linguagens_de_programacao_para_iniciantes/">Fonte</a></li><br>

  <li><strong>8. TypeScript</strong><br>
  TypeScript é um superset do JavaScript que adiciona tipagem estática, ajudando a detectar erros durante o desenvolvimento. É ideal para iniciantes que já possuem conhecimento em JavaScript e desejam escrever código mais robusto. <a href="https://programathor.com.br/blog/10_melhores_linguagens_de_programacao_para_iniciantes/">Fonte</a></li><br>

  <li><strong>9. Go (Golang)</strong><br>
  Criada pelo Google, Go é conhecida por sua simplicidade e desempenho. É utilizada em sistemas distribuídos, redes e serviços em nuvem. Sua sintaxe clara e eficiente a torna uma boa opção para iniciantes interessados em sistemas de alto desempenho. <a href="https://www.ironhack.com/pt/blog/as-10-melhores-linguagens-de-programacao-para-aprender">Fonte</a></li><br>

  <li><strong>10. C</strong><br>
  C é uma linguagem de baixo nível que oferece uma compreensão profunda do funcionamento interno dos computadores. Embora mais desafiadora, aprender C proporciona uma base sólida em conceitos fundamentais de programação. <a href="https://programathor.com.br/blog/10_melhores_linguagens_de_programacao_para_iniciantes/">Fonte</a></li><br>
</ol>

<p>Ao escolher uma linguagem para começar, o mais importante é entender seus objetivos. Se quiser trabalhar com web, comece com HTML, CSS e JavaScript. Se pretende explorar automação, dados ou IA, vá de Python. Cada linguagem tem seu espaço e importância no mundo da programação.</p><br>

<p>Continue lendo: <a href="artigo.html?id=logica">Entenda por que a lógica de programação é mais importante do que a linguagem</a></p>
`
  },

  nuvemsoft:{
    titulo: `Softawares baseados em nuvem`,
    paragrafo: `  <p>Softwares baseados em nuvem são programas que funcionam <strong>diretamente pela internet</strong>, sem a necessidade de instalação no computador. Em vez de rodarem localmente, eles ficam hospedados em servidores online e são acessados através de navegadores ou aplicativos conectados à internet.</p></br>

  <p>Esses softwares fazem parte da chamada <strong>computação em nuvem</strong>, que permite armazenar, processar e acessar dados de forma remota, de qualquer dispositivo.</p></br>
    <img src="https://media.licdn.com/dms/image/v2/C4D0DAQFKhmX-jQRFiw/learning-public-crop_288_512/learning-public-crop_288_512/0/1614239067606?e=2147483647&v=beta&t=XX-B5bSnTWGFm2LmyhS6f-PQYhpyqQzhWol2QIAvKKQ" alt="Exemplos de Softwares Baseados em Nuvem">
  <h2>Exemplos de Softwares Baseados em Nuvem</h2>
  <ul>
    <li><strong>Google Docs:</strong> Editor de texto colaborativo, com salvamento automático e acesso simultâneo.</li>
    <li><strong>Figma:</strong> Ferramenta de design voltada para a criação de interfaces (UI/UX), usada de forma colaborativa.</li>
    <li><strong>Canva:</strong> Editor gráfico simples e online, ótimo para criar posts, cartazes, apresentações e muito mais.</li>
    <li><strong>Microsoft 365 Online:</strong> Versões online dos programas clássicos da Microsoft (Word, Excel, PowerPoint).</li>
    <li><strong>Google Drive / Dropbox / OneDrive:</strong> Softwares de armazenamento e compartilhamento de arquivos na nuvem.</li>
  </ul></br>

  <h2>Vantagens dos Softwares em Nuvem</h2>
  <ol>
    <li><strong>Acesso de qualquer lugar:</strong> Você pode continuar o trabalho de onde parou, usando qualquer dispositivo com internet.</li>
    <li><strong>Colaboração em tempo real:</strong> Várias pessoas podem editar o mesmo documento ao mesmo tempo.</li>
    <li><strong>Salvamento automático:</strong> A maioria salva tudo automaticamente — adeus, "Ctrl+S" toda hora!</li>
    <li><strong>Menos uso de armazenamento local:</strong> Os arquivos ficam na nuvem, liberando espaço no seu dispositivo.</li>
    <li><strong>Atualizações automáticas:</strong> Os softwares são atualizados pelos desenvolvedores sem você precisar se preocupar.</li>
  </ol></br>

  <h2>Desvantagens dos Softwares em Nuvem</h2>
  <ol>
    <li><strong>Dependência da internet:</strong> Sem conexão, muitos recursos se tornam inacessíveis.</li>
    <li><strong>Privacidade e segurança:</strong> Os dados ficam armazenados em servidores de terceiros — é preciso confiar na empresa.</li>
    <li><strong>Limitações offline:</strong> Alguns softwares têm versões offline, mas com recursos reduzidos.</li>
    <li><strong>Planos pagos:</strong> Muitos softwares gratuitos têm limitações e cobram por funcionalidades avançadas.</li>
  </ol></br>

  <h2>Conclusão</h2>
  <p>Softwares baseados em nuvem se tornaram parte essencial da vida moderna. Eles oferecem <strong>praticidade, colaboração e flexibilidade</strong>, mas também exigem atenção à <strong>segurança e dependência da internet</strong>. Com um bom uso, esses softwares podem facilitar muito a rotina de estudos, trabalho e organização pessoal.</p></br>`
  },
  produtividade: {
    titulo: 'Softwares de Produtividade: Organize sua Vida com Tecnologia',
    paragrafo: `
    <p>Os softwares de produtividade são ferramentas criadas para ajudar no <strong>gerenciamento de tempo, tarefas e organização pessoal ou profissional</strong>. Eles se tornaram essenciais para otimizar o dia a dia, aumentar o foco e melhorar o desempenho tanto no trabalho quanto nos estudos.</p></br>
  
    <p>Esses softwares estão disponíveis em versões para desktop, dispositivos móveis e também baseados na nuvem, facilitando o acesso em qualquer lugar.</p></br>
    <img src="https://www.timeweb.com.br/wp-content/uploads/2020/06/aplicativo-de-produtividade-1.jpg" alt="Softwares de Produtividade"></br>
  
    <h2>Exemplos Populares de Softwares de Produtividade</h2>
    <ul>
      <li><strong>Notion:</strong> Plataforma tudo-em-um para anotações, planejamento, banco de dados e organização pessoal ou em equipe.</li>
      <li><strong>Trello:</strong> Aplicativo baseado em quadros para organizar tarefas e projetos com o método Kanban.</li>
      <li><strong>Todoist:</strong> Gerenciador de listas de tarefas simples e eficiente, com prazos, categorias e etiquetas.</li>
      <li><strong>Google Agenda:</strong> Agenda digital sincronizada com notificações e integração com outros serviços Google.</li>
      <li><strong>Evernote:</strong> Aplicativo de anotações, organização e arquivamento, ideal para estudos e ideias rápidas.</li>
    </ul></br>
  
    <h2>Vantagens dos Softwares de Produtividade</h2>
    <ol>
      <li><strong>Melhor organização:</strong> Permitem visualizar tarefas e compromissos de forma clara e objetiva.</li>
      <li><strong>Aumento da produtividade:</strong> Ajuda a manter o foco e evita o desperdício de tempo com distrações.</li>
      <li><strong>Controle de prazos:</strong> Alertas e lembretes evitam esquecimentos e melhoram o planejamento.</li>
      <li><strong>Integração com outros apps:</strong> Muitos se conectam com ferramentas como e-mail, calendário e armazenamento na nuvem.</li>
      <li><strong>Facilidade de uso:</strong> A maioria tem interfaces intuitivas e adaptáveis ao estilo do usuário.</li>
    </ol></br>
  
    <h2>Desvantagens dos Softwares de Produtividade</h2>
    <ol>
      <li><strong>Dependência da ferramenta:</strong> Algumas pessoas passam mais tempo organizando do que executando.</li>
      <li><strong>Excesso de recursos:</strong> Alguns apps são complexos e podem dificultar o uso para iniciantes.</li>
      <li><strong>Planos pagos:</strong> Recursos mais avançados geralmente estão disponíveis apenas na versão premium.</li>
      <li><strong>Sincronização falha:</strong> Em alguns casos, a sincronização entre dispositivos pode apresentar problemas.</li>
    </ol></br>
  
    <h2>Conclusão</h2>
    <p>Os softwares de produtividade são aliados valiosos na busca por uma rotina mais organizada e eficiente. Ao escolher a ferramenta certa para seu perfil, você pode transformar sua forma de estudar, trabalhar e planejar seu dia. A chave é usar com equilíbrio: produtividade não é fazer tudo, mas fazer o que importa.</p></br>
  
    <p><strong>Próximo tema:</strong> <a href="#opensource">Softwares de código aberto: liberdade e colaboração</a></p>
    `
  }
  
      
    };

    const artigoSelecionado = artigo[iden];

    if (artigoSelecionado) {
      document.getElementById('titulo').textContent = artigoSelecionado.titulo;
      document.getElementById('paragrafo').innerHTML = artigoSelecionado.paragrafo;
    } else {
      document.getElementById('titulo').textContent = "Artigo não encontrado";
      document.getElementById('paragrafo').innerHTML = "<p>O artigo que você procura não existe ou foi removido. Verifique o link.</p>";
    }
