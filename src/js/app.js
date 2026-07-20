// ========================================
// APP - MENU TOGGLE E FUNÇÕES GLOBAIS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    function initMenuToggle() {
        const sidebar = document.querySelector('.sidebar');
        if (!sidebar) {
            console.log('Sidebar não encontrado');
            return;
        }

        let toggleBtn = document.querySelector('.menu-toggle');
        
        if (!toggleBtn) {
            toggleBtn = document.createElement('button');
            toggleBtn.className = 'menu-toggle';
            toggleBtn.innerHTML = '☰';
            toggleBtn.setAttribute('aria-label', 'Abrir menu');
            toggleBtn.setAttribute('role', 'button');
            document.body.prepend(toggleBtn);
        }

        function checkMobile() {
            if (window.innerWidth <= 768) {
                toggleBtn.style.display = 'flex';
                sidebar.classList.remove('open');
            } else {
                toggleBtn.style.display = 'none';
                sidebar.classList.remove('open');
                toggleBtn.innerHTML = '☰';
            }
        }

        checkMobile();

        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            sidebar.classList.toggle('open');
            this.classList.toggle('active');
            this.innerHTML = sidebar.classList.contains('open') ? '✕' : '☰';
        });

        const navLinks = sidebar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                    toggleBtn.classList.remove('active');
                    toggleBtn.innerHTML = '☰';
                }
            });
        });

        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const isClickInside = sidebar.contains(e.target) || e.target === toggleBtn;
                if (!isClickInside) {
                    sidebar.classList.remove('open');
                    toggleBtn.classList.remove('active');
                    toggleBtn.innerHTML = '☰';
                }
            }
        });

        window.addEventListener('resize', function() {
            checkMobile();
            if (window.innerWidth > 768) {
                toggleBtn.innerHTML = '☰';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                toggleBtn.classList.remove('active');
                toggleBtn.innerHTML = '☰';
            }
        });

        console.log('Menu toggle inicializado com sucesso!');
    }

    initMenuToggle();
});

// ========================================
// FUNÇÕES GLOBAIS
// ========================================

function openModal() {
    const modal = document.getElementById('modal');
    if (modal) modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) modal.style.display = 'none';
}

document.addEventListener('click', function(e) {
    const modal = document.getElementById('modal');
    if (modal && e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('modal');
        if (modal) modal.style.display = 'none';
    }
});