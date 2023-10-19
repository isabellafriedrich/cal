function calcular() {
    const R = Number(document.querySelector("#raio").value); // Raio
    const ω = Number(document.querySelector("#velocidadeAngular").value); // Velocidade Angular
    const T = Number(document.querySelector("#tempo").value); // Tempo

    const v = ω * R ; // Velocidade
    const a = ω / T ;  // Aceleração

    document.querySelector("#velocidadefinal").textContent = "Velocidade:" + y.toFixed(2);
    document.querySelector("#aceleração").textContent = "Aceleração: " + x.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#Calcule!");
    calcularButton.addEventListener("click", calcular);
});