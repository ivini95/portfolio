let currentLanguage = 'pt'; // Linguagem padrão

async function loadTranslations(lang) {
    const response = await fetch(`translations/${lang}.json`);
    const translations = await response.json();
    return translations;
}

async function updateContent(lang) {
    const translations = await loadTranslations(lang);
    
    document.getElementById('languageButtonPT').innerText = translations.language.pt;
    document.getElementById('languageButtonEN').innerText = translations.language.en;
    document.getElementById('download_cv').innerText = translations.download_cv;
    document.getElementById('name').innerText = translations.name;
    document.getElementById('profession').innerText = translations.profession;
    document.getElementById('about_me').innerText = translations.about_me;
    document.getElementById('about_text').innerHTML = translations.about_text;
    document.getElementById('projects').innerText = translations.projects;
    document.getElementById('project_front').innerText = translations.project_buttons.front;
    document.getElementById('project_back').innerText = translations.project_buttons.back;
    document.getElementById('project_full').innerText = translations.project_buttons.full;
    document.getElementById('in_progress').innerHTML = translations.in_progress;
    document.getElementById('project_title').innerText = translations.project_details.title;
    document.getElementById('project_description').innerHTML = translations.project_details.description;
    document.getElementById('technologies').innerText = translations.technologies;
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang); // Salva a linguagem
    updateContent(currentLanguage);
}

// Ao carregar a página, verifica se há uma linguagem salva
window.onload = () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    updateContent(currentLanguage);
};

// Adiciona eventos aos botões de linguagem
document.getElementById('languageButtonPT').onclick = () => changeLanguage('pt');
document.getElementById('languageButtonEN').onclick = () => changeLanguage('en');
