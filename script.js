// Função para abrir modal
function openModal(event) {
    event.preventDefault();
    document.getElementById('modalTrabalho').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal
function closeModal() {
    document.getElementById('modalTrabalho').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fechar modal clicando fora
window.onclick = function(event) {
    var modal = document.getElementById('modalTrabalho');
    if (event.target == modal) {
        closeModal();
    }
}

// Função para abas
function openTab(evt, tabName) {
    var i, tabcontent, tabbtns;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tabbtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabbtns.length; i++) {
        tabbtns[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Função para cards expansíveis
function toggleCard(cardId) {
    var details = document.getElementById('details-' + cardId);
    var card = document.getElementById('card-' + cardId);
    var btn = card.querySelector('.btn-card i');
    
    if (details.style.maxHeight) {
        details.style.maxHeight = null;
        card.classList.remove('expanded');
        btn.className = 'fas fa-chevron-down';
    } else {
        details.style.maxHeight = details.scrollHeight + "px";
        card.classList.add('expanded');
        btn.className = 'fas fa-chevron-up';
    }
}

// Função para filtro de escolas
function mostrarEscola() {
    var select = document.getElementById('escolaSelect');
    var value = select.value;
    
    // Esconder todas
    var infos = document.getElementsByClassName('escola-info');
    for (var i = 0; i < infos.length; i++) {
        infos[i].classList.remove('active');
    }
    
    // Mostrar a selecionada
    if (value) {
        document.getElementById('info-' + value).classList.add('active');
    }
}

// Inicializar escondendo todos os detalhes dos cards
window.onload = function() {
    var details = document.getElementsByClassName('card-details');
    for (var i = 0; i < details.length; i++) {
        details[i].style.maxHeight = null;
    }
}