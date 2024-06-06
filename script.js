document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#churrascoFormulario").addEventListener("submit", (evt) => {
        evt.preventDefault();

        const comAlcool = parseFloat(document.getElementById("inputComAlcool").value);
        const semAlcool = parseFloat(document.getElementById("inputSemAlcool").value);
        const criancas = parseFloat(document.getElementById("inputCriancas").value);

        const adultos = comAlcool + semAlcool;
        const pessoas = adultos + criancas;
        
        const carne = (0.4 * adultos + 0.2 * criancas).toFixed(2);
        const acompanhamentos = (0.2 * pessoas).toFixed(2);
        const cerveja = (2 * comAlcool).toFixed(2);
        const refrigerante = (0.5 * (semAlcool + criancas)).toFixed(2);
        const agua = (0.4 * pessoas).toFixed(2);

        document.getElementById("resultadoAdultos").textContent = `Adultos: ${adultos}`;
        document.getElementById("resultadoPessoas").textContent = `Pessoas: ${pessoas}`;
        document.getElementById("resultadoCarne").textContent = `Carne: ${carne} kg`;
        document.getElementById("resultadoAcompanhamentos").textContent = `Acompanhamentos: ${acompanhamentos} kg`;
        document.getElementById("resultadoCerveja").textContent = `Cerveja: ${cerveja} litros`;
        document.getElementById("resultadoRefrigerante").textContent = `Refrigerante: ${refrigerante} litros`;
        document.getElementById("resultadoAgua").textContent = `Água: ${agua} litros`;

        document.getElementById("dados").classList.add("segundaParte");
        document.getElementById("resultados").classList.remove("segundaParte");
    });

    document.querySelector("#recarregarButton").addEventListener("click", () => {
        location.reload();
    });
});