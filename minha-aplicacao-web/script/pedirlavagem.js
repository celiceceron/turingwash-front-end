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

})() 
// FUNÇÃO AUTO-INVOCAVEL (IIFE{Immediately invoked function expression})
// CHECAR SE ESTÁ LOGADO
// CABEÇALHO


// CRIAÇÃO DOS CARDS
function criarCard(nome, nota, qtdAvaliacoes, valorCobrado) {

  const washerCard = document.createElement('div');
  washerCard.classList.add('card')
  const wrapper = document.querySelector('.wrapper')

  //INNERHTML SUBSCREVE TUDO, PARA CONCATENAR INFORMAÇŌES USAR .innerHTML +=
  washerCard.innerHTML =
    `
<div class="valor">R$ ${valorCobrado}</div>

        <div class="topo-do-card">
          <img
            src="https://raw.githubusercontent.com/ituring-repo/bootcamp-full-stack-developer-tarefas-t2/master/mes-2-dominando-frontend/tarefa-semana-2/imagens-projeto/profile.png"
            alt="imagem de perfil">

          <h3 class="card-title" id="titulo">${nome}</h3>
        </div class="topo-do-card">
        <h3 class="card-nota" id="nota">Nota ${nota} <h3 class="card-nota" id="avaliacoes">(${qtdAvaliacoes} avaliações)</h3></h3>
        <h4 class="card-content">Ver avaliações</h4>
        <button class="card-btn">Lavar meu carro</button>
`
  wrapper.appendChild(washerCard)
}
// CRIAÇÃO DOS CARDS
var lavadores = [{
  "nome": "Matheus Oliveira",
  "nota": 4.3,
  "qtdAvaliacoes": 783,
  "valorCobrado": 90
},
{
  "nome": "Pedro Sampaio",
  "nota": 4.1,
  "qtdAvaliacoes": 801,
  "valorCobrado": 60
},
{
  "nome": "João Pereira",
  "nota": 4.5,
  "qtdAvaliacoes": 998,
  "valorCobrado": 80
},
{
  "nome": "Joana Santos",
  "nota": 4.7,
  "qtdAvaliacoes": 489,
  "valorCobrado": 75
},
];

(function loadWasherCard() {
  lavadores.forEach(lavador =>
    criarCard(lavador.nome, lavador.nota, lavador.qtdAvaliacoes, lavador.valorCobrado))
})()

