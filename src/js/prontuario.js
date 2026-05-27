const pacientes = [
  "Ana Oliveira",
  "Carlos Ferreira",
  "João Santos",
  "Lucia Mendes",
  "Maria Silva"
];

// ordena alfabeticamente
pacientes.sort();

function loadProntuario(){

  const list = document.getElementById("patientList");

  pacientes.forEach(nome => {

    const item = document.createElement("div");

    item.className = "patient-item";

    item.innerHTML = `
    
      <div class="patient-avatar-small">
        👤
      </div>

      <span>${nome}</span>

    `;

    item.onclick = () => openPatient(nome);

    list.appendChild(item);

  });

}

function openPatient(nome){

  const content = document.getElementById("prontuarioContent");

  content.innerHTML = `
  
    <div class="patient-prontuario">

      <div class="prontuario-top">

        <div class="patient-title">

          <div class="patient-avatar-big">
            👤
          </div>

          <div>
            <h2>${nome}</h2>
            <p>Paciente em acompanhamento psicológico</p>
          </div>

        </div>

        <button class="btn-primary">
          Exportar PDF
        </button>

      </div>

      <div class="prontuario-grid">

        <div class="prontuario-card">

          <h3>Evolução Clínica</h3>

          <textarea placeholder="Digite a evolução clínica..."></textarea>

        </div>

        <div class="prontuario-card">

          <h3>Técnicas Utilizadas</h3>

          <textarea placeholder="Técnicas aplicadas na sessão..."></textarea>

        </div>

        <div class="prontuario-card">

          <h3>Próximos Passos</h3>

          <textarea placeholder="Defina próximos passos..."></textarea>

        </div>

        <div class="prontuario-card">

          <h3>Observações</h3>

          <textarea placeholder="Observações gerais..."></textarea>

        </div>

      </div>

    </div>
  
  `;
}