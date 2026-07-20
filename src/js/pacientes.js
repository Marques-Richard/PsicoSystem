// ========================================
// PACIENTES
// ========================================

const pacientes = [
    { nome: 'Maria Silva', idade: 41, ultima: '15 de mai', status: 'Ativo' },
    { nome: 'João Santos', idade: 35, ultima: '16 de mai', status: 'Ativo' },
    { nome: 'Ana Oliveira', idade: 47, ultima: '14 de mai', status: 'Ativo' },
    { nome: 'Carlos Ferreira', idade: 44, ultima: '17 de mai', status: 'Ativo' },
    { nome: 'Lucia Mendes', idade: 30, ultima: '20 de mar', status: 'Inativo' }
];

function loadPacientes() {
    const list = document.getElementById('patientsList');
    if (!list) return;

    list.innerHTML = '';

    pacientes.forEach(paciente => {
        const item = document.createElement('div');
        item.className = 'patient-card';
        item.innerHTML = `
            <div class="patient-left">
                <div class="patient-avatar">👤</div>
                <div>
                    <h3>${paciente.nome}</h3>
                    <p>${paciente.idade} anos • 🗓 ${paciente.ultima}</p>
                </div>
            </div>
            <div class="patient-right">
                <span class="patient-status ${paciente.status === 'Ativo' ? 'status-active' : 'status-inactive'}">
                    ${paciente.status}
                </span>
                <span class="arrow">›</span>
            </div>
        `;
        
        // Click para abrir prontuário
        item.addEventListener('click', function() {
            window.location.href = `prontuario.html?paciente=${encodeURIComponent(paciente.nome)}`;
        });

        list.appendChild(item);
    });

    // Filtros
    const filterBtns = document.querySelectorAll('.filters button');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active-filter'));
            this.classList.add('active-filter');
            
            const filter = this.textContent.trim();
            const items = list.querySelectorAll('.patient-card');
            
            items.forEach(item => {
                const status = item.querySelector('.patient-status').textContent.trim();
                if (filter === 'Todos') {
                    item.style.display = 'flex';
                } else if (filter === 'Ativos') {
                    item.style.display = status === 'Ativo' ? 'flex' : 'none';
                } else if (filter === 'Inativos') {
                    item.style.display = status === 'Inativo' ? 'flex' : 'none';
                }
            });
        });
    });

    // Busca
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const term = this.value.toLowerCase();
            const items = list.querySelectorAll('.patient-card');
            items.forEach(item => {
                const nome = item.querySelector('h3').textContent.toLowerCase();
                item.style.display = nome.includes(term) ? 'flex' : 'none';
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', loadPacientes);