const toggle = document.getElementById('toggle-btn');
const toggleIcon = document.getElementById('toggle-btn-icon');
const body = document.querySelector('body');
const btnContent = document.querySelectorAll('.btn-element');
const header = document.getElementById('header');
const root = document.querySelector(':root');

var osThemeDark = window.matchMedia('(prefers-color-scheme: dark)')
.matches;

var osThemeLight = window.matchMedia('(prefers-color-scheme: light)')
.matches;

var currentTheme = localStorage.getItem("theme");

const sunIcon  = "bi bi-brightness-high-fill";
const moonIcon = "bi bi-moon-stars-fill";

var lightColor = getComputedStyle(root)
.getPropertyValue('--default-light-theme-color');
var darkColor  = getComputedStyle(root)
.getPropertyValue('--default-dark-theme-color');
var extraColor =  getComputedStyle(root)
.getPropertyValue('--link-text-color-dark');

window.addEventListener('load', () => {
    if(currentTheme === "dark") {
        toggleIcon.className = moonIcon;
        body.style.backgroundColor = darkColor;
        header.style.color = lightColor;
        toggle.style.color = lightColor;
        for(let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = lightColor;
        }
        console.log("Dark But Not OS Theme Dark")
    }
    else if (osThemeDark && currentTheme == null){
        toggleIcon.className = moonIcon;
        body.style.backgroundColor = darkColor;
        header.style.color = lightColor;
        toggle.style.color = lightColor;
        for(let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = lightColor;
        }
        console.log("Dark But OS Theme Undefined As Well")
    }
    else if (osThemeLight && currentTheme == null) {
        toggleIcon.className = sunIcon;
        body.style.backgroundColor = lightColor;
        header.style.color = darkColor;
        toggle.style.color = darkColor;
        for(let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = darkColor;
        }
        console.log("Light But OS Theme Undefined As Well")
    }
    else {
        toggleIcon.className = sunIcon;
        body.style.backgroundColor = lightColor;
        header.style.color = darkColor;
        for(let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = darkColor;
        }
        console.log("Light But Not OS Theme Dark")
    }
})

toggle.addEventListener('click', () => {
    if(toggleIcon.className === moonIcon){
        toggleIcon.className = sunIcon;
        body.style.backgroundColor = lightColor;
        header.style.color = darkColor;
        for(let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = darkColor;
        }
        localStorage.setItem('theme', 'light');
    }
    else {
        toggleIcon.className = moonIcon;
        body.style.backgroundColor = darkColor;
        header.style.color = lightColor;
        for(let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = lightColor;
        }
        localStorage.setItem('theme', 'dark');
    }
})


console.log(currentTheme)