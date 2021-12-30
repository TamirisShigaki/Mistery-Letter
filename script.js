window.onload = function () {
  //! Requisito 3

  let botaoCarta = document.querySelector('#criar-carta');
  botaoCarta.addEventListener('click', geraCarta);
  let inputCarta = document.querySelector('#carta-texto');
  let pTextoGerado = document.querySelector('#carta-gerada');

  function geraCarta() {
    let palavra = inputCarta.value.split(' ');
    console.log(palavra);
    for (let i = 0; i < palavra.length; i += 1) {
      let span = document.createElement('span');
      span.innerText = palavra[i];
      pTextoGerado.appendChild(span);
    }
  }

  //* requisito 4 foi automatico

  //! Requisito 5

  let verificarInput = document.querySelector('#criar-carta');
  verificarInput.addEventListener('click', verificar);

  function verificar() {
    if (inputCarta.value === '' || inputCarta.value === ' ') {
      pTextoGerado.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      pTextoGerado.innerText = '';
      geraCarta();
    }
  }
};
