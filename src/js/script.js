/*
 OBJETIVO 1 - quando clicarmos na seta avançar temos que mostrar o próximo cartão da lista
  passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar 
  passo 2 - Dar um jeito de identificar o clique do usuário na seta avançar
  passo 3 - fazer aparecer o próximo cartão da lista 
  passo 4 - buscar o cartão que está selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
  passo 1 - Dar um jeito de pegar o elemento HTML da seta voltar 
  passo 2 - Dar um jeito de identificar o clique do usuário na seta voltar
  passo 3 - fazer aparecer o cartão anterior da lista 
  passo 4 - buscar o cartão que está selecionado e esconder

*/

const btnAvancar_0 = document.getElementById('btnAvancar-0');
const btnVoltar_0 = document.getElementById('btnVoltar-0');
const cartoes_0 = document.querySelectorAll('.cartao-0');
let cartaoAtual_0 = 0;


function esconderCartaoSelecionado_0() {
    const cartaoSelecionado_0 = document.querySelector('.selecionado-0');
    cartaoSelecionado_0.classList.remove('selecionado-0');
}

function mostrarCartao_0(indiceCartao_0) {
    (cartoes_0[indiceCartao_0].classList.add('selecionado-0'));
}

btnAvancar_0.addEventListener('click', function () {
    if (cartaoAtual_0 === cartoes_0.length - 1) {
        return
    }
    esconderCartaoSelecionado_0();

    cartaoAtual_0++;
    mostrarCartao_0(cartaoAtual_0);
});

btnVoltar_0.addEventListener('click', function () {
    if (cartaoAtual_0 === 0) {
        return
    }
    esconderCartaoSelecionado_0();

    cartaoAtual_0--;
    mostrarCartao_0(cartaoAtual_0);
});







const btnAvancar_1 = document.getElementById('btnAvancar-1');
const btnVoltar_1 = document.getElementById('btnVoltar-1');
const cartoes_1 = document.querySelectorAll('.cartao-1');
let cartaoAtual_1 = 0;


function esconderCartaoSelecionado_1() {
    const cartaoSelecionado_1 = document.querySelector('.selecionado-1');
    cartaoSelecionado_1.classList.remove('selecionado-1');
}

function mostrarCartao_1(indiceCartao_1) {
    (cartoes_1[indiceCartao_1].classList.add('selecionado-1'));
}

btnAvancar_1.addEventListener('click', function () {
    if (cartaoAtual_1 === cartoes_1.length - 1) {
        return
    }
    esconderCartaoSelecionado_1();

    cartaoAtual_1++;
    mostrarCartao_1(cartaoAtual_1);
});

btnVoltar_1.addEventListener('click', function () {
    if (cartaoAtual_1 === 0) {
        return
    }
    esconderCartaoSelecionado_1();

    cartaoAtual_1--;
    mostrarCartao_1(cartaoAtual_1);
});









const btnAvancar_2 = document.getElementById('btnAvancar-2');
const btnVoltar_2 = document.getElementById('btnVoltar-2');
const cartoes_2 = document.querySelectorAll('.cartao-2');
let cartaoAtual_2 = 0;


function esconderCartaoSelecionado_2() {
    const cartaoSelecionado_2 = document.querySelector('.selecionado-2');
    cartaoSelecionado_2.classList.remove('selecionado-2');
}

function mostrarCartao_2(indiceCartao_2) {
    (cartoes_2[indiceCartao_2].classList.add('selecionado-2'));
}

btnAvancar_2.addEventListener('click', function () {
    if (cartaoAtual_2 === cartoes_2.length - 1) {
        return
    }
    esconderCartaoSelecionado_2();

    cartaoAtual_2++;
    mostrarCartao_2(cartaoAtual_2);
});

btnVoltar_2.addEventListener('click', function () {
    if (cartaoAtual_2 === 0) {
        return
    }
    esconderCartaoSelecionado_2();

    cartaoAtual_2--;
    mostrarCartao_2(cartaoAtual_2);
});