const despesas = [

  {
    titulo: "Curso de atualização",
    data: "8 de mai",
    valor: "R$ 450",
    categoria: "Cursos"
  },

  {
    titulo: "Supervisão clínica",
    data: "15 de mai",
    valor: "R$ 300",
    categoria: "Supervisão"
  }

];

function loadPessoal(){

  loadDespesas();

  loadChart();

}

function loadDespesas(){

  const list = document.getElementById("despesasList");

  despesas.forEach(item => {

    const card = document.createElement("div");

    card.className = "expense-card";

    card.innerHTML = `
    
      <div class="expense-left">

        <div class="expense-icon">
          💳
        </div>

        <div>

          <h4>${item.titulo}</h4>

          <p>${item.data}</p>

        </div>

      </div>

      <div class="expense-right">

        <strong>${item.valor}</strong>

        <button class="delete-btn">
          🗑
        </button>

      </div>
    
    `;

    list.appendChild(card);

  });

}

function loadChart(){

  const ctx =
    document.getElementById("pessoalChart");

  new Chart(ctx, {

    type: 'pie',

    data: {

      labels: [
        'Cursos',
        'Supervisão'
      ],

      datasets: [{

        data: [
          60,
          40
        ],

        backgroundColor: [
          '#508a7e',
          '#2e5864'
        ]

      }]

    },

    options: {

      responsive: true,

      plugins: {

        legend: {
          position: 'bottom'
        }

      }

    }

  });

}