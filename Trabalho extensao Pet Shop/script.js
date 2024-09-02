document.addEventListener('DOMContentLoaded', function() {
    preencherHorarios();
});

function preencherHorarios() {
    const selectHora = document.getElementById('hora');
    const horaInicio = 9;
    const horaFim = 18;
    
    for (let hora = horaInicio; hora <= horaFim; hora++) {
        const horario = String(hora).padStart(2, '0') + ':00';
        const option = document.createElement('option');
        option.value = horario;
        option.textContent = horario;
        selectHora.appendChild(option);
    }
}

document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const pet = document.getElementById('pet').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    const tabela = document.getElementById('tabela-agendamentos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).textContent = pet;
    novaLinha.insertCell(2).textContent = servico;
    novaLinha.insertCell(3).textContent = data;
    novaLinha.insertCell(4).textContent = hora;

    document.getElementById('form-agendamento').reset();
    preencherHorarios();
});


