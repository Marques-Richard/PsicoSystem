// ========================================
// FINANCEIRO - CONSULTÓRIO (VERSÃO CORRETA)
// ========================================

const receitasFinanceiro = [
    { paciente: 'Carlos Ferreira', data: '22 de mai', valor: 'R$ 200', status: 'Pendente' },
    { paciente: 'Maria Silva', data: '15 de mai', valor: 'R$ 250', status: 'Pago' },
    { paciente: 'João Santos', data: '16 de mai', valor: 'R$ 250', status: 'Pendente' },
    { paciente: 'Ana Oliveira', data: '14 de mai', valor: 'R$ 250', status: 'Pago' }
];

// ========================================
// CARREGAR PÁGINA
// ========================================

function loadFinanceiro() {
    loadTable();
    loadChart();
}

function loadTable() {
    const table = document.getElementById('financeTable');
    if (!table) return;

    table.innerHTML = '';

    receitasFinanceiro.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${item.paciente}</strong></td>
            <td>${item.data}</td>
            <td><strong>${item.valor}</strong></td>
            <td>
                <span class="payment-badge ${item.status === 'Pago' ? 'payment-paid' : 'payment-pending'}">
                    ${item.status}
                </span>
            </td>
        `;
        table.appendChild(tr);
    });
}

function loadChart() {
    const canvas = document.getElementById('financeChart');
    if (!canvas) return;

    // Verifica se já existe um gráfico e destrói
    if (typeof Chart !== 'undefined') {
        const existingChart = Chart.getChart('financeChart');
        if (existingChart) {
            existingChart.destroy();
        }
    }

    // Verifica se o canvas tem pai e define altura
    const parent = canvas.parentElement;
    if (parent) {
        parent.style.position = 'relative';
        parent.style.height = '300px';
        parent.style.minHeight = '250px';
    }

    // Define altura do canvas
    canvas.style.height = '100%';
    canvas.style.width = '100%';
    canvas.style.maxHeight = '280px';

    try {
        new Chart(canvas, {
            type: 'line',
            data: {
                labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                datasets: [{
                    label: 'Receita',
                    data: [2200, 2500, 2000, 500],
                    borderColor: '#4a9e8a',
                    backgroundColor: 'rgba(74, 158, 138, 0.12)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#4a9e8a',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Erro ao criar gráfico:', error);
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Aguarda o Chart.js carregar
    if (typeof Chart !== 'undefined') {
        setTimeout(loadFinanceiro, 200);
    } else {
        // Se Chart.js não estiver carregado, espera
        const checkChart = setInterval(function() {
            if (typeof Chart !== 'undefined') {
                clearInterval(checkChart);
                setTimeout(loadFinanceiro, 200);
            }
        }, 100);
    }
});