// ========================================
// SESSÕES
// ========================================

const sessoes = [
    { paciente: 'Carlos Ferreira', data: '22/05/2026', horario: '14:00', tipo: 'Online', status: 'Agendada', valor: 'R$ 200', pagamento: 'Pendente' },
    { paciente: 'Maria Silva', data: '15/05/2026', horario: '09:00', tipo: 'Presencial', status: 'Realizada', valor: 'R$ 250', pagamento: 'Pago' },
    { paciente: 'João Santos', data: '16/05/2026', horario: '10:30', tipo: 'Presencial', status: 'Realizada', valor: 'R$ 250', pagamento: 'Pendente' },
    { paciente: 'Ana Oliveira', data: '14/05/2026', horario: '16:00', tipo: 'Online', status: 'Realizada', valor: 'R$ 250', pagamento: 'Pago' },
    { paciente: 'Lucia Mendes', data: '20/03/2026', horario: '11:00', tipo: 'Presencial', status: 'Cancelada', valor: 'R$ 200', pagamento: 'Pendente' }
];

function loadSessoes() {
    const table = document.getElementById('sessionsTable');
    if (!table) return;

    table.innerHTML = '';

    sessoes.forEach(sessao => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${sessao.paciente}</strong></td>
            <td>${sessao.data}</td>
            <td>${sessao.horario}</td>
            <td>${sessao.tipo}</td>
            <td><span class="status-badge ${getStatusClass(sessao.status)}">${sessao.status}</span></td>
            <td><strong>${sessao.valor}</strong></td>
            <td><span class="payment-badge ${sessao.pagamento === 'Pago' ? 'payment-paid' : 'payment-pending'}">${sessao.pagamento}</span></td>
            <td>
                ${sessao.pagamento === 'Pendente' 
                    ? `<button class="btn-charge" onclick="cobrarSessao('${sessao.paciente}')">💰 Cobrar</button>` 
                    : `<button class="btn-finish" onclick="finalizarSessao('${sessao.paciente}')">✅ Concluir</button>`}
            </td>
        `;
        table.appendChild(tr);
    });

    // Filtros
    const filters = document.querySelectorAll('.sessoes-filters input, .sessoes-filters select');
    filters.forEach(filter => {
        filter.addEventListener('input', filtrarSessoes);
        filter.addEventListener('change', filtrarSessoes);
    });
}

function getStatusClass(status) {
    const map = {
        'Agendada': 'status-agendada',
        'Realizada': 'status-realizada',
        'Cancelada': 'status-cancelada'
    };
    return map[status] || '';
}

function filtrarSessoes() {
    const search = document.querySelector('.sessoes-filters input')?.value?.toLowerCase() || '';
    const statusFilter = document.querySelector('.sessoes-filters select:first-of-type')?.value || 'Todos os status';
    const paymentFilter = document.querySelector('.sessoes-filters select:last-of-type')?.value || 'Todos';

    const rows = document.querySelectorAll('#sessionsTable tr');
    rows.forEach(row => {
        const paciente = row.querySelector('td:first-child')?.textContent?.toLowerCase() || '';
        const status = row.querySelector('.status-badge')?.textContent || '';
        const pagamento = row.querySelector('.payment-badge')?.textContent || '';

        let show = true;
        if (search && !paciente.includes(search)) show = false;
        if (statusFilter !== 'Todos os status' && status !== statusFilter) show = false;
        if (paymentFilter !== 'Todos' && pagamento !== paymentFilter) show = false;

        row.style.display = show ? '' : 'none';
    });
}

function cobrarSessao(paciente) {
    if (confirm(`Deseja cobrar a sessão de ${paciente}?`)) {
        alert(`💰 Cobrança enviada para ${paciente}!`);
    }
}

function finalizarSessao(paciente) {
    if (confirm(`Deseja finalizar a sessão de ${paciente}?`)) {
        alert(`✅ Sessão de ${paciente} finalizada!`);
    }
}

document.addEventListener('DOMContentLoaded', loadSessoes);