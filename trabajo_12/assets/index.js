const mainSection = document.getElementById('main-section');
const themeSelector = document.getElementById('theme-selector');
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

themeSelector.addEventListener('change', (event) => {
  // event.target.checked ? mainSection.dataset.theme = "dark" : mainSection.dataset.theme = "light"; 
  mainSection.dataset.theme = event.target.checked ? DARK_THEME : LIGHT_THEME;
    
});