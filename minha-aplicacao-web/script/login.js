
// CHECAR SE ESTÁ LOGADO
(function login() {

  const sair = document.querySelector('.botao-sair')

  if (usuario.logado) {
    sair.innerHTML = ("Sair");
  } else sair.innerHTML = ("Entrar");

})() // FUNÇÃO AUTO-INVOCAVEL (IIFE{Immediately invoked function expression})

// CHECAR SE ESTÁ LOGADO