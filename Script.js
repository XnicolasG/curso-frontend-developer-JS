const NavEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');


NavEmail.addEventListener('click', popUpMenu);
burgerMenu.addEventListener('click', popUpMobileMenu);
carritoMenu.addEventListener('click', popUpAsideCart);

function popUpMenu(){
    const isAsideMenuClosed =  asideMenu.classList.contains('inactive');
    if(!isAsideMenuClosed){
        asideMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
};

function popUpMobileMenu(){
    const isAsideMenuClosed =  asideMenu.classList.contains('inactive');
    if(!isAsideMenuClosed){
        asideMenu.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

function popUpAsideCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isPopUpMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if (!isPopUpMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    asideMenu.classList.toggle('inactive')
}