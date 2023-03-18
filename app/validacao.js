function verificaChuteValido(chute) {
  const numero = +chute

  if (chuteInvalido(numero)){
   elementChute.innerHTML += '<div> Valor Inválido!!<div/> '
   return
  }

  if(numeroDiferenteQuePermitido(numero)) {
    elementChute.innerHTML += `<div> Valor Inválido!! <br/> Fale um número entre ${menorvalor} e ${maiorvalor}<div/> ` 
    return   
  }

  if (numero === numeroSecreto ) {
    document.body.innerHTML = `
    <h2>Você acertou!!<h2/>
    <h3> Número secreto era... </br> <span class="box">${numeroSecreto}<span/></h3>
    
    <butoon id="jogar-novamente" class="btn-jogar">Recomeçar</butoon> 
    `
  } else if (numero > numeroSecreto) {
    elementChute.innerHTML +=
    `
    <div class="dica" > número secreto é menor <i class="fa-solid fa-arrow-down-wide-short"></i> </div>
    `
  } else {
    elementChute.innerHTML +=
    `
    <div class="dica"> número secreto é maior <i class="fa-solid fa-arrow-up-wide-short"></i> </div>
    `
  };

}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroDiferenteQuePermitido(numero){
  return numero > maiorvalor || numero < menorvalor
} 

document.body.addEventListener('click', event => {
  if (event.target.id == "jogar-novamente") {
    window.location.reload()
  }
})


