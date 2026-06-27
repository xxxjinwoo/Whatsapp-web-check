// Vérification du numéro de ban WhatsApp
async function checkBan() {
    const phoneInput = document.getElementById('phoneInput');
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    
    // Validation du format
    const phone = phoneInput.value.trim();
    
    if (!phone) {
        showError('Veuillez entrer un numéro de téléphone');
        return;
    }
    
    if (!isValidPhone(phone)) {
        showError('Format de numéro invalide. Utilisez le format: +33612345678');
        return;
    }
    
    // Afficher le chargement
    resultContent.innerHTML = '<div style="text-align: center;"><div class="loading"></div><p>Vérification en cours...</p></div>';
    resultDiv.style.display = 'block';
    
    try {
        // Simuler une vérification (à remplacer par une vraie API)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Résultat simulé basé sur le numéro
        const status = getSimulatedStatus(phone);
        
        displayResult(resultContent, phone, status);
    } catch (error) {
        showError('Erreur lors de la vérification. Veuillez réessayer.');
        console.error(error);
    }
}

// Valider le format du numéro
function isValidPhone(phone) {
    // Format: +33612345678 (avec + et 10-15 chiffres)
    const phoneRegex = /^\+\d{10,15}$/;
    return phoneRegex.test(phone);
}

// Simuler le statut du ban (à remplacer par une vraie vérification)
function getSimulatedStatus(phone) {
    // Générer un hash basé sur le numéro pour consistance
    let hash = 0;
    for (let i = 0; i < phone.length; i++) {
        hash = ((hash << 5) - hash) + phone.charCodeAt(i);
        hash = hash & hash;
    }
    
    const random = Math.abs(hash) % 100;
    
    if (random < 5) {
        return 'banned'; // 5% de chance d'être banni
    } else if (random < 15) {
        return 'warning'; // 10% de chance d'avertissement
    } else {
        return 'active'; // 85% de chance d'être actif
    }
}

// Afficher le résultat
function displayResult(resultContent, phone, status) {
    const resultDiv = document.getElementById('result');
    let icon, title, message, className;
    
    switch (status) {
        case 'banned':
            icon = '❌';
            title = 'Compte Banni';
            message = 'Votre numéro WhatsApp a été banni. Contactez le support WhatsApp pour plus d\'informations.';
            className = 'status-banned';
            break;
        case 'warning':
            icon = '⚠️';
            title = 'Avertissement';
            message = 'Votre compte est signalé avec un avertissement. Soyez prudent avec vos activités.';
            className = 'status-warning';
            break;
        case 'active':
            icon = '✅';
            title = 'Compte Actif';
            message = 'Votre numéro WhatsApp est actif et en bon état.';
            className = 'status-active';
            break;
    }
    
    resultDiv.className = `result-section ${className}`;
    resultDiv.style.display = 'block';
    
    resultContent.innerHTML = `
        <div class="result-content">
            <div class="result-icon">${icon}</div>
            <div class="result-text">
                <h3>${title}</h3>
                <p>${message}</p>
                <small style="color: #666; margin-top: 10px;">Numéro vérifié: ${phone}</small>
            </div>
        </div>
    `;
}

// Afficher une erreur
function showError(message) {
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    
    resultDiv.className = 'result-section status-warning';
    resultDiv.style.display = 'block';
    
    resultContent.innerHTML = `
        <div class="result-content">
            <div class="result-icon">⚠️</div>
            <div class="result-text">
                <h3>Erreur</h3>
                <p>${message}</p>
            </div>
        </div>
    `;
}

// Permettre l'entrée avec la touche Entrée
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phoneInput');
    phoneInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkBan();
        }
    });
});

// Exemple: Auto-remplir pour les tests (à supprimer en production)
window.fillExample = function() {
    document.getElementById('phoneInput').value = '+33612345678';
    checkBan();
};
