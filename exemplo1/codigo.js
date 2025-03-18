// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')

// Essa função será chamada quando o botão "Somar" for clicado. 
function somar(){
    // Obtém os valores dos campos de entrada n1 e n2 e converte-os em números.
    // Realiza a operação de soma e atribui o resultado ao campo de entrada res.
    res.innerHTML += `<p>O resultado da soma entre ${n1.value} e ${n2.value} é ${Number(n1.value) + Number(n2.value)}</p>`
}
function subtrair(){
    // Obtém os valores dos campos de entrada n1 e n2 e converte-os em números.
    // Realiza a operação de soma e atribui o resultado ao campo de entrada res.
    res.innerHTML += `<p>O resultado da subtração entre ${n1.value} e ${n2.value} é ${Number(n1.value) - Number(n2.value)}</p>`
}
function multiplicar(){
    // Obtém os valores dos campos de entrada n1 e n2 e converte-os em números.
    // Realiza a operação de soma e atribui o resultado ao campo de entrada res.
    res.innerHTML += `<p>O resultado da multiplicação entre ${n1.value} e ${n2.value} é ${Number(n1.value) * Number(n2.value)}</p>`
}
function dividir(){
    if (Number(n2.value) === 0){
        res.innerHTML += `<p>Erro! Não é possível ividir um número por zero`
    } else {
        res.innerHTML += `<p>O resultado da divisão entre ${n1.value} e ${n2.value} é ${Number(n1.value) / Number(n2.value)}</p>`
    }
}
function raiz() {
    let numero = Number(n1.value);
    if (numero < 0) {
        res.innerHTML += `<p>Erro! Não é possível calcular a raiz de um número negativo</p>`;
    } else {
        res.innerHTML += `<p>A raiz quadrada de ${numero} é ${Math.sqrt(numero)}</p>`;
    }
}
function potencia() {
    let base = Number(n1.value);
    let expoente = Number(n2.value);
    res.innerHTML += `<p>${base} elevado a ${expoente} é ${Math.pow(base, expoente)}</p>`;
}
function limpar() {
    res.innerHTML = "";
}