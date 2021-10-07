var addToCart = document.querySelector("#cartButton");

var int = document.querySelector("#counter");
var interger = 0;

addToCart.addEventListener('click', function(){
    interger +=1;
    int.innerHTML = "(" + interger + ")";
});