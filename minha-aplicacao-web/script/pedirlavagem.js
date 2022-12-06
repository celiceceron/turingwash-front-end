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



// // DINAMICA DA LISTA DE LAVADORES
const script = document.createElement('script');


const nome = document.querySelector('.card-title')
const nota = document.querySelector('.card-nota')
const avaliacoes = document.querySelector('#avaliacoes')
const valor = document.querySelector('.valor')



nome.innerHTML = lavadores[0].value;
nota.innerHTML = lavadores[1].value;
avaliacoes.innerHTML = lavadores[2].value;
valor.innerHTML = lavadores[3].value;



console.log({
  nome,
  nota,
  avaliacoes,
  valor,
});

script.src = "./script/lavadores.js";

document.head.appendChild(script);