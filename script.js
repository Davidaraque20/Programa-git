document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = event.target.elements[0].value.toLowerCase();
  const password = event.target.elements[1].value;

  if (password !== "1234") {
    alert("Contraseña incorrecta.");
    return;
  }

  let tipoUsuario = "";

  if (email.includes("profesor")) {
    tipoUsuario = "profesor";
  } else if (email.includes("estudiante6")) {
    tipoUsuario = "estudiante";
  } else if (email.includes("padre")) {
    tipoUsuario = "padre";
  } else if (email.includes("estudiante")) {
    alert("Solo estudiantes de 6to grado en adelante pueden ingresar.");
    return;
  } else {
    alert("Correo no autorizado.");
    return;
  }

  alert("Inicio de sesión exitoso como " + tipoUsuario);

  document.getElementById("login").style.display = "none";
  const menu = document.getElementById("menu");
  menu.style.display = "block";

  const fondoSesion = document.getElementById("fondo-sesion");
  fondoSesion.className = ""; // Eliminar fondo anterior
  fondoSesion.classList.add(`fondo-${tipoUsuario}`);
  fondoSesion.style.display = "block";

  const opciones = {
    profesor: ["Ver notas de estudiantes", "Subir trabajos", "Chat con estudiantes"],
    estudiante: ["Ver mis notas", "Subir mis trabajos", "Chat con profesores"],
    padre: ["Ver notas del hijo/a", "Chat con profesores"]
  };

  const listaOpciones = menu.querySelector("ul");
  listaOpciones.innerHTML = "";

  opciones[tipoUsuario].forEach(opcion => {
    const li = document.createElement("li");
    const boton = document.createElement("button");
    boton.textContent = opcion;
    boton.onclick = () => {
      alert(`La opción \"${opcion}\" está en mantenimiento.`);
    };
    li.appendChild(boton);
    listaOpciones.appendChild(li);
  });
});

// Mostrar fondo del login al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  const fondoSesion = document.getElementById("fondo-sesion");
  fondoSesion.classList.add("fondo-login");
  fondoSesion.style.display = "block";
});

function mostrarLogin() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("login").style.display = "block";

  const fondoSesion = document.getElementById("fondo-sesion");
  fondoSesion.className = ""; // Eliminar clases anteriores
  fondoSesion.classList.add("fondo-login");
  fondoSesion.style.display = "block";

  // (Opcional) Limpiar lista de opciones al volver
  const listaOpciones = document.querySelector("#menu ul");
  listaOpciones.innerHTML = "";
}