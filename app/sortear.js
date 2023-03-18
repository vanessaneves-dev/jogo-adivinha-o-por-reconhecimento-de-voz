const menorvalor = 10
const maiorvalor = 100
const numeroSecreto = geradorDeNumero()

function geradorDeNumero() {
  return parseInt(Math.random() * ( maiorvalor + 1 - menorvalor))
};

console.log(numeroSecreto);

const elementMenorValor = document.getElementById('menor-valor');
elementMenorValor.innerHTML = menorvalor

const elementMaiorValor = document.getElementById('maior-valor');
elementMaiorValor.innerHTML = maiorvalor

