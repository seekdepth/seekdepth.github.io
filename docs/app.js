const CATALOG_URL = "./lessons/catalog.json";
const QUIZ_OPTION_COUNT = 4;
const QUIZ_HISTORY_LIMIT = 8;
const AUTOPLAY_SLIDE_PAUSE_MS = 1200;
const PROFILES_KEY = "simple_lang_profiles";
const ACTIVE_PROFILE_KEY = "simple_lang_active_profile_id";
const APP_VIEWS = { lesson: "lesson", quiz: "quiz" };
const LESSON_CARD_VISUALS = {
  numbers_1_to_10: [
    null,
    "📘",
    "🐈  🐈",
    "🚗\n🚗  🚗",
    "🪑  🪑\n🪑  🪑",
    "🍇",
    "🍎  🍎  🍎\n🍎  🍎  🍎",
    "📅  ✨",
    "🎓  🎓  🎓  🎓\n🎓  🎓  🎓  🎓",
    { text: "⭐  ⭐  ⭐\n⭐  ⭐  ⭐\n⭐  ⭐  ⭐", className: "lesson-card-visual-compact" },
    { text: "🐦  🐦  🐦  🐦  🐦\n🐦  🐦  🐦  🐦  🐦", className: "lesson-card-visual-wide" },
  ],
  days_of_week: [
    null,
    "🛋",
    "💼",
    "📚",
    "🏫",
    "🍲",
    "🎬",
    "🤝",
  ],
  numbers_11_to_20: [
    null,
    "⚽",
    "🕛",
    "🍪",
    "📖",
    "🪑",
    "🚌",
    "🌳",
    "🪜",
    "🧑‍🏫",
    "🎟",
  ],
  numbers_21_to_100: [
    null,
    "🕯  🎂",
    "📚",
    "📧",
    "🚆  ⏱",
    "➗  ✏️",
    "🪑",
    "🏀",
    "📦",
    "💯",
  ],
  city_life: [
    null,
    "🛣",
    "🏢",
    "🚌",
    "🚇",
    "🚗",
    "🚶",
    "🏙",
    "🍽",
    "🌳",
    "🚸",
  ],
  the_countryside: [
    null,
    "🚜  🌾",
    "🐄",
    "🧰",
    "🏞",
    "⛰",
    "🌲",
    "🚜",
    "🪵",
    "🏡",
    "🥾",
  ],
  colors: [
    null,
    "🎨",
    "🔴",
    "🔵",
    "🟡",
    "🟢",
    "⚫",
    "⚪",
    "🟠",
    "🟣",
    "🌸",
    "🟤",
    "🩶",
    "💡",
    "🌑",
    "✨",
  ],
  sun_and_sea: [
    null,
    "🏖",
    "☀️",
    "🌊",
    "🌊  🏄",
    "🏝",
    "🩱",
    "🧴",
    "⛵",
    "🐚",
    "🧺",
  ],
  breakfast: [
    null,
    "☕",
    "🍵",
    "🍞",
    "🧈",
    "🍓",
    "🍳",
    "🧀",
    "🧃",
    "🥣",
    "🥞",
  ],
  fast_food: [
    null,
    "🍔",
    "🍟",
    "🥤",
    "🍔  🍟",
    "🚗",
    "🐔",
    "🍅",
    "🥤",
    "🍽",
    "🧾",
  ],
  fine_dining: [
    null,
    "📖  🍽",
    "📋",
    "🥗",
    "🍽",
    "🍰",
    "🍷",
    "🧑‍🍳",
    "👨‍🍳",
    "🕯",
    "🧾",
  ],
  the_months: [
    null,
    "❄️",
    "🗓",
    "🌷",
    "🌧",
    "🌤",
    "🎓",
    "🏖",
    "🧳",
    "🍂",
    "🎃",
    "🌫",
    "🎄",
  ],
};

const TRANSLATIONS = {
  en: {
    authTitle: "Choose a Profile",
    authSubtitle: "",
    existingProfile: "Existing profile",
    createProfile: "Create profile",
    createProfileButton: "Create profile",
    openCreateProfile: "Create profile",
    deleteProfile: "Delete",
    confirmDeleteProfile: "Delete profile \"{name}\"?",
    cancel: "Cancel",
    noProfilesMessage: "No profiles yet. Create your first profile to begin.",
    profilePlaceholder: "Profile name",
    profileSummaryNone: "Select or create a profile to begin.",
    profileSummary: "Using profile: {name}. Primary language: {primary}. Secondary language: {secondary}.",
    noProfilesYet: "No profiles yet",
    introSentence: "Let's study {lesson}.",
    profileNameRequired: "Enter a profile name.",
    profileLanguagesDifferent: "Choose two different languages.",
    lessonsHome: "Lessons",
    noLessonsAvailable: "No lessons match this language pair yet.",
    lessonSubtitle: "",
    logout: "Logout",
    backToLessons: "Back to lessons",
    lesson: "Lesson",
    quiz: "Quiz",
    startLesson: "Start lesson",
    startQuiz: "Start quiz",
    tryAgain: "Try again",
    speakWord: "Speak word",
    recentScores: "Recent scores",
    noQuizAttempts: "No quiz attempts yet.",
    quizComplete: "Quiz complete",
    quizScore: "You scored {score} out of {total} ({percent}%).",
    quizCorrect: "Correct.",
    quizIncorrect: "Incorrect. Correct answer: {answer}.",
    readyQuiz: "Ready to start quiz",
    readyQuizChoose: "Choose the matching answer",
    quizPromptLabel: "Prompt",
    speed: "Speed",
    illustrations: "Illustrations",
    autoplay: "Autoplay",
    on: "On",
    off: "Off",
    fast: "Fast",
    normal: "Normal",
    slow: "Slow",
    autoPlayOn: "Auto Play On",
    autoPlayOff: "Auto Play Off",
    play: "Play",
    pause: "Pause",
    randomize: "Randomize",
    sentence: "Sentence",
    waiting: "Waiting to start",
    readyStart: "Ready to start ({speed})",
    readyNext: "Ready for next slide ({speed})",
    readyShort: "Ready ({speed})",
    playingSlide: "Playing slide ({speed})",
    slideComplete: "Slide complete ({speed})",
    nextSlideIn: "Next slide in {seconds}s",
    playbackFailedLesson: "Playback failed. Check the local server and audio files.",
    playbackFailedQuiz: "Playback failed. Check the audio files.",
    loadFailed: "Load failed",
    answerChoiceGroup: "Quiz answer choices",
  },
  pt: {
    authTitle: "Escolha um Perfil",
    authSubtitle: "",
    existingProfile: "Perfil existente",
    createProfile: "Criar perfil",
    createProfileButton: "Criar perfil",
    openCreateProfile: "Criar perfil",
    deleteProfile: "Excluir",
    confirmDeleteProfile: "Excluir o perfil \"{name}\"?",
    cancel: "Cancelar",
    noProfilesMessage: "Ainda não há perfis. Crie o primeiro perfil para começar.",
    profilePlaceholder: "Nome do perfil",
    profileSummaryNone: "Selecione ou crie um perfil para começar.",
    profileSummary: "Perfil em uso: {name}. Idioma principal: {primary}. Idioma secundário: {secondary}.",
    noProfilesYet: "Ainda não há perfis",
    introSentence: "Vamos estudar {lesson}.",
    profileNameRequired: "Digite um nome de perfil.",
    profileLanguagesDifferent: "Escolha dois idiomas diferentes.",
    lessonsHome: "Lições",
    noLessonsAvailable: "Ainda não há lições para este par de idiomas.",
    lessonSubtitle: "",
    logout: "Sair",
    backToLessons: "Voltar às lições",
    lesson: "Lição",
    quiz: "Quiz",
    startLesson: "Iniciar lição",
    startQuiz: "Iniciar quiz",
    tryAgain: "Tentar novamente",
    speakWord: "Ouvir palavra",
    recentScores: "Pontuações recentes",
    noQuizAttempts: "Ainda não há tentativas de quiz.",
    quizComplete: "Quiz concluído",
    quizScore: "Você acertou {score} de {total} ({percent}%).",
    quizCorrect: "Correto.",
    quizIncorrect: "Incorreto. Resposta correta: {answer}.",
    readyQuiz: "Pronto para começar o quiz",
    readyQuizChoose: "Escolha a resposta correspondente",
    quizPromptLabel: "Pergunta",
    speed: "Velocidade",
    illustrations: "Ilustrações",
    autoplay: "Reprodução automática",
    on: "Ligado",
    off: "Desligado",
    fast: "Rápido",
    normal: "Normal",
    slow: "Lento",
    autoPlayOn: "Reprodução automática ligada",
    autoPlayOff: "Reprodução automática desligada",
    play: "Reproduzir",
    pause: "Pausar",
    randomize: "Aleatorizar",
    sentence: "Frase",
    waiting: "Aguardando para começar",
    readyStart: "Pronto para começar ({speed})",
    readyNext: "Pronto para a próxima lição ({speed})",
    readyShort: "Pronto ({speed})",
    playingSlide: "Reproduzindo lição ({speed})",
    slideComplete: "Lição concluída ({speed})",
    nextSlideIn: "Próxima lição em {seconds}s",
    playbackFailedLesson: "Falha na reprodução. Verifique o servidor local e os arquivos de áudio.",
    playbackFailedQuiz: "Falha na reprodução. Verifique os arquivos de áudio.",
    loadFailed: "Falha ao carregar",
    answerChoiceGroup: "Opções de resposta do quiz",
  },
  es: {
    authTitle: "Elegir un Perfil",
    authSubtitle: "",
    existingProfile: "Perfil existente",
    createProfile: "Crear perfil",
    createProfileButton: "Crear perfil",
    openCreateProfile: "Crear perfil",
    deleteProfile: "Eliminar",
    confirmDeleteProfile: "¿Eliminar el perfil \"{name}\"?",
    cancel: "Cancelar",
    noProfilesMessage: "Todavía no hay perfiles. Crea el primero para empezar.",
    profilePlaceholder: "Nombre del perfil",
    profileSummaryNone: "Selecciona o crea un perfil para empezar.",
    profileSummary: "Perfil en uso: {name}. Idioma principal: {primary}. Idioma secundario: {secondary}.",
    noProfilesYet: "Todavía no hay perfiles",
    introSentence: "Vamos a estudiar {lesson}.",
    profileNameRequired: "Escribe un nombre de perfil.",
    profileLanguagesDifferent: "Elige dos idiomas diferentes.",
    lessonsHome: "Lecciones",
    noLessonsAvailable: "Todavía no hay lecciones para este par de idiomas.",
    lessonSubtitle: "",
    logout: "Salir",
    backToLessons: "Volver a las lecciones",
    lesson: "Lección",
    quiz: "Quiz",
    startLesson: "Iniciar lección",
    startQuiz: "Iniciar quiz",
    tryAgain: "Intentar de nuevo",
    speakWord: "Escuchar palabra",
    recentScores: "Puntuaciones recientes",
    noQuizAttempts: "Todavía no hay intentos de quiz.",
    quizComplete: "Quiz completado",
    quizScore: "Has acertado {score} de {total} ({percent}%).",
    quizCorrect: "Correcto.",
    quizIncorrect: "Incorrecto. Respuesta correcta: {answer}.",
    readyQuiz: "Listo para empezar el quiz",
    readyQuizChoose: "Elige la respuesta correspondiente",
    quizPromptLabel: "Pregunta",
    speed: "Velocidad",
    illustrations: "Ilustraciones",
    autoplay: "Reproducción automática",
    on: "Activado",
    off: "Desactivado",
    fast: "Rápido",
    normal: "Normal",
    slow: "Lento",
    autoPlayOn: "Reproducción automática activada",
    autoPlayOff: "Reproducción automática desactivada",
    play: "Reproducir",
    pause: "Pausar",
    randomize: "Aleatorizar",
    sentence: "Frase",
    waiting: "Esperando para empezar",
    readyStart: "Listo para empezar ({speed})",
    readyNext: "Listo para la siguiente tarjeta ({speed})",
    readyShort: "Listo ({speed})",
    playingSlide: "Reproduciendo tarjeta ({speed})",
    slideComplete: "Tarjeta completada ({speed})",
    nextSlideIn: "Siguiente tarjeta en {seconds}s",
    playbackFailedLesson: "La reproducción falló. Revisa el servidor local y los archivos de audio.",
    playbackFailedQuiz: "La reproducción falló. Revisa los archivos de audio.",
    loadFailed: "Error al cargar",
    answerChoiceGroup: "Opciones de respuesta del quiz",
  },
  fr: {
    authTitle: "Choisir un Profil",
    authSubtitle: "",
    existingProfile: "Profils existants",
    createProfile: "Créer un profil",
    createProfileButton: "Créer le profil",
    openCreateProfile: "Créer un profil",
    deleteProfile: "Supprimer",
    confirmDeleteProfile: "Supprimer le profil \"{name}\" ?",
    cancel: "Annuler",
    noProfilesMessage: "Il n'y a pas encore de profils. Créez le premier pour commencer.",
    profilePlaceholder: "Nom du profil",
    profileSummaryNone: "Sélectionnez ou créez un profil pour commencer.",
    profileSummary: "Profil utilisé : {name}. Langue principale : {primary}. Langue secondaire : {secondary}.",
    noProfilesYet: "Aucun profil",
    introSentence: "Étudions {lesson}.",
    profileNameRequired: "Saisissez un nom de profil.",
    profileLanguagesDifferent: "Choisissez deux langues différentes.",
    lessonsHome: "Leçons",
    noLessonsAvailable: "Aucune leçon ne correspond encore à cette paire de langues.",
    lessonSubtitle: "",
    logout: "Se déconnecter",
    backToLessons: "Retour aux leçons",
    lesson: "Leçon",
    quiz: "Quiz",
    startLesson: "Commencer la leçon",
    startQuiz: "Commencer le quiz",
    tryAgain: "Recommencer",
    speakWord: "Écouter le mot",
    recentScores: "Scores récents",
    noQuizAttempts: "Aucun essai de quiz pour le moment.",
    quizComplete: "Quiz terminé",
    quizScore: "Vous avez obtenu {score} sur {total} ({percent}%).",
    quizCorrect: "Correct.",
    quizIncorrect: "Incorrect. Bonne réponse : {answer}.",
    readyQuiz: "Prêt à commencer le quiz",
    readyQuizChoose: "Choisissez la bonne réponse",
    quizPromptLabel: "Question",
    speed: "Vitesse",
    illustrations: "Illustrations",
    autoplay: "Lecture automatique",
    on: "Activé",
    off: "Désactivé",
    fast: "Rapide",
    normal: "Normale",
    slow: "Lente",
    autoPlayOn: "Lecture automatique activée",
    autoPlayOff: "Lecture automatique désactivée",
    play: "Lire",
    pause: "Pause",
    randomize: "Aléatoire",
    sentence: "Phrase",
    waiting: "En attente de démarrage",
    readyStart: "Prêt à démarrer ({speed})",
    readyNext: "Prêt pour la carte suivante ({speed})",
    readyShort: "Prêt ({speed})",
    playingSlide: "Lecture de la carte ({speed})",
    slideComplete: "Carte terminée ({speed})",
    nextSlideIn: "Carte suivante dans {seconds}s",
    playbackFailedLesson: "La lecture a échoué. Vérifiez le serveur local et les fichiers audio.",
    playbackFailedQuiz: "La lecture a échoué. Vérifiez les fichiers audio.",
    loadFailed: "Échec du chargement",
    answerChoiceGroup: "Choix de réponses du quiz",
  },
};

const LANGUAGE_NAMES = {
  en: { "en-US": "English (US)", "en-GB": "English (UK)", "pt-BR": "Portuguese (Brazil)", "es-ES": "Spanish (Spain)", "fr-FR": "French (France)" },
  pt: { "en-US": "Inglês (EUA)", "en-GB": "Inglês (Reino Unido)", "pt-BR": "Português (Brasil)", "es-ES": "Espanhol (Espanha)", "fr-FR": "Francês (França)" },
  es: { "en-US": "Inglés (EE. UU.)", "en-GB": "Inglés (Reino Unido)", "pt-BR": "Portugués (Brasil)", "es-ES": "Español (España)", "fr-FR": "Francés (Francia)" },
  fr: { "en-US": "Anglais (États-Unis)", "en-GB": "Anglais (Royaume-Uni)", "pt-BR": "Portugais (Brésil)", "es-ES": "Espagnol (Espagne)", "fr-FR": "Français (France)" },
};

const authView = document.querySelector("#auth-view");
const authTitle = document.querySelector("#auth-title");
const authSubtitle = document.querySelector("#auth-subtitle");
const appView = document.querySelector("#app-view");
const profileList = document.querySelector("#profile-list");
const openCreateProfileButton = document.querySelector("#open-create-profile-button");
const profileNameInput = document.querySelector("#profile-name-input");
const profilePrimarySelect = document.querySelector("#profile-primary-select");
const profileSecondarySelect = document.querySelector("#profile-secondary-select");
const profileCreateButton = document.querySelector("#profile-create-button");
const profileModal = document.querySelector("#profile-modal");
const closeProfileModalButton = document.querySelector("#close-profile-modal-button");
const cancelProfileModalButton = document.querySelector("#cancel-profile-modal-button");
const profileSummary = document.querySelector("#profile-summary");
const profileExistingLabel = document.querySelector("#profile-existing-label");
const profileNewLabel = document.querySelector("#profile-new-label");

const lessonTitle = document.querySelector("#lesson-title");
const lessonSubtitle = document.querySelector("#lesson-subtitle");
const backToLessonsButton = document.querySelector("#back-to-lessons-button");
const logoutButton = document.querySelector("#logout-button");
const lessonsHome = document.querySelector("#lessons-home");
const lessonsHomeLabel = document.querySelector("#lessons-home-label");
const lessonList = document.querySelector("#lesson-list");
const learningShell = document.querySelector("#learning-shell");
const modeQuizButton = document.querySelector("#mode-quiz");
const lessonView = document.querySelector("#lesson-view");
const quizView = document.querySelector("#quiz-view");
const lessonCard = document.querySelector(".lesson-card");

const slideCounter = document.querySelector("#slide-counter");
const playbackStatus = document.querySelector("#playback-status");
const wordPrimary = document.querySelector("#word-english");
const wordSecondary = document.querySelector("#word-portuguese");
const sentencePrimary = document.querySelector("#sentence-english");
const sentenceSecondary = document.querySelector("#sentence-portuguese");
const lessonCardVisual = document.querySelector("#lesson-card-visual");
const labelWordPrimary = document.querySelector("#label-word-primary");
const labelWordSecondary = document.querySelector("#label-word-secondary");
const repeatButton = document.querySelector("#repeat-button");
const prevButton = document.querySelector("#prev-button");
const playPauseButton = document.querySelector("#play-pause-button");
const nextButton = document.querySelector("#next-button");
const settingsButton = document.querySelector("#settings-button");
const settingsMenu = document.querySelector("#settings-menu");
const speedButtons = [...document.querySelectorAll("[data-speed]")];
const speedLabel = document.querySelector("#speed-label");
const illustrationsButtons = [...document.querySelectorAll("[data-illustrations]")];
const illustrationsLabel = document.querySelector("#illustrations-label");
const autoplayButtons = [...document.querySelectorAll("[data-autoplay]")];
const autoplayLabel = document.querySelector("#autoplay-label");
const randomizeButtons = [...document.querySelectorAll("[data-randomize]")];
const randomizeLabel = document.querySelector("#randomize-label");

const quizCounter = document.querySelector("#quiz-counter");
const quizStatus = document.querySelector("#quiz-status");
const quizPromptLabel = document.querySelector("#quiz-prompt-label");
const quizWord = document.querySelector("#quiz-word");
const quizSpeakButton = document.querySelector("#quiz-speak-button");
const quizOptions = document.querySelector("#quiz-options");
const quizResult = document.querySelector("#quiz-result");
const quizSummary = document.querySelector("#quiz-summary");
const quizScoreHeading = document.querySelector("#quiz-score-heading");
const quizScoreText = document.querySelector("#quiz-score-text");
const quizHistory = document.querySelector("#quiz-history");
const quizHistoryLabel = document.querySelector("#quiz-history-label");
const quizStartButton = document.querySelector("#quiz-start-button");
const quizRestartButton = document.querySelector("#quiz-restart-button");
const quizCloseButton = document.querySelector("#quiz-close-button");

const SPEED_SETTINGS = {
  fast: { key: "fast", pauseMs: 0, playbackRate: 1 },
  normal: { key: "normal", pauseMs: 500, playbackRate: 1 },
  slow: { key: "slow", pauseMs: 1000, playbackRate: 0.75 },
};

let catalog = null;
let activeProfile = null;
let profiles = [];
let activeView = APP_VIEWS.lesson;
let selectedSpeed = "normal";
let autoPlayEnabled = true;
let illustrationsEnabled = true;
let randomizeEnabled = false;
let manifest = null;
let manifestBaseUrl = null;
let sourceSlides = [];
let slides = [];
let currentIndex = 0;
let isPlaying = false;
let hasStarted = false;
let activeAudio = null;
let playbackToken = 0;
let selectedLessonId = "";
let lessonOpen = false;

let quizQuestions = [];
let quizCurrentIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizHistoryItems = [];
let isProfileModalOpen = false;
let slideRenderTimer = null;
let isSettingsMenuOpen = false;

function normalizeLanguageCode(code) {
  if (code === "en") return "en-US";
  if (code.startsWith("en-GB") || code.startsWith("en_GB")) return "en-GB";
  if (code.startsWith("en-US") || code.startsWith("en_US")) return "en-US";
  if (code === "pt") return "pt-BR";
  if (code === "es") return "es-ES";
  if (code === "fr") return "fr-FR";
  return code ?? "en-US";
}

function getUiLanguageForCode(code) {
  const normalized = normalizeLanguageCode(code);
  if (normalized.startsWith("pt")) return "pt";
  if (normalized.startsWith("es")) return "es";
  if (normalized.startsWith("fr")) return "fr";
  return "en";
}

function getUiLanguage() {
  return getUiLanguageForCode(activeProfile?.primary_language ?? "en-US");
}

function t(key, replacements = {}) {
  let template = TRANSLATIONS[getUiLanguage()]?.[key] ?? TRANSLATIONS.en[key] ?? key;
  for (const [name, value] of Object.entries(replacements)) {
    template = template.replace(`{${name}}`, value);
  }
  return template;
}

function getLanguageName(code) {
  const normalized = normalizeLanguageCode(code);
  return LANGUAGE_NAMES[getUiLanguage()]?.[normalized] ?? LANGUAGE_NAMES.en[normalized] ?? normalized;
}

function getLanguageKeys() {
  const primary = normalizeLanguageCode(activeProfile?.primary_language ?? "en-US");
  const secondary = normalizeLanguageCode(activeProfile?.secondary_language ?? (primary.startsWith("en") ? "pt-BR" : "en-US"));
  return { primary, secondary };
}

function getLessonLanguages(lesson) {
  return lesson?.languages?.map(normalizeLanguageCode) ?? ["en-US", "en-GB", "pt-BR"];
}

function lessonSupportsProfileLanguages(lesson) {
  const { primary, secondary } = getLanguageKeys();
  const languages = getLessonLanguages(lesson);
  return languages.includes(primary) && languages.includes(secondary);
}

function getItemTerms(item) {
  if (item?.terms) return item.terms;
  return {
    en: item?.english,
    "pt-BR": item?.portuguese,
  };
}

function getItemSentences(item) {
  if (item?.sample_sentences) return item.sample_sentences;
  return {
    en: item?.sample_sentence?.english,
    "pt-BR": item?.sample_sentence?.portuguese,
  };
}

function getItemWordAudio(item) {
  if (item?.word_audio && Object.keys(item.word_audio).length > 0 && !item.word_audio.english && !item.word_audio.portuguese) {
    return item.word_audio;
  }
  return {
    "en-US": item?.word_audio?.english,
    "pt-BR": item?.word_audio?.portuguese,
  };
}

function getItemSentenceAudio(item) {
  if (item?.sentence_audio && Object.keys(item.sentence_audio).length > 0 && !item.sentence_audio.english && !item.sentence_audio.portuguese) {
    return item.sentence_audio;
  }
  return {
    "en-US": item?.sentence_audio?.english,
    "pt-BR": item?.sentence_audio?.portuguese,
  };
}

function resolveLocalizedValue(values, language) {
  if (!values) return null;
  if (values[language] !== undefined) return values[language];
  const baseLanguage = language.split("-")[0];
  if (values[baseLanguage] !== undefined) return values[baseLanguage];
  return null;
}

function getSpeedSetting() {
  return SPEED_SETTINGS[selectedSpeed] ?? SPEED_SETTINGS.normal;
}

function getQuizHistoryKey() {
  if (!activeProfile || !selectedLessonId) {
    return "simple_lang_quiz_history";
  }
  return `simple_lang_${activeProfile.id}_${selectedLessonId}_quiz_history`;
}

function setStatus(message, playing = false) {
  if (!playbackStatus) return;
  playbackStatus.textContent = message;
  playbackStatus.classList.toggle("is-playing", playing);
}

function setQuizStatus(message) {
  quizStatus.textContent = message;
}

function clearActivePanels() {
  document.querySelectorAll(".content-panel").forEach((panel) => panel.classList.remove("is-active"));
}

function setActivePanel(partKey) {
  clearActivePanels();
  const map = {
    primaryWord: document.querySelector("#panel-word-english"),
    secondaryWord: document.querySelector("#panel-word-portuguese"),
    primarySentence: document.querySelector("#panel-sentence-english"),
    secondarySentence: document.querySelector("#panel-sentence-portuguese"),
  };
  map[partKey]?.classList.add("is-active");
}

function buildAudioUrl(relativePath) {
  return new URL(relativePath, manifestBaseUrl).toString();
}

function stopCurrentAudio() {
  if (!activeAudio) {
    return;
  }
  activeAudio.pause();
  activeAudio.currentTime = 0;
  activeAudio = null;
}

function cancelPlayback() {
  playbackToken += 1;
  stopCurrentAudio();
  clearActivePanels();
  isPlaying = false;
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function playAudioFile(src, playbackRate) {
  return new Promise((resolve, reject) => {
    const audio = new Audio(src);
    audio.playbackRate = playbackRate;
    activeAudio = audio;
    audio.addEventListener("ended", () => {
      if (activeAudio === audio) activeAudio = null;
      resolve();
    }, { once: true });
    audio.addEventListener("error", () => {
      if (activeAudio === audio) activeAudio = null;
      reject(new Error(`Failed to play ${src}`));
    }, { once: true });
    audio.play().catch(reject);
  });
}

function renderSpeedButtons() {
  for (const button of speedButtons) {
    const selected = button.dataset.speed === selectedSpeed;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  }
}

function renderIllustrationsButtons() {
  for (const button of illustrationsButtons) {
    const selected = (button.dataset.illustrations === "on") === illustrationsEnabled;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  }
}

function renderAutoPlayButtons() {
  for (const button of autoplayButtons) {
    const selected = (button.dataset.autoplay === "on") === autoPlayEnabled;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  }
}

function renderRandomizeButtons() {
  for (const button of randomizeButtons) {
    const selected = (button.dataset.randomize === "on") === randomizeEnabled;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  }
}

function renderSettingsMenu() {
  if (!settingsButton || !settingsMenu) return;
  settingsButton.setAttribute("aria-expanded", String(isSettingsMenuOpen));
  settingsMenu.classList.toggle("is-hidden", !isSettingsMenuOpen);
  settingsMenu.setAttribute("aria-hidden", String(!isSettingsMenuOpen));
}

function renderPlayPauseButton() {
  const canControl = Boolean(activeProfile) && lessonOpen && activeView === APP_VIEWS.lesson;
  playPauseButton.disabled = !canControl;
  playPauseButton.textContent = isPlaying ? "❚❚" : "▶";
  playPauseButton.setAttribute("aria-label", isPlaying ? t("pause") : t("play"));
  playPauseButton.setAttribute("title", isPlaying ? t("pause") : t("play"));
  playPauseButton.classList.toggle("is-selected", isPlaying);
}

function getDisplayData(item) {
  const { primary, secondary } = getLanguageKeys();
  if (item.isIntro) {
    return {
      primaryWord: item.primaryTitle,
      secondaryWord: item.secondaryTitle,
      primarySentence: item.primarySentence,
      secondarySentence: item.secondarySentence,
      primaryWordAudio: item.primaryWordAudio,
      secondaryWordAudio: item.secondaryWordAudio,
      primarySentenceAudio: item.primarySentenceAudio,
      secondarySentenceAudio: item.secondarySentenceAudio,
    };
  }
  const terms = getItemTerms(item);
  const sampleSentences = getItemSentences(item);
  const wordAudio = getItemWordAudio(item);
  const sentenceAudio = getItemSentenceAudio(item);
  return {
    primaryWord: resolveLocalizedValue(terms, primary) ?? "-",
    secondaryWord: resolveLocalizedValue(terms, secondary) ?? "-",
    primarySentence: resolveLocalizedValue(sampleSentences, primary) ?? "-",
    secondarySentence: resolveLocalizedValue(sampleSentences, secondary) ?? "-",
    primaryWordAudio: resolveLocalizedValue(wordAudio, primary) ?? null,
    secondaryWordAudio: resolveLocalizedValue(wordAudio, secondary) ?? null,
    primarySentenceAudio: resolveLocalizedValue(sentenceAudio, primary) ?? null,
    secondarySentenceAudio: resolveLocalizedValue(sentenceAudio, secondary) ?? null,
  };
}

function buildIntroSlide(lesson) {
  const intro = manifest?.intro;
  const { primary, secondary } = getLanguageKeys();
  return {
    isIntro: true,
    primaryTitle: intro?.titles?.[getUiLanguageForCode(primary)] ?? lesson?.titles?.[getUiLanguageForCode(primary)],
    secondaryTitle: intro?.titles?.[getUiLanguageForCode(secondary)] ?? lesson?.titles?.[getUiLanguageForCode(secondary)],
    primarySentence: resolveLocalizedValue(intro?.sample_sentences, primary) ?? "-",
    secondarySentence: resolveLocalizedValue(intro?.sample_sentences, secondary) ?? "-",
    primaryWordAudio: resolveLocalizedValue(intro?.word_audio, primary) ?? null,
    secondaryWordAudio: resolveLocalizedValue(intro?.word_audio, secondary) ?? null,
    primarySentenceAudio: resolveLocalizedValue(intro?.sentence_audio, primary) ?? null,
    secondarySentenceAudio: resolveLocalizedValue(intro?.sentence_audio, secondary) ?? null,
  };
}

function getLessonCardVisual() {
  const visuals = LESSON_CARD_VISUALS[selectedLessonId];
  if (!visuals) return null;
  return visuals[currentIndex] ?? null;
}

function renderLessonCardVisual() {
  if (!lessonCardVisual) return;
  const visual = illustrationsEnabled ? getLessonCardVisual() : null;
  const visualText = typeof visual === "string" ? visual : visual?.text ?? "";
  lessonCardVisual.textContent = visualText;
  lessonCardVisual.classList.remove("lesson-card-visual-compact", "lesson-card-visual-wide");
  if (visual && typeof visual === "object" && visual.className) {
    lessonCardVisual.classList.add(visual.className);
  }
  lessonCardVisual.classList.toggle("is-hidden", !visualText);
}

function setSlideContent(display) {
  if (!display) {
    slideCounter.textContent = "0 / 0";
    wordPrimary.textContent = "-";
    wordSecondary.textContent = "-";
    sentencePrimary.textContent = "-";
    sentenceSecondary.textContent = "-";
    renderLessonCardVisual();
    return;
  }
  slideCounter.textContent = `${currentIndex + 1} / ${slides.length}`;
  wordPrimary.textContent = display.primaryWord;
  wordSecondary.textContent = display.secondaryWord;
  sentencePrimary.textContent = display.primarySentence;
  sentenceSecondary.textContent = display.secondarySentence;
  renderLessonCardVisual();
}

function renderSlide() {
  if (slideRenderTimer) {
    window.clearTimeout(slideRenderTimer);
    slideRenderTimer = null;
  }
  const item = slides[currentIndex];
  if (!item) {
    lessonCard?.classList.remove("is-transitioning");
    setSlideContent(null);
    return;
  }
  const display = getDisplayData(item);
  if (!lessonCard) {
    setSlideContent(display);
    clearActivePanels();
    return;
  }
  lessonCard.classList.add("is-transitioning");
  slideRenderTimer = window.setTimeout(() => {
    setSlideContent(display);
    lessonCard.classList.remove("is-transitioning");
    slideRenderTimer = null;
  }, 110);
  clearActivePanels();
}

function rebuildSlides() {
  const lesson = catalog?.lessons.find((item) => item.lesson_id === selectedLessonId);
  if (!lesson) return;
  const orderedSlides = randomizeEnabled ? shuffle(sourceSlides) : [...sourceSlides];
  slides = [buildIntroSlide(lesson), ...orderedSlides];
}

function closeSettingsMenu() {
  if (!isSettingsMenuOpen) return;
  isSettingsMenuOpen = false;
  renderSettingsMenu();
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function renderQuizHistory() {
  quizHistory.innerHTML = "";
  if (quizHistoryItems.length === 0) {
    const li = document.createElement("li");
    li.textContent = t("noQuizAttempts");
    quizHistory.append(li);
    return;
  }
  for (const entry of quizHistoryItems.slice(0, QUIZ_HISTORY_LIMIT)) {
    const li = document.createElement("li");
    li.textContent = `${entry.score}/${entry.total} (${entry.percent}%)`;
    quizHistory.append(li);
  }
}

function loadQuizHistory() {
  try {
    const stored = window.localStorage.getItem(getQuizHistoryKey());
    quizHistoryItems = stored ? JSON.parse(stored) : [];
    if (!Array.isArray(quizHistoryItems)) quizHistoryItems = [];
  } catch {
    quizHistoryItems = [];
  }
}

function saveQuizHistory() {
  window.localStorage.setItem(getQuizHistoryKey(), JSON.stringify(quizHistoryItems.slice(0, QUIZ_HISTORY_LIMIT)));
}

function updateQuizCounter() {
  const total = quizQuestions.length || slides.length;
  const current = quizQuestions.length ? Math.min(quizCurrentIndex + 1, total) : 0;
  quizCounter.textContent = `${current} / ${total}`;
}

function getCurrentQuizQuestion() {
  return quizQuestions[quizCurrentIndex] ?? null;
}

function buildQuizQuestions() {
  const { primary, secondary } = getLanguageKeys();
  const eligibleSlides = sourceSlides.filter((item) => {
    const terms = getItemTerms(item);
    return Boolean(resolveLocalizedValue(terms, primary) && resolveLocalizedValue(terms, secondary));
  });
  return shuffle(eligibleSlides).map((item) => {
    const terms = getItemTerms(item);
    const wordAudio = getItemWordAudio(item);
    const distractors = shuffle(
      eligibleSlides
        .filter((candidate) => resolveLocalizedValue(getItemTerms(candidate), secondary) !== resolveLocalizedValue(terms, secondary))
        .map((candidate) => resolveLocalizedValue(getItemTerms(candidate), secondary))
    ).slice(0, QUIZ_OPTION_COUNT - 1);
    return {
      prompt: resolveLocalizedValue(terms, primary),
      correctAnswer: resolveLocalizedValue(terms, secondary),
      wordAudio: resolveLocalizedValue(wordAudio, primary),
      options: shuffle([resolveLocalizedValue(terms, secondary), ...distractors]),
    };
  });
}

function renderQuizQuestion() {
  const question = getCurrentQuizQuestion();
  updateQuizCounter();
  quizResult.textContent = "";
  quizSummary.classList.add("is-hidden");
  quizOptions.setAttribute("aria-label", t("answerChoiceGroup"));
  if (!question) {
    quizWord.textContent = "-";
    quizOptions.innerHTML = "";
    return;
  }
  quizWord.textContent = question.prompt;
  quizOptions.innerHTML = "";
  quizAnswered = false;
  for (const option of question.options) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => handleQuizAnswer(option, button));
    quizOptions.append(button);
  }
}

function finishQuiz() {
  const total = quizQuestions.length;
  const percent = total ? Math.round((quizScore / total) * 100) : 0;
  quizScoreHeading.textContent = t("quizComplete");
  quizScoreText.textContent = t("quizScore", {
    score: String(quizScore),
    total: String(total),
    percent: String(percent),
  });
  quizSummary.classList.remove("is-hidden");
  setQuizStatus(t("quizComplete"));
  quizHistoryItems.unshift({ score: quizScore, total, percent });
  quizHistoryItems = quizHistoryItems.slice(0, QUIZ_HISTORY_LIMIT);
  saveQuizHistory();
  renderQuizHistory();
}

function handleQuizAnswer(selectedAnswer, selectedButton) {
  if (quizAnswered) return;
  const question = getCurrentQuizQuestion();
  if (!question) return;
  quizAnswered = true;
  const isCorrect = selectedAnswer === question.correctAnswer;
  if (isCorrect) {
    quizScore += 1;
    quizResult.textContent = t("quizCorrect");
  } else {
    quizResult.textContent = t("quizIncorrect", { answer: question.correctAnswer });
  }
  quizOptions.querySelectorAll(".quiz-option").forEach((button) => {
    button.disabled = true;
    if (button.textContent === question.correctAnswer) button.classList.add("is-correct");
    else if (button === selectedButton && !isCorrect) button.classList.add("is-wrong");
  });
  window.setTimeout(() => {
    quizCurrentIndex += 1;
    if (quizCurrentIndex >= quizQuestions.length) {
      finishQuiz();
      return;
    }
    setQuizStatus(t("readyQuizChoose"));
    renderQuizQuestion();
  }, 900);
}

function updateButtons() {
  const hasProfile = Boolean(activeProfile);
  const lessonActive = hasProfile && lessonOpen && activeView === APP_VIEWS.lesson;
  logoutButton.disabled = !hasProfile;
  openCreateProfileButton.disabled = hasProfile;
  profileCreateButton.disabled = hasProfile;
  closeProfileModalButton.disabled = hasProfile;
  cancelProfileModalButton.disabled = hasProfile;
  backToLessonsButton.disabled = !lessonOpen || isPlaying;
  repeatButton.disabled = !lessonActive || isPlaying;
  prevButton.disabled = !lessonActive || isPlaying || currentIndex <= 0;
  nextButton.disabled = !lessonActive || isPlaying || currentIndex >= slides.length - 1;
  settingsButton.disabled = !lessonActive;
  modeQuizButton.disabled = !lessonOpen || isPlaying;
  quizCloseButton.disabled = !lessonOpen || activeView !== APP_VIEWS.quiz;
  for (const button of speedButtons) {
    button.disabled = !lessonActive;
  }
  for (const button of illustrationsButtons) {
    button.disabled = !lessonActive;
  }
  for (const button of autoplayButtons) {
    button.disabled = !lessonActive;
  }
  for (const button of randomizeButtons) {
    button.disabled = !lessonActive || isPlaying;
  }
  quizStartButton.disabled = !hasProfile || !lessonOpen || activeView !== APP_VIEWS.quiz || quizQuestions.length > 0;
  quizRestartButton.disabled = !hasProfile || !lessonOpen || activeView !== APP_VIEWS.quiz;
  quizSpeakButton.disabled = !hasProfile || !lessonOpen || activeView !== APP_VIEWS.quiz || !getCurrentQuizQuestion();
  renderPlayPauseButton();
}

function renderProfileList() {
  profileList.innerHTML = "";
  if (profiles.length === 0) {
    const empty = document.createElement("p");
    empty.className = "profile-empty";
    empty.textContent = t("noProfilesMessage");
    profileList.append(empty);
    return;
  }
  for (const profile of profiles) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "profile-list-item";
    const name = document.createElement("span");
    name.className = "profile-list-name";
    name.textContent = profile.name;
    const meta = document.createElement("span");
    meta.className = "profile-list-meta";
    meta.textContent = `${getLanguageName(profile.primary_language)} → ${getLanguageName(profile.secondary_language)}`;
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "profile-delete-button";
    deleteButton.setAttribute("aria-label", t("deleteProfile"));
    deleteButton.setAttribute("title", t("deleteProfile"));
    deleteButton.textContent = "×";
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteProfile(profile.id);
    });
    button.append(name, meta, deleteButton);
    button.addEventListener("click", async () => {
      setActiveProfile(profile);
      returnToLessonsHome();
    });
    profileList.append(button);
  }
}

function deleteProfile(profileId) {
  const profile = profiles.find((item) => item.id === profileId);
  if (!profile) return;
  const confirmed = window.confirm(t("confirmDeleteProfile", { name: profile.name }));
  if (!confirmed) return;
  profiles = profiles.filter((item) => item.id !== profileId);
  saveProfiles();
  const activeProfileId = window.localStorage.getItem(ACTIVE_PROFILE_KEY);
  if (activeProfileId === profileId) {
    window.localStorage.removeItem(ACTIVE_PROFILE_KEY);
  }
  renderProfileList();
  renderProfileSummary();
  updateButtons();
}

function resetCreateProfileForm() {
  profileNameInput.value = "";
  profilePrimarySelect.value = "en-US";
  profileSecondarySelect.value = "pt-BR";
}

function openProfileModal() {
  isProfileModalOpen = true;
  profileModal.classList.remove("is-hidden");
  profileModal.setAttribute("aria-hidden", "false");
  resetCreateProfileForm();
  window.setTimeout(() => {
    profileNameInput.focus();
  }, 0);
}

function closeProfileModal() {
  isProfileModalOpen = false;
  profileModal.classList.add("is-hidden");
  profileModal.setAttribute("aria-hidden", "true");
}

function renderProfileSummary() {
  if (!activeProfile) {
    profileSummary.textContent = t("profileSummaryNone");
    return;
  }
  profileSummary.textContent = t("profileSummary", {
    name: activeProfile.name,
    primary: getLanguageName(activeProfile.primary_language),
    secondary: getLanguageName(activeProfile.secondary_language),
  });
}

function renderLessonsHome() {
  if (!catalog) return;
  lessonList.innerHTML = "";
  const availableLessons = catalog.lessons.filter((lesson) => lessonSupportsProfileLanguages(lesson));
  if (availableLessons.length === 0) {
    const empty = document.createElement("p");
    empty.className = "profile-empty";
    empty.textContent = t("noLessonsAvailable");
    lessonList.append(empty);
    return;
  }
  for (const lesson of availableLessons) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button lesson-card";
    button.textContent = lesson.titles?.[getUiLanguage()] ?? lesson.title;
    button.addEventListener("click", async () => {
      await loadSelectedLesson(lesson.lesson_id);
    });
    lessonList.append(button);
  }
}

function applyUiText() {
  authTitle.textContent = t("authTitle");
  authSubtitle.textContent = t("authSubtitle");
  profileExistingLabel.textContent = t("existingProfile");
  profileNewLabel.textContent = t("createProfile");
  openCreateProfileButton.textContent = t("openCreateProfile");
  profileCreateButton.textContent = t("createProfileButton");
  cancelProfileModalButton.textContent = t("cancel");
  profileNameInput.placeholder = t("profilePlaceholder");
  if (lessonOpen && selectedLessonId && catalog) {
    const lesson = catalog.lessons.find((item) => item.lesson_id === selectedLessonId);
    lessonTitle.textContent = lesson?.titles?.[getUiLanguage()] ?? lesson?.title ?? selectedLessonId;
  } else {
    lessonTitle.textContent = t("lessonsHome");
  }
  lessonSubtitle.textContent = lessonOpen ? "" : t("lessonSubtitle");
  backToLessonsButton.textContent = t("lessonsHome");
  logoutButton.textContent = t("logout");
  lessonsHomeLabel.textContent = t("lessonsHome");
  modeQuizButton.textContent = t("quiz");
  labelWordPrimary.textContent = getLanguageName(getLanguageKeys().primary);
  labelWordSecondary.textContent = getLanguageName(getLanguageKeys().secondary);
  speedLabel.textContent = t("speed");
  illustrationsLabel.textContent = t("illustrations");
  autoplayLabel.textContent = t("autoplay");
  randomizeLabel.textContent = t("randomize");
  document.querySelector("#speed-fast").textContent = t("fast");
  document.querySelector("#speed-normal").textContent = t("normal");
  document.querySelector("#speed-slow").textContent = t("slow");
  document.querySelector("#illustrations-on").textContent = t("on");
  document.querySelector("#illustrations-off").textContent = t("off");
  document.querySelector("#autoplay-on").textContent = t("on");
  document.querySelector("#autoplay-off").textContent = t("off");
  document.querySelector("#randomize-on").textContent = t("on");
  document.querySelector("#randomize-off").textContent = t("off");
  quizPromptLabel.textContent = t("quizPromptLabel");
  quizSpeakButton.textContent = t("speakWord");
  quizHistoryLabel.textContent = t("recentScores");
  quizScoreHeading.textContent = t("quizComplete");
  quizRestartButton.textContent = t("tryAgain");
  quizStartButton.textContent = t("startQuiz");
  renderAutoPlayButtons();
  renderSpeedButtons();
  renderIllustrationsButtons();
  renderRandomizeButtons();
  renderSettingsMenu();
  renderPlayPauseButton();
  renderProfileSummary();
  renderQuizHistory();
  renderProfileList();
  renderLessonsHome();
  renderSlide();
  renderQuizQuestion();
}

function renderAppStateVisibility() {
  const hasProfile = Boolean(activeProfile);
  authView.classList.toggle("is-hidden", hasProfile);
  appView.classList.toggle("is-hidden", !hasProfile);
  lessonsHome.classList.toggle("is-hidden", !hasProfile || lessonOpen);
  learningShell.classList.toggle("is-hidden", !lessonOpen);
  backToLessonsButton.classList.toggle("is-hidden", !lessonOpen);
  if (!lessonOpen) closeSettingsMenu();
  if (hasProfile) {
    closeProfileModal();
  }
}

function setActiveProfile(profile) {
  activeProfile = profile;
  if (profile) window.localStorage.setItem(ACTIVE_PROFILE_KEY, profile.id);
  else window.localStorage.removeItem(ACTIVE_PROFILE_KEY);
  renderProfileList();
  renderAppStateVisibility();
  applyUiText();
  updateButtons();
}

function restoreActiveProfile() {
  const id = window.localStorage.getItem(ACTIVE_PROFILE_KEY);
  if (!id) return;
  const match = profiles.find((profile) => profile.id === id);
  if (match) activeProfile = match;
}

function loadProfiles() {
  try {
    const stored = window.localStorage.getItem(PROFILES_KEY);
    profiles = stored ? JSON.parse(stored) : [];
    if (!Array.isArray(profiles)) profiles = [];
    profiles = profiles.map((profile) => ({
      ...profile,
      primary_language: normalizeLanguageCode(profile.primary_language ?? "en-US"),
      secondary_language: normalizeLanguageCode(profile.secondary_language ?? "pt-BR"),
    }));
  } catch {
    profiles = [];
  }
}

function saveProfiles() {
  window.localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
}

async function loadCatalog() {
  const response = await fetch(new URL(CATALOG_URL, window.location.href), { cache: "no-store" });
  if (!response.ok) throw new Error(`Catalog request failed: ${response.status}`);
  catalog = await response.json();
}

async function loadSelectedLesson(lessonId) {
  const lesson = catalog.lessons.find((item) => item.lesson_id === lessonId);
  if (!lesson) throw new Error(`Unknown lesson id: ${lessonId}`);
  cancelPlayback();
  selectedLessonId = lessonId;
  const manifestUrl = new URL(lesson.manifest_path, window.location.href);
  const response = await fetch(manifestUrl, { cache: "no-store" });
  if (!response.ok) throw new Error(`Manifest request failed: ${response.status}`);
  manifest = await response.json();
  manifestBaseUrl = manifestUrl;
  sourceSlides = [...manifest.generated_files];
  rebuildSlides();
  currentIndex = 0;
  hasStarted = false;
  quizQuestions = [];
  quizCurrentIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  lessonOpen = true;
  loadQuizHistory();
  renderAppStateVisibility();
  applyUiText();
  setStatus(t("readyStart", { speed: t(getSpeedSetting().key) }));
  setQuizStatus(t("readyQuiz"));
  updateButtons();
}

function returnToLessonsHome() {
  cancelPlayback();
  lessonOpen = false;
  manifest = null;
  sourceSlides = [];
  slides = [];
  currentIndex = 0;
  quizQuestions = [];
  renderAppStateVisibility();
  applyUiText();
  setStatus(t("waiting"));
  setQuizStatus(t("readyQuiz"));
  updateButtons();
}

function randomizeSlides() {
  rebuildSlides();
  currentIndex = 0;
  hasStarted = false;
  renderSlide();
  setStatus(t("readyStart", { speed: t(getSpeedSetting().key) }));
  updateButtons();
}

async function togglePlayPause() {
  if (!lessonOpen || activeView !== APP_VIEWS.lesson) return;
  if (isPlaying) {
    cancelPlayback();
    setStatus(t("readyShort", { speed: t(getSpeedSetting().key) }));
    updateButtons();
    return;
  }
  await playCurrentSlide();
}

function startQuiz() {
  cancelPlayback();
  quizQuestions = buildQuizQuestions();
  quizCurrentIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  setQuizStatus(t("readyQuizChoose"));
  renderQuizQuestion();
  updateButtons();
}

async function speakQuizWord() {
  const question = getCurrentQuizQuestion();
  if (!question) return;
  cancelPlayback();
  const token = playbackToken;
  const speedSetting = getSpeedSetting();
  if (!question.wordAudio) {
    setStatus(t("readyShort", { speed: t(speedSetting.key) }));
    return;
  }
  isPlaying = true;
  updateButtons();
  try {
    await playAudioFile(buildAudioUrl(question.wordAudio), speedSetting.playbackRate);
    if (token !== playbackToken) return;
    setQuizStatus(t("readyQuizChoose"));
  } catch {
    setQuizStatus(t("playbackFailedQuiz"));
  } finally {
    if (token === playbackToken) {
      isPlaying = false;
      updateButtons();
    }
  }
}

async function playSinglePart(partKey) {
  if (!lessonOpen || activeView !== APP_VIEWS.lesson) return;
  const item = slides[currentIndex];
  if (!item) return;
  const display = getDisplayData(item);
  const map = {
    primaryWord: display.primaryWordAudio,
    secondaryWord: display.secondaryWordAudio,
    primarySentence: display.primarySentenceAudio,
    secondarySentence: display.secondarySentenceAudio,
  };
  if (!map[partKey]) {
    setStatus(t("readyShort", { speed: t(getSpeedSetting().key) }));
    return;
  }
  cancelPlayback();
  const token = playbackToken;
  const speedSetting = getSpeedSetting();
  isPlaying = true;
  updateButtons();
  try {
    setActivePanel(partKey);
    await playAudioFile(buildAudioUrl(map[partKey]), speedSetting.playbackRate);
    if (token !== playbackToken) return;
    clearActivePanels();
    setStatus(t("readyShort", { speed: t(speedSetting.key) }));
  } catch {
    clearActivePanels();
    setStatus(t("playbackFailedLesson"));
  } finally {
    if (token === playbackToken) {
      isPlaying = false;
      updateButtons();
    }
  }
}

async function playCurrentSlide() {
  if (!lessonOpen || activeView !== APP_VIEWS.lesson) return;
  const item = slides[currentIndex];
  if (!item) return;
  const display = getDisplayData(item);
  const sequence = [
    ["primaryWord", display.primaryWordAudio],
    ["secondaryWord", display.secondaryWordAudio],
    ["primarySentence", display.primarySentenceAudio],
    ["secondarySentence", display.secondarySentenceAudio],
  ].filter(([, path]) => Boolean(path));
  cancelPlayback();
  const token = playbackToken;
  const speedSetting = getSpeedSetting();
  let keepPlaying = false;
  isPlaying = true;
  updateButtons();
  try {
    if (sequence.length === 0) {
      setStatus(t("readyStart", { speed: t(speedSetting.key) }));
      updateButtons();
      return;
    }
    setStatus(t("playingSlide", { speed: t(speedSetting.key) }), true);
    for (const [index, [partKey, path]] of sequence.entries()) {
      if (token !== playbackToken) return;
      setActivePanel(partKey);
      await playAudioFile(buildAudioUrl(path), speedSetting.playbackRate);
      if (speedSetting.pauseMs > 0 && index < sequence.length - 1) {
        clearActivePanels();
        await wait(speedSetting.pauseMs);
      }
    }
    hasStarted = true;
    clearActivePanels();
    setStatus(t("slideComplete", { speed: t(speedSetting.key) }));
    keepPlaying = autoPlayEnabled && currentIndex < slides.length - 1;
  } catch {
    clearActivePanels();
    setStatus(t("playbackFailedLesson"));
  } finally {
    if (token === playbackToken) {
      if (keepPlaying) {
        setStatus(t("nextSlideIn", { seconds: (AUTOPLAY_SLIDE_PAUSE_MS / 1000).toFixed(1) }), true);
      } else {
        isPlaying = false;
        updateButtons();
      }
    }
  }
  if (!keepPlaying || token !== playbackToken) return;
  await wait(AUTOPLAY_SLIDE_PAUSE_MS);
  if (token !== playbackToken) return;
  currentIndex += 1;
  renderSlide();
  updateButtons();
  await playCurrentSlide();
}

function switchView(nextView) {
  activeView = nextView;
  lessonView.classList.toggle("is-hidden", nextView !== APP_VIEWS.lesson);
  quizView.classList.toggle("is-hidden", nextView !== APP_VIEWS.quiz);
  closeSettingsMenu();
  if (nextView === APP_VIEWS.lesson) renderSlide();
  else renderQuizQuestion();
  updateButtons();
}

function createProfile() {
  const name = profileNameInput.value.trim();
  const primary = profilePrimarySelect.value;
  const secondary = profileSecondarySelect.value;
  if (!name) {
    profileSummary.textContent = t("profileNameRequired");
    return null;
  }
  if (primary === secondary) {
    profileSummary.textContent = t("profileLanguagesDifferent");
    return null;
  }
  const profile = {
    id: `profile_${Date.now()}`,
    name,
    primary_language: primary,
    secondary_language: secondary,
  };
  profiles.push(profile);
  saveProfiles();
  resetCreateProfileForm();
  return profile;
}

function logout() {
  cancelPlayback();
  activeProfile = null;
  lessonOpen = false;
  window.localStorage.removeItem(ACTIVE_PROFILE_KEY);
  renderAppStateVisibility();
  applyUiText();
  setStatus(t("waiting"));
  setQuizStatus(t("readyQuiz"));
  updateButtons();
}

async function initialize() {
  await loadCatalog();
  loadProfiles();
  restoreActiveProfile();
  renderProfileList();
  renderAppStateVisibility();
  applyUiText();
  if (activeProfile) {
    returnToLessonsHome();
  } else {
    lessonTitle.textContent = "Simple Lang";
    lessonSubtitle.textContent = t("lessonSubtitle");
    setStatus(t("waiting"));
    setQuizStatus(t("readyQuiz"));
  }
  updateButtons();
}

openCreateProfileButton.addEventListener("click", () => openProfileModal());

profileCreateButton.addEventListener("click", async () => {
  const profile = createProfile();
  if (!profile) return;
  setActiveProfile(profile);
  returnToLessonsHome();
});

closeProfileModalButton.addEventListener("click", () => closeProfileModal());
cancelProfileModalButton.addEventListener("click", () => closeProfileModal());
profileModal.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeProfileModal === "true") {
    closeProfileModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isProfileModalOpen) {
    closeProfileModal();
    return;
  }
  if (event.key === "Escape" && isSettingsMenuOpen) {
    closeSettingsMenu();
  }
});

logoutButton.addEventListener("click", () => logout());
backToLessonsButton.addEventListener("click", () => returnToLessonsHome());
settingsButton.addEventListener("click", () => {
  isSettingsMenuOpen = !isSettingsMenuOpen;
  renderSettingsMenu();
});
repeatButton.addEventListener("click", async () => playCurrentSlide());
prevButton.addEventListener("click", async () => {
  if (currentIndex <= 0) return;
  cancelPlayback();
  currentIndex -= 1;
  renderSlide();
  updateButtons();
  if (hasStarted && autoPlayEnabled) await playCurrentSlide();
});
playPauseButton.addEventListener("click", async () => {
  await togglePlayPause();
});
nextButton.addEventListener("click", async () => {
  if (currentIndex >= slides.length - 1) return;
  const shouldContinuePlaying = isPlaying;
  cancelPlayback();
  currentIndex += 1;
  renderSlide();
  updateButtons();
  if (shouldContinuePlaying) await playCurrentSlide();
});
modeQuizButton.addEventListener("click", () => switchView(APP_VIEWS.quiz));
quizCloseButton.addEventListener("click", () => switchView(APP_VIEWS.lesson));
quizStartButton.addEventListener("click", () => startQuiz());
quizRestartButton.addEventListener("click", () => startQuiz());
quizSpeakButton.addEventListener("click", async () => speakQuizWord());

for (const button of speedButtons) {
  button.addEventListener("click", () => {
    selectedSpeed = button.dataset.speed ?? "normal";
    renderSpeedButtons();
  });
}

for (const button of illustrationsButtons) {
  button.addEventListener("click", () => {
    illustrationsEnabled = button.dataset.illustrations !== "off";
    renderIllustrationsButtons();
    renderLessonCardVisual();
  });
}

for (const button of autoplayButtons) {
  button.addEventListener("click", () => {
    autoPlayEnabled = button.dataset.autoplay !== "off";
    renderAutoPlayButtons();
  });
}

for (const button of randomizeButtons) {
  button.addEventListener("click", () => {
    const nextEnabled = button.dataset.randomize === "on";
    if (randomizeEnabled === nextEnabled) return;
    randomizeEnabled = nextEnabled;
    renderRandomizeButtons();
    if (lessonOpen) randomizeSlides();
  });
}

document.addEventListener("click", (event) => {
  if (!isSettingsMenuOpen) return;
  if (event.target instanceof Node && settingsMenu?.contains(event.target)) return;
  if (event.target instanceof Node && settingsButton?.contains(event.target)) return;
  closeSettingsMenu();
});

[
  ["primaryWord", document.querySelector("#panel-word-english")],
  ["secondaryWord", document.querySelector("#panel-word-portuguese")],
  ["primarySentence", document.querySelector("#panel-sentence-english")],
  ["secondarySentence", document.querySelector("#panel-sentence-portuguese")],
].forEach(([partKey, panel]) => {
  panel?.addEventListener("click", async () => playSinglePart(partKey));
});

initialize().catch((error) => {
  console.error(error);
  lessonTitle.textContent = "Lesson failed to load";
  lessonSubtitle.textContent = "Serve the project from the repository root so the app can fetch the lesson catalog and manifests.";
  setStatus(t("loadFailed"));
  setQuizStatus(t("loadFailed"));
});
