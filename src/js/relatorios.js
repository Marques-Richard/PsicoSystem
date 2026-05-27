const sessoes = [

  {
    data:"22/05",
    paciente:"Carlos",
    valor:"R$ 200",
    status:"Pendente"
  },

  {
    data:"21/05",
    paciente:"Ana",
    valor:"R$ 250",
    status:"Pago"
  },

  {
    data:"20/05",
    paciente:"João",
    valor:"R$ 250",
    status:"Pendente"
  },

  {
    data:"19/05",
    paciente:"Maria",
    valor:"R$ 250",
    status:"Pago"
  }

];

function loadRelatorios(){

  loadTable();

  loadRevenueChart();

  loadPatientsChart();

  loadPaymentChart();

}

/* TABELA */

function loadTable(){

  const table =
    document.getElementById("sessionTable");

  sessoes.forEach(item => {

    const tr = document.createElement("tr");

    tr.innerHTML = `

      <td>${item.data}</td>

      <td>${item.paciente}</td>

      <td>${item.valor}</td>

      <td>

        <span class="
          status
          ${item.status === "Pago"
            ? "paid"
            : "pending"}
        ">

          ${item.status}

        </span>

      </td>

    `;

    table.appendChild(tr);

  });

}

/* FATURAMENTO */

function loadRevenueChart(){

  const ctx =
    document.getElementById("revenueChart");

  new Chart(ctx, {

    type:'line',

    data:{

      labels:[
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai'
      ],

      datasets:[{

        label:'Faturamento',

        data:[
          8500,
          9000,
          8700,
          9500,
          7000
        ],

        borderColor:'#508a7e',

        backgroundColor:'rgba(80,138,126,.12)',

        fill:true,

        tension:.4

      }]

    },

    options:{
      responsive:true
    }

  });

}

/* PACIENTES */

function loadPatientsChart(){

  const ctx =
    document.getElementById("patientsChart");

  new Chart(ctx, {

    type:'bar',

    data:{

      labels:[
        'Maria',
        'João',
        'Ana',
        'Carlos'
      ],

      datasets:[{

        data:[3,3,3,3],

        backgroundColor:'#2e5864'

      }]

    },

    options:{
      responsive:true,
      plugins:{
        legend:{
          display:false
        }
      }
    }

  });

}

/* PAGAMENTO */

function loadPaymentChart(){

  const ctx =
    document.getElementById("paymentChart");

  new Chart(ctx, {

    type:'doughnut',

    data:{

      labels:[
        'Pago',
        'Pendente'
      ],

      datasets:[{

        data:[25,75],

        backgroundColor:[
          '#508a7e',
          '#d9534f'
        ]

      }]

    },

    options:{
      responsive:true
    }

  });

}