const sorvete = document.getElementById("sorvete");
const pontosTexto = document.getElementById("pontos");
const tempoTexto = document.getElementById("tempo");
const area = document.getElementById("areaJogo");

let pontos = 0;
let tempo = 30;

function moverSorvete(){

    const largura = area.clientWidth - 70;
    const altura = area.clientHeight - 70;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    sorvete.style.left = x + "px";
    sorvete.style.top = y + "px";
}

sorvete.addEventListener("click", () => {
    pontos++;
    pontosTexto.textContent = pontos;
    moverSorvete();
});

moverSorvete();

const mover = setInterval(moverSorvete, 900);

const contador = setInterval(() => {
    tempo--;
    tempoTexto.textContent = tempo;

    if(tempo <= 0){
        clearInterval(contador);
        clearInterval(mover);

        sorvete.style.display = "none";

        alert("Fim de jogo!\nVocê fez " + pontos + " pontos! 🍦");
    }

},1000);