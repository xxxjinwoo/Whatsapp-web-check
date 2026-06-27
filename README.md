# WhatsApp Web Status Checker 🟢

Un site web pour vérifier le statut en ligne de contacts WhatsApp Web.

## 🎯 Fonctionnalités

- ✅ Interface utilisateur moderne et intuitive
- ✅ Vérification du statut en ligne/hors ligne
- ✅ Affichage du dernier vu
- ✅ Support du format international (+33...)
- ✅ Design responsive (mobile, tablet, desktop)
- ✅ Validation des numéros de téléphone
- ✅ Thème sombre élégant

## 📁 Structure du projet

```
Whatsapp-web-check/
├── index.html      # Fichier HTML principal
├── style.css       # Feuille de style
├── script.js       # Logique JavaScript
└── README.md       # Ce fichier
```

## 🚀 Installation

### Méthode 1 : Utilisation directe
1. Clonez le dépôt :
```bash
git clone https://github.com/xxxjinwoo/Whatsapp-web-check.git
cd Whatsapp-web-check
```

2. Ouvrez `index.html` dans votre navigateur

### Méthode 2 : Avec un serveur web
```bash
# Python 3
python -m http.server 8000

# Ou avec Node.js (http-server)
npx http-server
```

Puis accédez à `http://localhost:8000`

## 💻 Utilisation

1. Entrez un numéro de téléphone au format international (ex: +33612345678)
2. Cliquez sur "Vérifier le statut"
3. Attendez la réponse
4. Consultez le résultat (en ligne/hors ligne)

## ⚙️ Configuration

### Ajouter une vraie API WhatsApp

Actuellement, le script simule une réponse. Pour intégrer une vraie API :

1. **Avec WhatsApp Cloud API** :
```javascript
// Remplacez la fonction checkWhatsAppStatus dans script.js
async function checkWhatsAppStatus(phoneNumber) {
    const response = await fetch('https://graph.instagram.com/v18.0/...', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_TOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phone_number: phoneNumber
        })
    });
    return await response.json();
}
```

2. **Avec un backend personnel** :
```javascript
async function checkWhatsAppStatus(phoneNumber) {
    const response = await fetch('/api/check-status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber })
    });
    return await response.json();
}
```

## 📋 Prérequis

- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune dépendance externe requise

## 🔒 Confidentialité & Légalité

⚠️ **Important** :
- Respectez la vie privée d'autrui
- Utilisez uniquement avec le consentement des personnes
- Vérifiez la légalité dans votre juridiction
- Les données ne sont pas conservées

## 🛠️ Technologies utilisées

- **HTML5** : Structure
- **CSS3** : Style et animations
- **JavaScript (Vanilla)** : Logique

## 📱 Responsive Design

Le site s'adapte à tous les appareils :
- 📱 Mobile (< 600px)
- 📱 Tablet (600px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🎨 Personnalisation

### Modifier les couleurs

Dans `style.css`, changez les valeurs CSS personnalisées :
```css
:root {
    --primary-color: #25d366;        /* Couleur principale */
    --dark-bg: #0a0a0a;              /* Fond sombre */
    --card-bg: #1e1e1e;              /* Fond des cartes */
    --text-light: #e0e0e0;           /* Texte clair */
    --success-color: #4caf50;        /* Couleur succès */
    --error-color: #f44336;          /* Couleur erreur */
}
```

## 🐛 Débogage

Ouvrez la console du navigateur (F12) pour voir les logs :
```javascript
console.log('WhatsApp Status Checker initialized');
```

## 📝 Licence

Ce projet est fourni à titre éducatif.

## 👨‍💻 Auteur

**xxxjinwoo**
- GitHub: [@xxxjinwoo](https://github.com/xxxjinwoo)

## 🤝 Contribution

Les contributions sont bienvenues ! Créez une Pull Request avec vos améliorations.

## 📞 Support

Pour toute question ou problème, ouvrez une [issue](https://github.com/xxxjinwoo/Whatsapp-web-check/issues).

---

**Version** : 1.0.0  
**Dernière mise à jour** : 2026-06-27
