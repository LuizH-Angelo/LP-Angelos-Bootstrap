1. Projeto:
Angelo's Fitness Landing Page.

2. Objetivo:
Desenvolver uma landing page institucional para a academia Angelo's Fitness, focada na apresentação da marca, conversão de novos alunos através de planos variados e coleta de dados iniciais de saúde por meio de uma ficha de anamnese digital.

3. Tecnologias Utilizadas:
HTML5 & CSS3: Base para estrutura semântica e estilização avançada (Grid, Flexbox, Variáveis CSS);

Bootstrap 5.3.8: Framework utilizado para componentes como a Navbar responsiva e o Carrossel de imagens;

JavaScript (ES6+): Lógica para manipulação do DOM, controle de estado de componentes e animações;

NPM (Node Package Manager): Gerenciamento de dependências do projeto (Bootstrap e Popper.js);

Intersection Observer API: Utilizada para implementar animações de revelação conforme o usuário rola a página;

Lenis: Biblioteca externa para implementação de smooth scroll (rolagem suave);

Google Fonts: Tipografia "Bebas Neue" para reforçar a identidade visual da marca.

4. Estrutura das Páginas/Seções:
O site é composto por uma única página organizada nas seguintes seções:

Navbar: Menu fixo com navegação por âncoras e botão de ação em destaque;

Hero Section: Cabeçalho com imagem panorâmica, chamada principal e acesso rápido ao formulário;

Modal de Anamnese: Interface interativa para cadastro de novos alunos;

Quem Somos: História da academia acompanhada de um carrossel de fotos da estrutura;

Diferenciais: Cards detalhando os serviços e galeria visual dos instrutores;

Planos: Grade comparativa de planos (Mensal, Semestral, Anual e Recorrente);

Criadores: Seção dedicada à apresentação dos desenvolvedores (Luiz H. Angelo Alves e Guilherme Herrera Forvile);

Rodapé: Informações completas de contato, horário de funcionamento, redes sociais e botão flutuante para WhatsApp;

5. Funcionalidades Implementadas:
Gerenciamento do Modal de Anamnese: Sistema que abre o formulário ao clicar em "Seja Aluno", bloqueia a rolagem do fundo (body overflow) para melhor UX e permite o fechamento através de botão dedicado ou clique fora da área do modal.
Feedback de Cadastro: Validação visual e lógica de envio simulada com alert de sucesso e reset automático dos campos do formulário após a submissão;

Animações de Scroll (Reveal): Elementos como cards de planos, fotos dos instrutores e textos surgem com efeitos de transição e atrasos escalonados (staggered delays) conforme entram na área visível da tela;

Rolagem Suave (Smooth Scrolling): Integração com a biblioteca Lenis para uma experiência de navegação fluida entre as seções

Layout Responsivo: Ajuste dinâmico de todos os componentes (grids que passam de 2 para 1 coluna) para garantir legibilidade em telas menores;

Cards Interativos: Efeitos de hover que aplicam elevação (transform) e sombras para destacar os planos e criadores ao passar o mouse.
