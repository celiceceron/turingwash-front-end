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


// CRIAÇÃO DOS CARDS
function criarCardCar(fabricante, nome, ano) {

  const cardCar = document.createElement('div');
  cardCar.classList.add('card')
  const wrapper = document.querySelector('.wrapper')

  cardCar.innerHTML =
    `
  <div class="topo-do-card">
    <h3 class="card-title" id="titulo">${fabricante} ${nome}</h3>
  </div> 
  <h3 class="card-title" id="ano">${ano}</h3>
  <button class="card-btn">Excluir carro</button>
`

  wrapper.appendChild(cardCar)
}


// CRIAÇÃO DOS CARDS
var carros = [{
  "fabricante": "Nissan",
  "nome": "Kicks",
  "ano": "2018",
  "logado": true
},
{
  "fabricante": "Chevrolet",
  "nome": "Onix",
  "ano": "2015",
  "logado": true
},
]; 

(function loadCardCar() {
  carros.forEach(carro =>
    criarCardCar(carro.fabricante, carro.nome, carro.ano))
})()
