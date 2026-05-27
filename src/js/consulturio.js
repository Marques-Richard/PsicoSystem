const receitas = [

  {
    paciente: "Carlos Ferreira",
    data: "22 de mai",
    valor: "R$ 200",
    status: "Pendente"
  },

  {
    paciente: "Maria Silva",
    data: "15 de mai",
    valor: "R$ 250",
    status: "Pago"
  },

  {
    paciente: "João Santos",
    data: "16 de mai",
    valor: "R$ 250",
    status: "Pendente"
  },

  {
    paciente: "Ana Oliveira",
    data: "14 de mai",
    valor: "R$ 250",
    status: "Pago"
  }

];

function loadFinanceiro(){

  loadTable();

  loadChart();

}

function loadTable(){

  const table = document.getElementById("financeTable");

  receitas.forEach(item => {

    const tr = document.createElement("tr");

    tr.innerHTML = `
    
      <td>
        <strong>${item.paciente}</strong>
      </td>

      <td>${item.data}</td>

      <td>
        <strong>${item.valor}</strong>
      </td>

      <td>

        <span class="
          payment-badge
          ${item.status === "Pago"
            ? "payment-paid"
            : "payment-pending"}
        ">
          ${item.status}
        </span>

      </td>
    
    `;

    table.appendChild(tr);

  });

}

function loadChart(){

  const ctx = document
    .getElementById("financeChart");

  new Chart(ctx, {

    type: 'line',

    data: {

      labels: [
        'Sem 1',
        'Sem 2',
        'Sem 3',
        'Sem 4'
      ],

      datasets: [{

        label: 'Receita',

        data: [
          2200,
          2500,
          2000,
          500
        ],

        borderColor: '#508a7e',

        backgroundColor: 'rgba(80,138,126,.15)',

        tension: 0.4,

        fill: true

      }]

    },

    options: {

      responsive: true,

      plugins: {

        legend: {
          display: false
        }

      }

    }

  });

}