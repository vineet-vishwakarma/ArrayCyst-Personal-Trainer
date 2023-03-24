// Menu Button

const toggleButton = document.getElementById('nav-toggle');
const navLink = document.getElementById('nav-link');

toggleButton.addEventListener('click', () => {
    navLink.classList.toggle('active')
})
