let menu = document.querySelector('.menu-icon');
let navbars = document.querySelector('.navbar');

menu.onclick = () => {
    navbars.classList.toggle('open-menu')
    menu.classList.toggle('move')
}
window.onscroll = () => {
    navbars.classList.remove('open-menu')
    menu.classList.remove('move')
}


/* ==========windon scroll===============*/
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle
        ('window-scroll', window.scrollY > 0);
});




/* ==========Dark theme===============*/
const themeBtn = document.getElementById("theme-button")
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList.contains[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeBtn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




/* ===================Scroll-top============*/
let scrollTop = document.querySelector('.scroll-top');

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});


/* ===================fillters tab============*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            tc.classList.remove('fillters_active')
        })

        target.classList.add('fillters_active')

        tabs.forEach(t => {
            t.classList.remove('fillters-tab-active')
        })

        tab.classList.add('fillters-tab-active')

    })
});




/* =================== testimonial slide============*/

let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");
function showPreview() {
    for (userPic of userPics) {
        userPic.classList.remove("active-pic");
    }
    for (userText of userTexts) {
        userText.classList.remove("active-text");
    }
    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}




/* =================== CONTACT FOCUS============*/
const inputs = document.querySelectorAll(".input")

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});