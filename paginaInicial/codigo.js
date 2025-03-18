// Função para formatar a data e hora no formato desejado
function formatarDataHora(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

// Função para atualizar a data e hora na página
function atualizarDataHora() {
    const dataHoraAtual = new Date();
    const dataHoraFormatada = formatarDataHora(dataHoraAtual);
    document.getElementById('dataHora').textContent = `Data e Hora: ${dataHoraFormatada}`;
}

// Atualiza a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);

// Exibe a data e hora imediatamente ao carregar a página
atualizarDataHora();