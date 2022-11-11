const NavEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.navbar-shopping-cart');
const shopppingCart = document.querySelector('#shopppingCart');
const cardsContainer = document.querySelector('.cards-container');

NavEmail.addEventListener('click', popUpMenu);
burgerMenu.addEventListener('click', popUpMobileMenu);
carritoMenu.addEventListener('click', popUpAsideCart);

function popUpMenu(){
    const isAsideMenuClosed =  shopppingCart.classList.contains('inactive');
    if(!isAsideMenuClosed){
        shopppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
};

function popUpMobileMenu(){
    const isAsideMenuClosed =  shopppingCart.classList.contains('inactive');
    if(!isAsideMenuClosed){
        shopppingCart.classList.add('inactive');
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

    shopppingCart.classList.toggle('inactive')
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Skateboard",
    price: 180,
    img: 'https://images.pexels.com/photos/2529187/pexels-photo-2529187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: "Longboard",
    price: 230,
    img: 'https://images.pexels.com/photos/11958765/pexels-photo-11958765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: "Surf board",
    price: 350,
    img: 'https://images.pexels.com/photos/10880049/pexels-photo-10880049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: "Electric Scooter",
    price: 480,
    img: 'https://images.pexels.com/photos/4562133/pexels-photo-4562133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(productList){

    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const image = document.createElement('img');
        image.setAttribute('src', product.img);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDetail= document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
    
        productDetail.appendChild(productPrice);
        productDetail.appendChild(productName);
    
    
        const productFigure = document.createElement('figure');
    
        const productIcon = document.createElement('img');
        productIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productIcon);
    
    
        productInfo.appendChild(productDetail);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(image);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);