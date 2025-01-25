const textElement = document.getElementById("animated-text");
const text = textElement.textContent; // Obtém o texto diretamente do h1
textElement.textContent = ""; // Limpa o conteúdo para iniciar o efeito
let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.textContent += text[index];
        index++;
        setTimeout(typeEffect, 100); // Ajuste o tempo para controlar a velocidade
    }
}

// Torna o texto visível e inicia o efeito quando a página é carregada
window.onload = () => {
    textElement.style.visibility = "visible";
    typeEffect();
};