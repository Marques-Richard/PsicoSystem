document.addEventListener("DOMContentLoaded", () => {
  const atrasados = [
    { nome: "Paciente A" },
    { nome: "Paciente B" },
    { nome: "Paciente C" }
  ];

  document.getElementById("atrasados").innerText = atrasados.length;
});