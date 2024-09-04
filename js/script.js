document.querySelectorAll('.hub-option').forEach(option => {
    option.addEventListener('click', () => {
        option.classList.add('clicked');
        setTimeout(() => {
            option.classList.remove('clicked');
        }, 300);
    });
});
//peixes
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

//plantação
function togglePlantacao(plantacaoElement) {
    plantacaoElement.classList.toggle('planted');
}
// Função para alternar o estado das plantações e atualizar o armazenamento local
function togglePlantacao(plantacaoElement) {
    const id = plantacaoElement.id;
    plantacaoElement.classList.toggle('planted');

    // Atualiza o armazenamento local
    let planted = JSON.parse(localStorage.getItem('plantedPlants')) || {};
    if (plantacaoElement.classList.contains('planted')) {
        planted[id] = true;
    } else {
        delete planted[id];
    }
    localStorage.setItem('plantedPlants', JSON.stringify(planted));
}

// Função para carregar o estado das plantações do armazenamento local
function loadPlantacoes() {
    const planted = JSON.parse(localStorage.getItem('plantedPlants')) || {};
    for (const id in planted) {
        if (planted[id]) {
            const plantacaoElement = document.getElementById(id);
            if (plantacaoElement) {
                plantacaoElement.classList.add('planted');
            }
        }
    }
}

// Carrega o estado das plantações ao iniciar
document.addEventListener('DOMContentLoaded', loadPlantacoes);
