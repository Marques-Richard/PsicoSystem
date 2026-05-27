const sessoes = [

  {
    paciente: "Carlos Ferreira",
    data: "22/05/2026",
    horario: "14:00",
    tipo: "Online",
    status: "Agendada",
    valor: "R$ 200",
    pagamento: "Pendente"
  },

  {
    paciente: "Maria Silva",
    data: "15/05/2026",
    horario: "09:00",
    tipo: "Individual",
    status: "Realizada",
    valor: "R$ 250",
    pagamento: "Pago"
  },

  {
    paciente: "João Santos",
    data: "16/05/2026",
    horario: "10:30",
    tipo: "Individual",
    status: "Realizada",
    valor: "R$ 250",
    pagamento: "Pendente"
  }

];

function loadSessoes(){

  const table = document.getElementById("sessionsTable");

  sessoes.forEach(sessao => {

    const tr = document.createElement("tr");

    tr.innerHTML = `
    
      <td>
        <strong>${sessao.paciente}</strong>
      </td>

      <td>${sessao.data}</td>

      <td>${sessao.horario}</td>

      <td>${sessao.tipo}</td>

      <td>
        <span class="
          status-badge
          ${getStatusClass(sessao.status)}
        ">
          ${sessao.status}
        </span>
      </td>

      <td>
        <strong>${sessao.valor}</strong>
      </td>

      <td>
        <span class="
          payment-badge
          ${sessao.pagamento === "Pago"
            ? "payment-paid"
            : "payment-pending"}
        ">
          ${sessao.pagamento}
        </span>
      </td>

      <td>

        ${
          sessao.pagamento === "Pendente"

          ? `<button class="btn-charge">
              Cobrar
            </button>`

          : `<button class="btn-finish">
              Concluir
            </button>`
        }

      </td>
    
    `;

    table.appendChild(tr);

  });

}

function getStatusClass(status){

  switch(status){

    case "Agendada":
      return "status-agendada";

    case "Realizada":
      return "status-realizada";

    default:
      return "";

  }

}