// ========================================
// AGENDA
// ========================================

function loadAgenda() {
    const body = document.getElementById('calendarBody');
    if (!body) return;

    // Limpa o body
    body.innerHTML = '';

    // Horários das 8h às 18h
    for (let h = 8; h <= 18; h++) {
        // Coluna de horário
        const time = document.createElement('div');
        time.className = 'time';
        time.innerText = `${h}:00`;
        body.appendChild(time);

        // 7 dias da semana
        for (let d = 0; d < 7; d++) {
            const cell = document.createElement('div');
            cell.className = 'cell';

            // Exemplo de sessão na sexta-feira (d=4) às 9h
            if (d === 4 && h === 9) {
                const session = document.createElement('div');
                session.className = 'session';
                session.innerHTML = `
                    <h4>Maria Silva</h4>
                    <p>09:00</p>
                `;
                session.onclick = function(e) {
                    e.stopPropagation();
                    openModal();
                    document.getElementById('modalPaciente').textContent = 'Maria Silva';
                };
                cell.appendChild(session);
            }

            // Exemplo de sessão na terça (d=1) às 10h
            if (d === 1 && h === 10) {
                const session = document.createElement('div');
                session.className = 'session';
                session.innerHTML = `
                    <h4>João Santos</h4>
                    <p>10:30</p>
                `;
                session.onclick = function(e) {
                    e.stopPropagation();
                    openModal();
                    document.getElementById('modalPaciente').textContent = 'João Santos';
                };
                cell.appendChild(session);
            }

            // Exemplo de sessão na quarta (d=2) às 14h
            if (d === 2 && h === 14) {
                const session = document.createElement('div');
                session.className = 'session';
                session.innerHTML = `
                    <h4>Carlos Ferreira</h4>
                    <p>14:00</p>
                `;
                session.onclick = function(e) {
                    e.stopPropagation();
                    openModal();
                    document.getElementById('modalPaciente').textContent = 'Carlos Ferreira';
                };
                cell.appendChild(session);
            }

            body.appendChild(cell);
        }
    }
}

// Carregar ao iniciar
document.addEventListener('DOMContentLoaded', loadAgenda);