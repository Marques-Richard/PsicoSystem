function login() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const error = document.getElementById("error");

  // validação correta
  if (user === "admin" && pass === "1234") {
    localStorage.setItem("auth", "true");
    window.location.href = "dashboard.html";
  } else {
    error.innerText = "Usuário ou senha inválidos";
  }
}