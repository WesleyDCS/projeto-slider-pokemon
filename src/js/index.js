// objetivo 1 mostrar o proximo cartao ao clicar na seta avançar
// passo 1:pegar o elemento HTML da seta avançar

// passo 2:identificar o clique do usuario na seta avançar

// passo 3:fazer aparecer o proximo cartao

// passo 4:buscar o cartao que está selecionado e esconder

const btnAvancar = document.getElementById("btn-avancar");

const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0;

const cartoes = document.querySelectorAll(".cartao");

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return; //guard clause
  esconderCartaoSelecionado();
  cartaoAtual++;
  mostrarCartao();
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return; //guard clause
  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao();
});
