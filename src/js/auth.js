// ========================================
// AUTH - Autenticação
// ========================================

function checkAuth() {
    // Verifica se o usuário está logado
    const user = localStorage.getItem('psico_user');
    if (!user && !window.location.pathname.includes('login.html')) {
        window.location.href = 'login.html';
    }
}

function login() {
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;

    if (email === 'admin@psico.com' && password === '123456') {
        localStorage.setItem('psico_user', JSON.stringify({ email, name: 'Admin' }));
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha inválidos!');
    }
}

function logout() {
    localStorage.removeItem('psico_user');
    window.location.href = 'login.html';
}

// Verifica login ao carregar
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            login();
        });
    }
});