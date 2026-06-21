document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalAnamnese');
    const btnClose = document.getElementById('closeModal');
    const form = document.getElementById('formAnamnese');

    const btnsAbrirModal = document.querySelectorAll('.form-link, a[href*="form-aluno"]');

    btnsAbrirModal.forEach(btn => {
        btn.addEventListener('click', (evento) => {
            evento.preventDefault();
            modal.classList.add('active'); 
            document.body.style.overflow = 'hidden'; 
        });
    });

    btnClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    });

    modal.addEventListener('click', (evento) => {
        if (evento.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 6. O que acontece quando o aluno clica em "Enviar"
    form.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o recarregamento da página
        
        // Aqui você futuramente ligará com um banco de dados ou enviará por email.
        // Por enquanto, daremos uma mensagem de sucesso bonita:
        alert("Anamnese enviada com sucesso! Nossa equipe entrará em contato. Bem-vindo à Angelo's!");
        
        // Fecha o modal e limpa os campos
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        form.reset(); 
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    const elementosParaAnimar = document.querySelectorAll(
        '.quem-somos-conteudo, .quem-somos-midia, .diferenciais-esquerda h2, .card-diferenciais, .card-profs, .planos-header, .card-plano, .criador-card'
    );

    elementosParaAnimar.forEach((el, index) => {
        el.classList.add('scroll-escondido');
        
        if(el.classList.contains('card-diferenciais') || el.classList.contains('card-profs') || el.classList.contains('card-plano')){
             el.style.transitionDelay = `${(index % 4) * 0.15}s`;
        }
    });

    const observadorDeScroll = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('scroll-mostrar');
                
                observadorDeScroll.unobserve(entrada.target); 
            }
        });
    }, {
        threshold: 0.15 
    });

    elementosParaAnimar.forEach(el => observadorDeScroll.observe(el));

});
