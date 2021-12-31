window.onload = function () {
  //! Requisito 3, 5, 16 e 18

  let botaoCarta = document.querySelector('#criar-carta');
  botaoCarta.addEventListener('click', geraCarta);
  let inputCarta = document.querySelector('#carta-texto');
  let pTextoGerado = document.querySelector('#carta-gerada');

  let estilo = ['newspaper', 'magazine1', 'magazine2'];
  let tamanho = ['medium', 'big', 'reallybig'];
  let rotacao = ['rotateleft', 'rotateright'];
  let inclinacao = ['skewleft', 'skewright'];

  function styleClass(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function geraCarta() {
    let palavra = inputCarta.value.split(' ');
    console.log(palavra);
    if (inputCarta.value === '' || inputCarta.value === ' ') {
      pTextoGerado.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      pTextoGerado.innerText = '';
      let contPalavras = document.querySelector('#carta-contador');
      contPalavras.innerText = palavra.length;
      for (let i = 0; i < palavra.length; i += 1) {
        let span = document.createElement('span');
        span.innerText = palavra[i];
        span.classList.add(
          estilo[styleClass(0, 3)],
          tamanho[styleClass(0, 3)],
          rotacao[styleClass(0, 2)],
          inclinacao[styleClass(0, 2)]
        );
        pTextoGerado.appendChild(span);
      }
    }
  }

  //* requisito 4 foi automático

  //! Requisito 17

  let mudarPalavra = document.querySelector('#carta-gerada');
  mudarPalavra.addEventListener('click', mudarEstilo);

  function mudarEstilo(evento) {
    evento.target.removeAttribute('class');
    evento.target.classList.add(
      estilo[styleClass(0, 3)],
      tamanho[styleClass(0, 3)],
      rotacao[styleClass(0, 2)],
      inclinacao[styleClass(0, 2)]
    );
  }
};
