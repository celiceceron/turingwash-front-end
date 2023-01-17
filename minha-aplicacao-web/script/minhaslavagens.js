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
    "logado": true
  };
  
  if (!usuario.logado) {
    sair.innerHTML = ("Sair");
  } else sair.innerHTML = ("Entrar");

})() // FUNÇÃO AUTO-INVOCAVEL (IIFE{Immediately invoked function expression})
// CHECAR SE ESTÁ LOGADO
// CABEÇALHO

// CRIAÇÃO DOS CARDS
function criarCardLavagens(lavador, carro, valorCobrado, data) {

  const cardLavagens = document.createElement('div');
  cardLavagens.classList.add('card')
  const wrapper = document.querySelector('.wrapper')

  cardLavagens.innerHTML =
    `
        <div class="valor">R$${valorCobrado}</div>
          <div class="topo-do-card">
            <h3 class="lavador" id="primeiro-lavador">Lavador</h3>
          <h3 class="card-title" id="titulo">${lavador}</h3>
        </div class="topo-do-card">
        <h3 class="card-carro" id="carro">Carro</h3>
        <h3 class="modelo-carro" id="modelo">${carro}</h3>
        <h4 class="data">${data}</h4>
      </div>
  `

  wrapper.appendChild(cardLavagens)
}

// CRIAÇÃO DOS CARDS
var lavagens = [{
  "lavador": "Matheus Oliveira",
  "carro": "Chevrolet Onix (2015)",
  "valorCobrado": 75,
  "data": "2022-05-29"
},
{
  "lavador": "Joana Santos",
  "carro": "Nissan Kicks (2018)",
  "valorCobrado": 75,
  "data": "2022-04-20"
},
{
  "lavador": "Joana Santos",
  "carro": "Nissan Kicks (2018)",
  "valorCobrado": 75,
  "data": "2022-08-01"
},
{
  "lavador": "Joana Santos",
  "carro": "Nissan Kicks (2018)",
  "valorCobrado": 75,
  "data": "2022-06-03"
},
];

(function loadCardLavagens() {
  lavagens.forEach(lavagens =>
    criarCardLavagens(lavagens.lavador, lavagens.carro, lavagens.valorCobrado, lavagens.data))
})()