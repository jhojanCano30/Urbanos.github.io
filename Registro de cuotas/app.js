let saldoPendiente = 6000000.00;
let tasaInteres = 2.9 / 100;
let totalIntereses = 0.00;
let totalCapital = 0.00;
let mesActual = 1;

function registrarCuota() {
    const cuota = 300000.00;
    const intereses = saldoPendiente * tasaInteres;
    const capital = cuota - intereses;

    saldoPendiente -= capital;
    totalIntereses += intereses;
    totalCapital += capital;

    document.getElementById('capitalPagado').innerText = totalCapital.toFixed(2);
    document.getElementById('interesesPagados').innerText = totalIntereses.toFixed(2);
    document.getElementById('saldoPendiente').innerText = saldoPendiente.toFixed(2);

    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${mesActual}</td>
        <td>${cuota.toFixed(2)}</td>
        <td>${intereses.toFixed(2)}</td>
        <td>${capital.toFixed(2)}</td>
        <td>${saldoPendiente.toFixed(2)}</td>
    `;
    document.getElementById('tablaCuotas').appendChild(fila);

    mesActual++;
}