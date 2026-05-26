//constants
const toggleBtn = document.querySelector('.theme-toggle');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navLinks = document.querySelector('.nav-links');

//event listeners

//hamburger menu toggle
hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

//mode toggle
toggleBtn.addEventListener('click', () => {
    //gets the current theme from the data attribute of the html element
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
    }
});