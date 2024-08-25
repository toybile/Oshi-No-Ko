//

const divs_middle = document.querySelectorAll('.div-middle_light-theme_, .div-middle_dark-theme_');
const divs_right = document.querySelectorAll('.div-right_light-theme_, .div-right_dark-theme_');

const toggleButton = document.getElementById('toggle-button');
const themeIcon = document.getElementById('theme-icon');


let LightTheme = true;

themeIcon.src = 'https://www.svgrepo.com/show/407540/sun.svg';

//

toggleButton.addEventListener('click', () => {
    divs_middle.forEach((div) => {
        div.classList.toggle('div-middle_light-theme_');
        div.classList.toggle('div-middle_dark-theme_');
    })
    divs_right.forEach((div) => {
        div.classList.toggle('div-right_light-theme_');
        div.classList.toggle('div-right_dark-theme_');
    })

    LightTheme = !LightTheme;

    if (LightTheme) {
        themeIcon.src = 'https://www.svgrepo.com/show/407540/sun.svg';
        toggleButton.classList.remove('dark-theme');
        toggleButton.classList.add('light-theme');

        document.documentElement.style.setProperty('--scrollbar-thumb-bg', 'azure');
        document.documentElement.style.setProperty('--scrollbar-thumb-border', '2px solid rgb(255, 217, 0)');
        document.documentElement.style.setProperty('--scrollbar-thumb-box-shadow', 'inset 0px 0px 0px rgba(0, 0, 0, 0)');
        document.documentElement.style.setProperty('--scrollbar-width', '6px');
        document.documentElement.style.setProperty('--custom-padding-right', '2px');

    } else {
        themeIcon.src = 'https://www.svgrepo.com/show/532875/moon.svg';
        toggleButton.classList.remove('light-theme');
        toggleButton.classList.add('dark-theme');

        document.documentElement.style.setProperty('--scrollbar-thumb-bg', 'none');
        document.documentElement.style.setProperty('--scrollbar-thumb-border', '2px solid black');
        document.documentElement.style.setProperty('--scrollbar-thumb-box-shadow', 'inset 0px 0px 2px black');
        document.documentElement.style.setProperty('--scrollbar-width', '8px');
        document.documentElement.style.setProperty('--custom-padding-right', '0px');
    }
})

//