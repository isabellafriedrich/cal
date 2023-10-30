function calcular() {
    // Obtém o valor do raio do elemento de entrada.
    // A função parseFloat analisa um argumento (convertendo-o para uma string primeiro caso necessário) e retorna um número de ponto flutuante (número decimal).
    // Document.querySelector: Retorna o primeiro elemento dentro do documento.
    const r = parseFloat(document.querySelector("input[name='raio']").value);

    // Obtém o valor da velocidade do elemento de entrada.
    const v = parseFloat(document.querySelector("input[name='velocidade']").value);

    // Calcula a aceleração centrípeta usando a fórmula A = r * v^2.
    const aceleracaoCentripeta = r * Math.pow(v, 2);

    // Exibe o resultado no elemento HTML com o ID "aceleracaoCentripeta".
    // document.getElementById: Retorna a referência do elemento através do seu ID.
    // innerText: retorna apenas o texto. Utiliza-se quando queremos buscar apenas o texto visível disponível no elemento.
    document.getElementById("aceleracaoCentripeta").innerText = "Aceleração Centrípeta: " + aceleracaoCentripeta.toFixed(2) + " m/s²";
}
