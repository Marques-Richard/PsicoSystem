// ========================================
// DASHBOARD - GRÁFICOS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Verifica se está na página do Dashboard
    const isDashboard = document.querySelector('.dashboard-page');
    if (!isDashboard) return;

    // 1. GRÁFICO DE FATURAMENTO
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        // Destroi gráfico existente se houver
        const existingChart = Chart.getChart('revenueChart');
        if (existingChart) {
            existingChart.destroy();
        }

        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Faturamento',
                    data: [8500, 9000, 8700, 9500, 7000, 8200],
                    borderColor: '#4a9e8a',
                    backgroundColor: 'rgba(74, 158, 138, 0.10)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#4a9e8a',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4
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

    // 2. GRÁFICO DE PACIENTES
    const patientsCtx = document.getElementById('patientsChart');
    if (patientsCtx) {
        const existingChart = Chart.getChart('patientsChart');
        if (existingChart) {
            existingChart.destroy();
        }

        new Chart(patientsCtx, {
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

    // 3. GRÁFICO DE PAGAMENTO (DONUT)
    const paymentCtx = document.getElementById('paymentChart');
    if (paymentCtx) {
        const existingChart = Chart.getChart('paymentChart');
        if (existingChart) {
            existingChart.destroy();
        }

        new Chart(paymentCtx, {
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
});