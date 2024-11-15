const contadorValor = document.getElementById("contador");

let contador = 0;

function atualizarContador(){
    contadorValor.innerHTML = contador;
}

function somar(){
    contador = contador + 1;
    atualizarContador();
}

function subtrair(){
    contador = contador - 1;
    atualizarContador();
}