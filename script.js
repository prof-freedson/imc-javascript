/*
Elaborar a função (Ricardo)*/



/*- declarar variáveis (Lia)

- estrutura condicional (Felix)
    - imc < 19 : magreza
    - imc >= 19 e imc < 24 : peso normal
    - imc >= 24 e imc < 29 : acima do peso
    - imc >= 29 : obesidade

- exibir o resultado e a imagem correspondente

*/
function calcIMC() {
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var imc = document.getElementById('imc')
    var imagem = document.getElementById('imagem')
    var sit = document.getElementById('sit')
    var res = peso / (altura * altura)

    
    if (res < 19) {
        imagem.innerHTML = `<img src="magreza.png">`
        sit.innerHTML = '<h1>Magreza<h1>'
    } else if (res >= 19 && res < 24) {
        imagem.innerHTML = `<img src="normal.png">`
        sit.innerHTML = '<h1>Peso Normal<h1>'
    } else if (res >= 24 && res < 29) {
        imagem.innerHTML = `<img src="sobrepeso.png">`
        sit.innerHTML = '<h1>Sobrepeso<h1>'
    } else {
        imagem.innerHTML = `<img src="obesidade.png">`
        sit.innerHTML = '<h1>Obesidade<h1>'
    }
        imc.innerHTML = `<h1>Resultado do IMC: ${res}</h1>`
}