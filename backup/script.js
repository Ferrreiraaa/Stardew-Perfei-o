document.addEventListener('DOMContentLoaded', () => {
    // Carrega o estado dos peixes do armazenamento local
    document.querySelectorAll('.fish').forEach(fish => {
        const capturedState = localStorage.getItem(fish.id);
        if (capturedState === 'captured') {
            fish.classList.add('captured');
        }
    });
});

function toggleFish(fishElement) {
    // Alterna a classe 'captured'
    fishElement.classList.toggle('captured');

    // Armazena o estado no armazenamento local
    const isCaptured = fishElement.classList.contains('captured');
    localStorage.setItem(fishElement.id, isCaptured ? 'captured' : 'notCaptured');
}

function clearAllFish() {
    // Remove todos os itens do armazenamento local
    localStorage.clear();

    // Remove a classe 'captured' de todos os peixes
    document.querySelectorAll('.fish').forEach(fish => {
        fish.classList.remove('captured');
    });
}


