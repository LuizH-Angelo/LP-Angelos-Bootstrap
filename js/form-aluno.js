document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. LÓGICA DO MODAL (FORMULÁRIO)
    ========================================= */
    const modal = document.getElementById('modalAnamnese');
    const btnClose = document.getElementById('closeModal');
    const form = document.getElementById('formAnamnese');

    const btnsAbrirModal = document.querySelectorAll('.form-link, a[href*="form-aluno"]');

    // Abrir o Modal
    if (btnsAbrirModal.length > 0 && modal) {
        btnsAbrirModal.forEach(btn => {
            btn.addEventListener('click', (evento) => {
                evento.preventDefault();
                modal.classList.add('active'); 
                document.body.style.overflow = 'hidden'; // Trava o fundo
            });
        });
    }

    // Fechar clicando no "X"
    if (btnClose && modal) {
        btnClose.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Libera o fundo
        });
    }

    // Fechar clicando fora da janela
    if (modal) {
        modal.addEventListener('click', (evento) => {
            if (evento.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Ao enviar o formulário
    if (form && modal) {
        form.addEventListener('submit', (evento) => {
            evento.preventDefault(); 
            
            alert("Anamnese enviada com sucesso! Nossa equipe entrará em contato. Bem-vindo à Angelo's!");
            
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            form.reset(); 
        });
    }

    /* =========================================
       2. ANIMAÇÕES DE SCROLL (A MAGIA DE APARECER)
    ========================================= */
    const elementosParaAnimar = document.querySelectorAll(
        '.quem-somos-conteudo, .quem-somos-midia, .diferenciais-esquerda h2, .card-diferenciais, .card-profs, .planos-header, .card-plano, .criador-card'
    );

    // Aplica a classe escondida e os delays para o efeito "cascata"
    elementosParaAnimar.forEach((el, index) => {
        el.classList.add('scroll-escondido');
        
        if(el.classList.contains('card-diferenciais') || el.classList.contains('card-profs') || el.classList.contains('card-plano')){
             el.style.transitionDelay = `${(index % 4) * 0.15}s`;
        }
    });

    // Observador que verifica quando o elemento entra na tela
    const observadorDeScroll = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('scroll-mostrar');
                observadorDeScroll.unobserve(entrada.target); // Para de observar depois que aparece
            }
        });
    }, {
        threshold: 0.15 // Aparece quando 15% do elemento estiver visível
    });

    elementosParaAnimar.forEach(el => observadorDeScroll.observe(el));

});