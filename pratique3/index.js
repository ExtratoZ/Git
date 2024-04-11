function calculeArea() {
    let base = prompt('Digite o valor da base: (Apenas valores númericos)');
    let altura = prompt('Digite o valor da altura: (Apenas valores númericos)');

    if (isNaN(base) || isNaN(altura)) {
        alert('Por favor insira valores númericos válidos');
        return;
    }

    let area = base * altura;

    return area;
}

let areaCalculada = calculeArea();

if (areaCalculada !== undefined) {
    alert('O valor da area é de: ' + areaCalculada);
}