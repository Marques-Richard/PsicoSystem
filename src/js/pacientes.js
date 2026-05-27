const pacientes = [
  {
    nome: "Maria Silva",
    idade: 41,
    ultima: "15 de mai",
    status: "Ativo"
  },
  {
    nome: "João Santos",
    idade: 35,
    ultima: "16 de mai",
    status: "Ativo"
  },
  {
    nome: "Ana Oliveira",
    idade: 47,
    ultima: "14 de mai",
    status: "Ativo"
  },
  {
    nome: "Carlos Ferreira",
    idade: 44,
    ultima: "17 de mai",
    status: "Ativo"
  },
  {
    nome: "Lucia Mendes",
    idade: 30,
    ultima: "20 de mar",
    status: "Inativo"
  }
];

function loadPacientes(){

  const list = document.getElementById("patientsList");

  pacientes.forEach(paciente => {

    const item = document.createElement("div");

    item.className = "patient-card";

    item.innerHTML = `
    
      <div class="patient-left">

        <div class="patient-avatar">
          👤
        </div>

        <div>

          <h3>${paciente.nome}</h3>

          <p>
            ${paciente.idade} anos
            •
            🗓 ${paciente.ultima}
          </p>

        </div>

      </div>

      <div class="patient-right">

        <span class="
          patient-status
          ${paciente.status === "Ativo" ? "status-active" : "status-inactive"}
        ">
          ${paciente.status}
        </span>

        <span class="arrow">
          ›
        </span>

      </div>

    `;

    list.appendChild(item);

  });

}