const NavEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

NavEmail.addEventListener('click', popUpMenu);

function popUpMenu(){
    desktopMenu.classList.toggle('inactive');
}