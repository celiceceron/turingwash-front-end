// CABEÇALHO
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
// CABEÇALHO



// CHECAR SE ESTÁ LOGADO
const script = document.createElement('script');

script.onload = function login() {

  const sair = document.querySelector('.botao-sair')

  if (usuario.logado === true) {
    sair.innerHTML = ("Sair");
  } else sair.innerHTML = ("Entrar");

};

script.src = "./script/usuario.js";

document.head.appendChild(script);
// CHECAR SE ESTÁ LOGADO