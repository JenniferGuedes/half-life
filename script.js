//Abrir e fechar menu hambúrguer
function showsidebar(){
  const sidebar = document.querySelector(".sidebar");
  const menu = document.querySelector(".menu");
  sidebar.style.display = "flex";
  menu.classList.add("oculta");
}

function hidesidebar(){
  const sidebar = document.querySelector(".sidebar");
  const menu = document.querySelector(".menu");
  sidebar.style.display = "none";
  menu.classList.remove("oculta");
}


//Counter
const startDate = new Date("2025-10-04T14:06:00"); 
const counter = document.getElementById("counter");

function updateCounter() {
  const now = new Date();
  const difference = now - startDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  counter.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos 💞`;
}

setInterval(updateCounter, 1000);
updateCounter();

//Achievements

document.querySelectorAll("article").forEach(article => {
  article.addEventListener("click", () => {
    article.classList.toggle("reveal");
  });
});


// Terminal Combine

const form = document.querySelector("#terminal form");
const input = document.querySelector("#command");
const response = document.querySelector("#response");

function typeResponse(text, element) {
  element.textContent = "";
  element.classList.add("typing");

  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      element.classList.remove("typing");
    }
  }, 50); // velocidade da digitação
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cmd = input.value.trim().toLowerCase();
  input.value = "";

  let output = "";

  switch (cmd) {
    case "status":
      output = "Status: Em missão cooperativa desde 4 de outubro de 2025. Headcrabs eliminados: ∞";
      break;
    case "unlock lambda_core":
      output = "Lambda Core desbloqueado. Conquista 'Sintonia Nerd' ativada.";
      break;
    case "play audio_silvio":
      output = "Transmitindo áudio: Silvio Santos Protocol iniciado. (Áudio não implementado ainda)";
      break;
    case "gman":
      output = "Você não deveria estar aqui... [Acesso restrito]";
      break;
    default:
      output = `Comando '${cmd}' não reconhecido. Tente 'status', 'unlock lambda_core', 'gman'...`;
  }

  typeResponse(output, response);
});

//Kleiner's Archives

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#unlock-form");
  const passwordInput = document.querySelector("#password");
  const gallery = document.querySelector("#gallery");
  const video = gallery.querySelector("video");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = passwordInput.value;

    if (input === "borabill") {
      gallery.classList.remove("hidden");
      gallery.classList.add("visible");
      video.classList.remove("hidden");
    } else {
      alert("Senha incorreta. Acesso negado pelo Dr. Kleiner.");
    }
  });
});

//CTA Page Password
 function verificarSenha() {
    const senha = document.getElementById("senha").value;
    if (senha === "vortigaunt") {
      window.location.href = "us.html"; 
    } else {
      alert("Senha incorreta. Acesso negado pelo Dr. Kleiner.");
    }
  }