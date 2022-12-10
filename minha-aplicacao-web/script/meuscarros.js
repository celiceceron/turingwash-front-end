// CABEÇALHO
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
// CABEÇALHO


// CRIAÇÃO DOS CARDS
function criarCardCarro(fabricante, nome, ano) {

  const carCard = document.createElement('div');
  carCard.classList.add('card')
  const wrapper = document.querySelector('.wrapper')

  //INNERHTML SUBSCREVE TUDO, PARA CONCATENAR INFORMAÇŌES USAR .innerHTML +=
  carCard.innerHTML =
    `
    <div class="card">
    <div class="topo-do-card">
      <h3 class="card-title" id="titulo">${fabricante} + ${nome}</h3>
    </div>
    <!--/topo-do-card -->
    <h3 class="card-title" id="ano">${ano}</h3>
    <button class="card-btn">Excluir carro</button>
  </div>
`
  wrapper.appendChild(carCard)
}
// CRIAÇÃO DOS CARDS

(function loadCarCard() {
  carros.forEach(carro => 
    criarCard(carro.fabricante, carro.nome, carro.nota))
})()
