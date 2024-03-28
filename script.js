function MeuEscopo() {
    const form = document.querySelector(".formulario");
    const result = document.querySelector("#resultado");

    form.onsubmit = function (evento) {
        evento.preventDefault();
        let peso = parseFloat(document.querySelector("#peso").value);
        let altura = parseFloat(document.querySelector("#altura").value);

        let IMC = (altura * altura)/peso;
        console.log("enviado");

        if(IMC < 18.5)
        {
            result.innerHTML = "<br><p id='resultadIMC'>Seu IMC é: " + IMC.toFixed(2) + " E você está abaixo do peso</p>";
        }
        else if(IMC >= 18.5 && IMC <= 24.9)
        {
            result.innerHTML = "<br><p id='resultadIMC'>Seu IMC é: " + IMC.toFixed(2) + " E Seu peso é normal</p>";
        }
        else if(IMC >= 25 && IMC <= 29.9)
        {
            result.innerHTML = "<br><p id='resultadIMC'>Seu IMC é: " + IMC.toFixed(2) + " Você está em sobrepeso</p>";
        }
        else if(IMC >= 30 && IMC <= 34.9)
        {
            result.innerHTML = "<br><p id='resultadIMC'>Seu IMC é: " + IMC.toFixed(2) + " E você está com obesidade grau 1</p>";
        }
        else if(IMC >= 35 && IMC <= 40.9)
        {
            result.innerHTML = "<br><p id='resultadIMC'>Seu IMC é: " + IMC.toFixed(2) + " E você está com obesidade grau 2</p>";
        }
        else
        {
            result.innerHTML = "<br><p id='resultadIMC'>Seu IMC é: " + IMC.toFixed(2) + " E você está com obesidade grau 3</p>";
        }

    };
}

MeuEscopo();