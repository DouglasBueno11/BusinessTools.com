// Essa função será chamada quando o botão "Calcular" for clicado. 
function calcular() {
    let salarioBruto = Number(document.getElementById('n1').value)
    let horasExtrasNormais = Number(document.getElementById('n2').value)
    let horasExtrasFinaisSemana = Number(document.getElementById('n3').value)

    // Calcula o valor da hora trabalhada
    let valorHora = salarioBruto / 200;

    // Calcula o valor das horas extras normais
    let totalHorasExtrasNormais = horasExtrasNormais * valorHora;

    // Calcula o valor das horas extras de fim de semana com acréscimo de 50%
    let totalHorasExtrasFinaisSemana = horasExtrasFinaisSemana * valorHora * 1.5;

    // Soma os valores das horas extras
    let totalReceber = totalHorasExtrasNormais + totalHorasExtrasFinaisSemana;

    // Exibe o resultado no HTML
    res.innerHTML = `<p>Total a receber: R$ ${totalReceber}</p>`;
}
function limpar() {
    res.innerHTML = "";
}