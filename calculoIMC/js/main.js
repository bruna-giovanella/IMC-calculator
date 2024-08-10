document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = parseFloat(form.querySelector('#peso').value)
        const altura = parseFloat(form.querySelector('#altura').value)

        if (isNaN(peso) || isNaN(altura) || altura <= 0 || altura >= 3.5 || peso <= 0 || peso >= 600    ) {
            resultado.innerHTML = 'Por favor, insira valores válidos para peso e altura.';
            return;
        }

        const imc = peso / (altura**2)
        const imcArredondado = imc.toFixed(1)
        
        resultado.innerHTML = '';

        if (imc < 16) {
            resultado.innerHTML = `Seu IMC é de ${imcArredondado} e indica um estado de magreza grave.`;
        } else if (imc >= 16 && imc <= 16.9) {
            resultado.innerHTML = `Seu IMC é de ${imcArredondado} e indica um estado de magreza moderada.`;
        } else if (imc >= 17 && imc <= 18.5) {
            resultado.innerHTML = `Seu IMC é de ${imcArredondado} e indica um estado de magreza leve.`;
        } else if (imc >= 18.6 && imc <= 24.9) {
            resultado.innerHTML = `Seu IMC é de ${imcArredondado} e indica um peso ideal.`;
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `Seu IMC é de ${imcArredondado} e indica um estado de sobrepeso.`;
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `Seu IMC é de ${imcArredondado} e indica um estado de obesidade grau I.`;
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `Seu IMC é de ${imcArredondado} e indica um estado de obesidade grau II ou severa.`;
        } else if (imc > 40) {
            resultado.innerHTML = `Seu IMC é de ${imcArredondado} e indica um estado de obesidade grau III ou mórbida.`;
        }

    }

    form.addEventListener('submit', recebeEventoForm)
})
