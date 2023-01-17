// CABEÇALHO
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

// CHECAR SE ESTÁ LOGADO
(function login() {

  const sair = document.querySelector('.botao-sair')
  var usuario = {
    "nome": "João",
    "email": "joao@mail.com",
    "logado": false
  };
  
  if (!usuario.logado) {
    sair.innerHTML = ("Sair");
  } else sair.innerHTML = ("Entrar");

})() // FUNÇÃO AUTO-INVOCAVEL (IIFE{Immediately invoked function expression})
// CHECAR SE ESTÁ LOGADO
// CABEÇALHO