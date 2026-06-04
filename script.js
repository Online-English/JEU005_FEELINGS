// --- BASE DE DONNÉES CONSOLIDÉE (60 Sentiments & Émotions sur 3 Niveaux) ---
const fruitsData = [
    // NIVEAU 1 (20 émotions de base - Accessible immédiatement)
    { en: "Happy", fr: "Heureux / Joyeux", emoji: "😊", level: 1 },
    { en: "Sad", fr: "Triste", emoji: "😢", level: 1 },
    { en: "Angry", fr: "En colère", emoji: "😡", level: 1 },
    { en: "Scared", fr: "Effrayé / Peureux", emoji: "😨", level: 1 },
    { en: "Tired", fr: "Fatigué", emoji: "🥱", level: 1 },
    { en: "Surprised", fr: "Surpris", emoji: "😲", level: 1 },
    { en: "Excited", fr: "Excité / Enthousiaste", emoji: "🤩", level: 1 },
    { en: "Bored", fr: "Ennuyé / Blasé", emoji: "😑", level: 1 },
    { en: "Proud", fr: "Fier", emoji: "😎", level: 1 },
    { en: "Calm", fr: "Calme / Serein", emoji: "🧘", level: 1 },
    { en: "Worried", fr: "Inquiet / Soucieux", emoji: "😟", level: 1 },
    { en: "Shy", fr: "Timide", emoji: "😳", level: 1 },
    { en: "Jealous", fr: "Jaloux", emoji: "😒", level: 1 },
    { en: "Brave", fr: "Courageux", emoji: "🦁", level: 1 },
    { en: "Sick", fr: "Malade", emoji: "🤢", level: 1 },
    { en: "Hungry", fr: "Affamé / Avoir faim", emoji: "😋", level: 1 },
    { en: "Thirsty", fr: "Assoiffé / Avoir soif", emoji: "🥵", level: 1 },
    { en: "Hot", fr: "Avoir chaud", emoji: "🔥", level: 1 },
    { en: "Cold", fr: "Avoir froid", emoji: "🥶", level: 1 },
    { en: "In love", fr: "Amoureux", emoji: "😍", level: 1 },

    // NIVEAU 2 (20 émotions intermédiaires - Débloqué au Niveau joueur 5)
    { en: "Anxious", fr: "Anxieux / Angoissé", emoji: "😰", level: 2 },
    { en: "Confused", fr: "Confus / Perplexe", emoji: "😕", level: 2 },
    { en: "Disappointed", fr: "Déçu", emoji: "😞", level: 2 },
    { en: "Frustrated", fr: "Frustré", emoji: "😤", level: 2 },
    { en: "Grateful", fr: "Reconnaissant", emoji: "🙏", level: 2 },
    { en: "Lonely", fr: "Seul / Isolé", emoji: "👤", level: 2 },
    { en: "Nervous", fr: "Nerveux / Traqueur", emoji: "😬", level: 2 },
    { en: "Ashamed", fr: "Honteux", emoji: "😳", level: 2 },
    { en: "Hopeful", fr: "Plein d'espoir", emoji: "🕊️", level: 2 },
    { en: "Envious", fr: "Envieux", emoji: "👁️", level: 2 },
    { en: "Guilty", fr: "Coupable", emoji: "⚖️", level: 2 },
    { en: "Relieved", fr: "Soulagé", emoji: "😌", level: 2 },
    { en: "Curious", fr: "Curieux", emoji: "🧐", level: 2 },
    { en: "Confident", fr: "Confiant", emoji: "💪", level: 2 },
    { en: "Shocked", fr: "Choqué / Sidéré", emoji: "🤯", level: 2 },
    { en: "Exhausted", fr: "Épuisé / Exténué", emoji: "😩", level: 2 },
    { en: "Amused", fr: "Amusé", emoji: "🤭", level: 2 },
    { en: "Embarrassed", fr: "Gêné / Embarrassé", emoji: "😳", level: 2 },
    { en: "Content", fr: "Content / Satisfait", emoji: "🙂", level: 2 },
    { en: "Energetic", fr: "Énergique / Tonique", emoji: "⚡", level: 2 },

    // NIVEAU 3 (20 émotions avancées ou nuancées - Débloqué au Niveau joueur 10)
    { en: "Overwhelmed", fr: "Submergé / Dépassé", emoji: "🌊", level: 3 },
    { en: "Ecstatic", fr: "Extatique", emoji: "🤪", level: 3 },
    { en: "Melancholic", fr: "Mélancolique", emoji: "🍂", level: 3 },
    { en: "Devastated", fr: "Dévasté / Effondré", emoji: "💔", level: 3 },
    { en: "Apathetic", fr: "Apathique", emoji: "😐", level: 3 },
    { en: "Euphoric", fr: "Euphorique", emoji: "🚀", level: 3 },
    { en: "Nostalgic", fr: "Nostalgique", emoji: "⏳", level: 3 },
    { en: "Resentful", fr: "Rancunier / Amer", emoji: "😠", level: 3 },
    { en: "Compassionate", fr: "Compatissant", emoji: "❤️", level: 3 },
    { en: "Indifferent", fr: "Indifférent", emoji: "🤷", level: 3 },
    { en: "Bitter", fr: "Amer / Aigri", emoji: "🍋", level: 3 },
    { en: "Vulnerable", fr: "Vulnérable", emoji: "🛡️", level: 3 },
    { en: "Cynical", fr: "Cynique", emoji: "😏", level: 3 },
    { en: "Optimistic", fr: "Optimiste", emoji: "☀️", level: 3 },
    { en: "Pessimistic", fr: "Pessimiste", emoji: "🌧️", level: 3 },
    { en: "Skeptical", fr: "Sceptique", emoji: "🤨", level: 3 },
    { en: "Affectionate", fr: "Affectueux", emoji: "🥰", level: 3 },
    { en: "Hostile", fr: "Hostile", emoji: "👿", level: 3 },
    { en: "Bewildered", fr: "Ébahi / Déboussolé", emoji: "🌀", level: 3 },
    { en: "Serene", fr: "Serein", emoji: "🌊", level: 3 }
];

// --- ÉTATS GÉNÉRAUX & STATISTIQUES ---
let currentStreak = 0, maxStreak = 0, totalPoints = 0;
let highScores = { quiz: 0, speak: 0, timeattack: 0 };
let favoriteFruits = [];
let errorHistory = []; 
let unlockedBadges = []; 
let audioSpeed = 1.0;
let filterOnlyFavs = false;
let searchDirection = 'EN_FR';
let globalAudioCtx = null; // Instance unique partagée 
let selectedVocabularyLevel = 1; 

// --- CONFIGURATION DES BADGES ---
const badgesDatabase = [
    { id: "first_perfect", title: "Sans Faute !", desc: "Faire un 10/10 en QCM ou Writing", icon: "🏅", color: "bg-yellow-500" },
    { id: "streak_15", title: "Inarrêtable", desc: "Atteindre une série de 15 bonnes réponses", icon: "🔥", color: "bg-orange-500" },
    { id: "time_20", title: "Chasseur de Chrono", desc: "Marquer 20 points en Time Attack", icon: "⚡", color: "bg-cyan-500" },
    { id: "polyglotte", title: "Polyglotte", desc: "Débloquer le niveau 2 de vocabulaire", icon: "🗣️", color: "bg-purple-500" }
];

// --- ALGORITHME DE RÉPÉTITION ESPACÉE ---
function getNextExerciseWord() {
    const currentLevelWords = fruitsData.filter(f => f.level === parseInt(selectedVocabularyLevel));
    const currentLevelErrors = errorHistory.filter(err => err.level === parseInt(selectedVocabularyLevel));

    if (currentLevelErrors.length > 0 && Math.random() < 0.35) {
        return currentLevelErrors[Math.floor(Math.random() * currentLevelErrors.length)];
    }
    return currentLevelWords[Math.floor(Math.random() * currentLevelWords.length)];
}

// --- LOGIQUE DES BADGES ---
function checkAndUnlockBadge(badgeId) {
    if (!unlockedBadges.includes(badgeId)) {
        unlockedBadges.push(badgeId);
        localStorage.setItem('oe_unlocked_badges_feel', JSON.stringify(unlockedBadges));
        triggerConfetti();
        if(typeof renderBadgesUI === 'function') renderBadgesUI();
    }
}

// --- MODULE AUDIO DE HAUTE PRÉCISION (CORRIGÉ) ---
let preferredVoice = null;

// Fonction de sélection de la meilleure voix disponible sur l'appareil
function initVoices() {
    if (!('speechSynthesis' in window)) return;
    
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) return; // Le navigateur n'est pas encore prêt

    // Stratégie de sélection en 3 étapes :
    // 1. On cherche une voix anglaise moderne (Google, Natural, Neural ou Premium)
    let bestVoice = voices.find(voice => 
        voice.lang.toLowerCase().startsWith('en') && 
        (voice.name.includes('Google') || voice.name.includes('Natural') || voice.name.includes('Neural') || voice.name.includes('Premium'))
    );

    // 2. Si pas trouvé, on cherche une voix anglaise qui n'est PAS une vieille voix "Desktop" de Microsoft
    if (!bestVoice) {
        bestVoice = voices.find(voice => 
            voice.lang.toLowerCase().startsWith('en') && !voice.name.includes('Desktop')
        );
    }

    // 3. En dernier recours, on prend la première voix anglaise standard qui vient
    if (!bestVoice) {
        bestVoice = voices.find(voice => voice.lang.toLowerCase().startsWith('en'));
    }

    // On mémorise la voix pour éviter de refaire la recherche à chaque clic
    if (bestVoice) {
        preferredVoice = bestVoice;
    }
}

// Écouteur crucial : déclenché dès que le navigateur a fini de charger sa base de données vocales
if ('speechSynthesis' in window) {
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = initVoices;
    }
    initVoices(); // Premier essai immédiat au cas où elles seraient déjà prêtes
}

function setAudioSpeed(speed) {
    audioSpeed = speed;
    const btnNormal = document.getElementById('speed-normal');
    const btnSlow = document.getElementById('speed-slow');
    if (btnNormal && btnSlow) {
        if (speed === 1.0) {
            btnNormal.className = "px-2 py-1 bg-brandBlue text-white rounded font-bold";
            btnSlow.className = "px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded flex items-center gap-1";
        } else {
            btnNormal.className = "px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded font-bold";
            btnSlow.className = "px-2 py-1 bg-brandBlue text-white rounded flex items-center gap-1";
        }
    }
}

function playAudio(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stoppe net toute lecture en cours
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = audioSpeed;

        // Si la voix n'a pas pu être choisie au démarrage, on fait une tentative de secours
        if (!preferredVoice) initVoices();

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        window.speechSynthesis.speak(utterance);
    } else {
        // Fallback ultime si l'appareil ne supporte aucune synthèse vocale native
        const encodedText = encodeURIComponent(text.toLowerCase());
        const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodedText}`;
        const audio = new Audio(audioUrl);
        audio.playbackRate = audioSpeed;
        audio.play().catch(e => console.log("Audio playback failed:", e));
    }
}


function playSoundEffect(type) {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    
    // Initialisation paresseuse au premier clic utilisateur
    if (!globalAudioCtx) {
        globalAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // Sort de la mise en veille si le navigateur avait bloqué le flux audio
    if (globalAudioCtx.state === 'suspended') {
        globalAudioCtx.resume();
    }

    const osc = globalAudioCtx.createOscillator();
    const gain = globalAudioCtx.createGain();
    osc.connect(gain);
    gain.connect(globalAudioCtx.destination);

    if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, globalAudioCtx.currentTime);
        osc.frequency.setValueAtTime(659.25, globalAudioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, globalAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, globalAudioCtx.currentTime + 0.3);
        osc.start(); osc.stop(globalAudioCtx.currentTime + 0.3);
    } else if (type === 'fail') {
        osc.frequency.setValueAtTime(196.00, globalAudioCtx.currentTime);
        osc.frequency.setValueAtTime(146.83, globalAudioCtx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, globalAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, globalAudioCtx.currentTime + 0.4);
        osc.start(); osc.stop(globalAudioCtx.currentTime + 0.4);
    }
}

function triggerConfetti() {
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = ['#F58634', '#52B788', '#1C3D5A', '#FFD166'][Math.floor(Math.random() * 4)];
        confetti.style.transform = `scale(${Math.random() * 0.8 + 0.5})`;
        confetti.style.animationDelay = Math.random() * 1.2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

// --- CARNET DE RÉVISIONS ---
function registerError(fruitObj) {
    if (!errorHistory.some(f => f.en === fruitObj.en)) {
        errorHistory.push(fruitObj);
        localStorage.setItem('oe_error_history_feel', JSON.stringify(errorHistory));
    }
}

function removeError(englishName) {
    errorHistory = errorHistory.filter(f => f.en !== englishName);
    localStorage.setItem('oe_error_history_feel', JSON.stringify(errorHistory));
}

// --- GESTION DE LA PROGRESSION ---
function getUserPlayerLevel() {
    return Math.floor(totalPoints / 150) + 1;
}

// --- ADAPTATION DES TITRES (Psychologie & Émotions) ---
function updateLevelAndTitle() {
    const pLevel = getUserPlayerLevel();
    const levelEl = document.getElementById('user-level');
    const titleEl = document.getElementById('user-title');
    
    if (levelEl) levelEl.innerText = pLevel;

    let title = "Novice des Émotions";
    if (pLevel >= 2) title = "Observateur Empathique";
    if (pLevel >= 3) title = "Analyste des Sentiments";
    if (pLevel >= 5) {
        title = "Créateur d'Harmonie";
        checkAndUnlockBadge("polyglotte"); 
    }
    if (pLevel >= 10) title = "Maître de l'Intelligence Émotionnelle";

    if (titleEl) titleEl.innerText = title;
    if (typeof updateLevelLockUI === 'function') updateLevelLockUI();
}

// --- MODULE DARK MODE (AJOUTÉ) ---
function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('oe_dark_mode', isDark);
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.className = isDark ? "fa-solid fa-sun text-yellow-300" : "fa-solid fa-moon text-yellow-300";
    }
}

// --- RÉINITIALISATION DES STATISTIQUES (AJOUTÉ) ---
function resetStats() {
    if (confirm("Êtes-vous sûr de vouloir réinitialiser toutes vos statistiques et votre progression Émotions ?")) {
        const keysToRemove = ['oe_total_points_feel', 'oe_high_quiz_feel', 'oe_high_speak_feel', 'oe_high_timeattack_feel', 'oe_max_streak_feel', 'oe_fav_feel', 'oe_error_history_feel', 'oe_unlocked_badges_feel'];
        keysToRemove.forEach(key => localStorage.removeItem(key));
        totalPoints = 0; highScores = { quiz: 0, speak: 0, timeattack: 0 }; maxStreak = 0; currentStreak = 0; errorHistory = []; unlockedBadges = []; favoriteFruits = [];
        document.getElementById('total-points').innerText = totalPoints;
        document.getElementById('streak-count').innerText = currentStreak;
        document.getElementById('stat-high-quiz').innerText = 0;
        document.getElementById('stat-high-speak').innerText = 0;
        document.getElementById('stat-high-timeattack').innerText = 0;
        document.getElementById('stat-max-streak').innerText = 0;
        updateLevelAndTitle();
        if (typeof renderDict === 'function') renderDict();
        if (typeof updateFlashcard === 'function') updateFlashcard();
        if (typeof renderBadgesUI === 'function') renderBadgesUI();
        if (typeof renderErrorHistory === 'function') renderErrorHistory();
        alert("Statistiques Émotions réinitialisées !");
    }
}

// --- PERSISTENCE ---
function saveStats() {
    localStorage.setItem('oe_total_points_feel', totalPoints);
    localStorage.setItem('oe_high_quiz_feel', highScores.quiz);
    localStorage.setItem('oe_high_speak_feel', highScores.speak); // Gardé pour compatibilité HTML
    localStorage.setItem('oe_high_timeattack_feel', highScores.timeattack);
    localStorage.setItem('oe_max_streak_feel', maxStreak);
}
function loadStats() {
    totalPoints = parseInt(localStorage.getItem('oe_total_points_feel')) || 0;
    highScores.quiz = parseInt(localStorage.getItem('oe_high_quiz_feel')) || 0;
    highScores.speak = parseInt(localStorage.getItem('oe_high_speak_feel')) || 0;
    highScores.timeattack = parseInt(localStorage.getItem('oe_high_timeattack_feel')) || 0;
    maxStreak = parseInt(localStorage.getItem('oe_max_streak_feel')) || 0;
    favoriteFruits = JSON.parse(localStorage.getItem('oe_fav_feel')) || [];
    errorHistory = JSON.parse(localStorage.getItem('oe_error_history_feel')) || [];
    unlockedBadges = JSON.parse(localStorage.getItem('oe_unlocked_badges_feel')) || [];
    
    if (localStorage.getItem('oe_dark_mode') === 'true') {
        document.documentElement.classList.add('dark');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = "fa-solid fa-sun text-yellow-300";
    }
    const totalPointsEl = document.getElementById('total-points');
    if (totalPointsEl) totalPointsEl.innerText = totalPoints;
    updateLevelAndTitle();
}