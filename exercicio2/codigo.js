// Essa função será chamada quando o botão "Calcular" for clicado. 
function calcular() {
    let salarioInicial = parseFloat(document.getElementById('n1').value)
    let aumento
    let novoSalario

    if (salarioInicial <= 1200){
        aumento = salarioInicial * 0.16
    }else if(salarioInicial <= 2100){
        aumento = salarioInicial * 0.13
    }else if(salarioInicial <= 3000){
        aumento = salarioInicial * 0.10
    }else{
        aumento = salarioInicial * 0.06
    }
    
    // Soma os valores horas extras
    novoSalario = salarioInicial + aumento;

    // Exibe o resultado no HTML
    document.getElementById("res").innerHTML = `Total a receber: R$ ${novoSalario}`;
}