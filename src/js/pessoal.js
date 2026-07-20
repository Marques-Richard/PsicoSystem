// ========================================
// FINANCEIRO - PESSOAL (CORRIGIDO)
// ========================================

const despesas = [
    { titulo: 'Curso de atualização', data: '8 de mai', valor: 'R$ 450', categoria: 'Cursos' },
    { titulo: 'Supervisão clínica', data: '15 de mai', valor: 'R$ 300', categoria: 'Supervisão' },
    { titulo: 'Materiais de escritório', data: '10 de mai', valor: 'R$ 120', categoria: 'Materiais' },
    { titulo: 'Assinatura de plataforma', data: '5 de mai', valor: 'R$ 89', categoria: 'Assinaturas' }
];

// ========================================
// CARREGAR PÁGINA
// ========================================

function loadPessoal() {
    loadDespesas();
    loadChart();
}

function loadDespesas() {
    const list = document.getElementById('despesasList');
    if (!list) return;

    list.innerHTML = '';

    despesas.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'expense-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="expense-left">
                <div class="expense-icon">${getIcon(item.categoria)}</div>
                <div>
                    <h4>${item.titulo}</h4>
                    <p>${item.data} • ${item.categoria}</p>
                </div>
            </div>
            <div class="expense-right">
                <strong>${item.valor}</strong>
                <button class="delete-btn" onclick="deletarDespesa(this)">🗑</button>
            </div>
        `;
        list.appendChild(card);
    });

    // Atualizar totais
    updateTotals();
}

function getIcon(categoria) {
    const icons = {
        'Cursos': '📚',
        'Supervisão': '🧠',
        'Materiais': '📎',
        'Assinaturas': '📱'
    };
    return icons[categoria] || '💳';
}

function updateTotals() {
    // Pega os valores das despesas
    const valores = despesas.map(d => parseFloat(d.valor.replace('R$ ', '').replace(',', '.')));
    const total = valores.reduce((a, b) => a + b, 0);
    const recorrentes = despesas.filter(d => d.categoria === 'Assinaturas' || d.categoria === 'Supervisão');
    const avulsas = despesas.filter(d => d.categoria === 'Cursos' || d.categoria === 'Materiais');
    
    const totalRecorrente = recorrentes.reduce((a, b) => a + parseFloat(b.valor.replace('R$ ', '').replace(',', '.')), 0);
    const totalAvulso = avulsas.reduce((a, b) => a + parseFloat(b.valor.replace('R$ ', '').replace(',', '.')), 0);

    // Atualizar os cards
    const cards = document.querySelectorAll('.pessoal-card');
    if (cards.length >= 3) {
        cards[0].querySelector('h2').textContent = `R$ ${total.toFixed(0)}`;
        cards[0].querySelector('p').textContent = `${despesas.length} despesas este mês`;
        
        cards[1].querySelector('h2').textContent = `R$ ${totalRecorrente.toFixed(0)}`;
        cards[1].querySelector('p').textContent = `${recorrentes.length} despesa${recorrentes.length > 1 ? 's' : ''} fixa${recorrentes.length > 1 ? 's' : ''}`;
        
        cards[2].querySelector('h2').textContent = `R$ ${totalAvulso.toFixed(0)}`;
        cards[2].querySelector('p').textContent = `${avulsas.length} despesa${avulsas.length > 1 ? 's' : ''} avulsa${avulsas.length > 1 ? 's' : ''}`;
    }
}

function loadChart() {
    const canvas = document.getElementById('pessoalChart');
    if (!canvas) return;

    // Verifica se já existe um gráfico e destrói
    const existingChart = Chart.getChart('pessoalChart');
    if (existingChart) {
        existingChart.destroy();
    }

    // Define altura fixa para o container
    const parent = canvas.parentElement;
    if (parent) {
        parent.style.position = 'relative';
        parent.style.height = '300px';
        parent.style.maxHeight = '300px';
        parent.style.overflow = 'hidden';
    }

    // Agrupa despesas por categoria
    const categorias = {};
    despesas.forEach(d => {
        const valor = parseFloat(d.valor.replace('R$ ', '').replace(',', '.'));
        categorias[d.categoria] = (categorias[d.categoria] || 0) + valor;
    });

    const labels = Object.keys(categorias);
    const data = Object.values(categorias);
    const cores = ['#4a9e8a', '#2e5864', '#6bc4ae', '#1a3c42', '#e8c97a'];

    new Chart(canvas, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: cores.slice(0, labels.length),
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
                        padding: 12,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            cutout: '55%'
        }
    });
}

function deletarDespesa(btn) {
    if (confirm('Deseja excluir esta despesa?')) {
        const card = btn.closest('.expense-card');
        const titulo = card.querySelector('h4').textContent;
        
        // Remove do array
        const index = despesas.findIndex(d => d.titulo === titulo);
        if (index !== -1) {
            despesas.splice(index, 1);
        }

        // Animação de remoção
        card.style.transition = 'all 0.3s ease';
        card.style.transform = 'translateX(100%)';
        card.style.opacity = '0';
        setTimeout(() => {
            card.remove();
            updateTotals();
            loadChart(); // Recarrega o gráfico
        }, 300);
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(loadPessoal, 100);
});


// ========================================
// ADICIONAR DESPESA (NOVO)
// ========================================

function adicionarDespesa() {
    const titulo = prompt('Digite o título da despesa:');
    if (!titulo) return;
    
    const valor = prompt('Digite o valor (ex: 450):');
    if (!valor) return;
    
    const categoria = prompt('Digite a categoria (Cursos, Supervisão, Materiais, Assinaturas):');
    if (!categoria) return;
    
    const data = prompt('Digite a data (ex: 15 de mai):');
    if (!data) return;
    
    // Adiciona a nova despesa
    despesas.push({
        titulo: titulo,
        valor: `R$ ${valor}`,
        categoria: categoria,
        data: data
    });
    
    // Recarrega a lista e o gráfico
    loadDespesas();
    loadChart();
}