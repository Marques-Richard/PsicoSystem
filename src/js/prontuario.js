// ========================================
// PRONTUÁRIO
// ========================================

const pacientesLista = [
    'Ana Oliveira',
    'Carlos Ferreira',
    'João Santos',
    'Lucia Mendes',
    'Maria Silva'
].sort();

function loadProntuario() {
    const list = document.getElementById('patientList');
    if (!list) return;

    list.innerHTML = '';

    pacientesLista.forEach(nome => {
        const item = document.createElement('div');
        item.className = 'patient-item';
        item.innerHTML = `
            <div class="avatar-small">👤</div>
            <span>${nome}</span>
        `;
        item.onclick = () => openPatient(nome);
        list.appendChild(item);
    });

    // Verifica se tem parâmetro na URL
    const urlParams = new URLSearchParams(window.location.search);
    const pacienteParam = urlParams.get('paciente');
    if (pacienteParam) {
        const decoded = decodeURIComponent(pacienteParam);
        openPatient(decoded);
    }

    // Busca
    const searchInput = document.getElementById('searchPatient');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const term = this.value.toLowerCase();
            const items = list.querySelectorAll('.patient-item');
            items.forEach(item => {
                const nome = item.querySelector('span').textContent.toLowerCase();
                item.style.display = nome.includes(term) ? 'flex' : 'none';
            });
        });
    }
}

function openPatient(nome) {
    const content = document.getElementById('prontuarioContent');
    if (!content) return;

    // Destaca o item na sidebar
    const items = document.querySelectorAll('.patient-item');
    items.forEach(item => {
        item.style.background = '';
        item.style.fontWeight = '';
    });
    items.forEach(item => {
        if (item.querySelector('span').textContent === nome) {
            item.style.background = 'var(--background-soft)';
            item.style.fontWeight = '600';
        }
    });

    content.innerHTML = `
        <div class="patient-prontuario">
            <div class="prontuario-top">
                <div class="patient-title">
                    <div class="patient-avatar-big">👤</div>
                    <div>
                        <h2>${nome}</h2>
                        <p>Paciente em acompanhamento psicológico</p>
                    </div>
                </div>
                <button class="btn-secondary">📄 Exportar PDF</button>
            </div>

            <div class="prontuario-grid">
                <div class="prontuario-card">
                    <h3>📝 Evolução Clínica</h3>
                    <textarea placeholder="Digite a evolução clínica da sessão..."></textarea>
                </div>
                <div class="prontuario-card">
                    <h3>🧠 Técnicas Utilizadas</h3>
                    <textarea placeholder="Técnicas aplicadas na sessão..."></textarea>
                </div>
                <div class="prontuario-card">
                    <h3>🎯 Próximos Passos</h3>
                    <textarea placeholder="Defina os próximos passos do tratamento..."></textarea>
                </div>
                <div class="prontuario-card">
                    <h3>📌 Observações</h3>
                    <textarea placeholder="Observações gerais sobre o paciente..."></textarea>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', loadProntuario);