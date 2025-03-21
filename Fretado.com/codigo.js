// Essa função será chamada quando o botão "Calcular" for clicado. 
function calcular() {
    let quantPassageiros = Number(document.getElementById('n1').value)
    let quantDias = Number(document.getElementById('n2').value)
    let mensal

    if (quantPassageiros <= 0){
        document.getElementById("res").innerText = `Erro! a quantidade de pessoas não pode ser zero!`
        return
    }else if(quantPassageiros <= 49){
        mensal = quantPassageiros * quantDias * 4.9
    }else if(quantPassageiros <= 99){
        mensal = quantPassageiros * quantDias * 4.1
    }else if(quantPassageiros <= 149){
        mensal = quantPassageiros * quantDias * 3.8
    }else{
        mensal = quantPassageiros * quantDias * 3.6
    }
    
    // Exibe o resultado no HTML
    document.getElementById("res").innerHTML = `O custo do fretado será de: R$ ${mensal.toFixed(2)}`;
}