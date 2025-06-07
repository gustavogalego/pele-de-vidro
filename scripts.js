/*
* Pele de Vidro em 21 Dias - Hotsite de Vendas
* Scripts JavaScript para interatividade e conversão
*/

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar contador regressivo
    initCountdown();
    
    // Inicializar accordion do FAQ
    initAccordion();
    
    // Mostrar/esconder CTA flutuante baseado no scroll
    initFloatingCTA();
    
    // Smooth scroll para links de ancoragem
    initSmoothScroll();
});

// Função para inicializar o contador regressivo
function initCountdown() {
    // Definir a data final (24 horas a partir de agora)
    const now = new Date();
    const endTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    // Atualizar o contador a cada segundo
    const countdownTimer = setInterval(function() {
        const currentTime = new Date();
        const timeRemaining = endTime - currentTime;
        
        // Verificar se o contador chegou a zero
        if (timeRemaining <= 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown').innerHTML = '<p>Oferta encerrada!</p>';
            return;
        }
        
        // Calcular horas, minutos e segundos restantes
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        // Atualizar os elementos do contador
        document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Função para inicializar o accordion do FAQ
function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const icon = header.querySelector('.accordion-icon');
        
        header.addEventListener('click', () => {
            // Toggle active class
            const isActive = item.classList.contains('active');
            
            // Fechar todos os itens ativos
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-icon').textContent = '+';
                }
            });
            
            // Toggle o item atual
            if (isActive) {
                item.classList.remove('active');
                icon.textContent = '+';
            } else {
                item.classList.add('active');
                icon.textContent = '-';
            }
        });
    });
}

// Função para mostrar/esconder o CTA flutuante baseado no scroll
function initFloatingCTA() {
    const floatingCTA = document.querySelector('.floating-cta');
    const heroSection = document.querySelector('.hero');
    const finalCTA = document.querySelector('.final-cta');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const finalCTATop = finalCTA.offsetTop;
        
        // Mostrar o CTA flutuante apenas quando o usuário estiver entre a seção hero e a CTA final
        if (scrollPosition > heroBottom && scrollPosition < finalCTATop) {
            floatingCTA.style.display = 'block';
        } else {
            floatingCTA.style.display = 'none';
        }
    });
}

// Função para smooth scroll para links de ancoragem
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calcular a posição de destino com um pequeno offset para o header fixo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Adicionar efeitos de hover e interação para melhorar a experiência do usuário
document.addEventListener('mouseover', function(e) {
    // Adicionar efeito de hover nos cards de benefícios
    if (e.target.closest('.benefit-card')) {
        const card = e.target.closest('.benefit-card');
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    }
});

document.addEventListener('mouseout', function(e) {
    // Remover efeito de hover nos cards de benefícios
    if (e.target.closest('.benefit-card')) {
        const card = e.target.closest('.benefit-card');
        card.style.transform = '';
        card.style.boxShadow = '';
    }
});

// Adicionar animação de entrada para elementos quando eles entram na viewport
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o IntersectionObserver é suportado
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observar elementos que devem ser animados
        const animateElements = document.querySelectorAll('.benefit-card, .testimonial-card, .week');
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }
});

// Adicionar validação de formulário (se houver formulário de captura de e-mail)
const forms = document.querySelectorAll('form');
if (forms.length > 0) {
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar campos do formulário
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && !isValidEmail(emailInput.value)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }
            
            // Simulação de envio de formulário
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Processando...';
                
                // Simular processamento
                setTimeout(() => {
                    alert('Obrigado! Seu pedido foi processado com sucesso.');
                    form.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'Enviar';
                    
                    // Redirecionar para página de agradecimento ou mostrar mensagem de sucesso
                    // window.location.href = 'obrigado.html';
                }, 1500);
            }
        });
    });
}

// Função auxiliar para validar e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Adicionar rastreamento de eventos (simulado)
function trackEvent(category, action, label) {
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
    // Aqui você adicionaria o código real de rastreamento (Google Analytics, etc.)
}

// Rastrear cliques nos CTAs principais
document.addEventListener('click', function(e) {
    if (e.target.closest('.btn-primary')) {
        trackEvent('CTA', 'click', 'primary-button');
    } else if (e.target.closest('.btn-secondary')) {
        trackEvent('CTA', 'click', 'secondary-button');
    }
});

// Rastrear visualizações de seção
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sectionId) {
                        trackEvent('Section', 'view', sectionId);
                    }
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        // Observar todas as seções
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
});
