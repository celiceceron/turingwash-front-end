// CABEÇALHO
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
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

(function loadCardLavagens() {
  lavagens.forEach(lavagens =>
    criarCardLavagens(lavagens.lavador, lavagens.carro, lavagens.valorCobrado, lavagens.data))
})()