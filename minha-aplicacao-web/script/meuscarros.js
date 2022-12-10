// CABEÇALHO
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
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
(function loadCardCar() {
  carros.forEach(carro => 
    criarCardCar(carro.fabricante, carro.nome, carro.ano))
})()