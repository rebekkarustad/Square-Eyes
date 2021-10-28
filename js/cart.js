var addToCart = document.querySelector("#cartButton");

var int = document.querySelector("#nav-counter");
var interger = 0;

addToCart.addEventListener('click', function(){
    interger += 1;
    int.innerHTML = "(" + interger + ")";
});



var addToCartHamburger = document.querySelector("#cartButton");

var intHamburger = document.querySelector("#hamburger-counter");
var intergerHamburger = 0;

addToCartHamburger.addEventListener('click', function(){
    intergerHamburger += 1;
    intHamburger.innerHTML = "(" + intergerHamburger + ")";
});