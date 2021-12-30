const menuMobile = document.querySelector('.navigation');
const menuMobileBtn = document.querySelector('.nav-mobile-btn');

//Check if the mobile menu is already activated on click if not then we activate it
menuMobileBtn.addEventListener('click', () => {
    if(menuMobile.classList.contains('active-menu')){
        menuMobile.classList.remove('active-menu');
    }else{
        console.log('lol');
        menuMobile.classList.add('active-menu');
    }
});