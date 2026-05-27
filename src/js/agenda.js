function loadAgenda(){

  const body = document.getElementById("calendarBody");

  for(let h = 8; h <= 18; h++){

    // coluna horário
    const time = document.createElement("div");
    time.className = "time";
    time.innerText = `${h}:00`;

    body.appendChild(time);

    // dias
    for(let d = 0; d < 7; d++){

      const cell = document.createElement("div");
      cell.className = "cell";

      // exemplo de sessão
      if(d === 4 && h === 9){

        const session = document.createElement("div");

        session.className = "session";

        session.innerHTML = `
          <h4>Maria Silva</h4>
          <p>09:00</p>
        `;

        session.onclick = openModal;

        cell.appendChild(session);
      }

      body.appendChild(cell);
    }
  }
}

function openModal(){
  document.getElementById("modal").style.display = "flex";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}