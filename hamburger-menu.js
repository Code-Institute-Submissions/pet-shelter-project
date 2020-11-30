const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});