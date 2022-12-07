// CABEÇALHO
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
// CABEÇALHO


// CHECAR SE ESTÁ LOGADO
// const script = document.createElement('script1');

// script.onload = function entrar () {

//   if (usuario === "logado") {
//     let sair = document.getElementsByClassName("botao-sair")
//     let entrar = "Entrar";
//     sair.innerHTML = entrar;
//   }

//   console.log(entrar)

// };
// script.src = "./usuario.js";

// document.head.appendChild(script);


var usuario = true;
const sair = document.querySelector('.botao-sair')



if (usuario === true) {
  sair.innerHTML = ("Sair");

} else sair.innerHTML = ("Entrar");
