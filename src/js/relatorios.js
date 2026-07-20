// ========================================
// RELATÓRIOS
// ========================================

const sessaoRelatorios = [
    { data: '22/05', paciente: 'Carlos', valor: 'R$ 200', status: 'Pendente' },
    { data: '21/05', paciente: 'Ana', valor: 'R$ 250', status: 'Pago' },
    { data: '20/05', paciente: 'João', valor: 'R$ 250', status: 'Pendente' },
    { data: '19/05', paciente: 'Maria', valor: 'R$ 250', status: 'Pago' }
];

function loadRelatorios() {
    loadTable();
    loadRevenueChart();
    loadPatientsChart();
    loadPaymentChart();
}

function loadTable() {
    const table = document.getElementById('sessionTable');
    if (!table) return;

    table.innerHTML = '';

    sessaoRelatorios.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.data}</td>
            <td>${item.paciente}</td>
            <td>${item.valor}</td>
            <td>
                <span class="status ${item.status === 'Pago' ? 'paid' : 'pending'}">
                    ${item.status}
                </span>
            </td>
        `;
        table.appendChild(tr);
    });
}

function loadRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
            datasets: [{
                label: 'Faturamento',
                data: [8500, 9000, 8700, 9500, 7000],
                borderColor: '#4a9e8a',
                backgroundColor: 'rgba(74, 158, 138, 0.10)',
                fill: true,
                tension: 0.4,
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
}

function loadPatientsChart() {
    const ctx = document.getElementById('patientsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Maria', 'João', 'Ana', 'Carlos'],
            datasets: [{
                data: [3, 3, 3, 3],
                backgroundColor: ['#4a9e8a', '#2e5864', '#6bc4ae', '#1a3c42'],
                borderRadius: 6,
                borderSkipped: false
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
}

function loadPaymentChart() {
    const ctx = document.getElementById('paymentChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Pago', 'Pendente'],
            datasets: [{
                data: [25, 75],
                backgroundColor: ['#4a9e8a', '#d9534f'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 16,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                }
            },
            cutout: '70%'
        }
    });
}

document.addEventListener('DOMContentLoaded', loadRelatorios);