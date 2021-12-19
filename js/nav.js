const navBar = document.querySelector(".nav-bar");

function createHTML() {
    navBar.innerHTML = `
        <p class="logo-name"><a href="index.html"><img src="images/squareeyes-logo-small.png"></a></p>
        <div class="menu-wrap">
            <div class="nav-menu-left">
                <ul>
                    <li class="nav-item"><a href="index.html">Home</a></li>
                    <li class="nav-item"><a href="visit-us.html">For producers</a></li>
                    <li class="nav-item"><a href="exhibitions.html">For viewers</a></li>
                </ul>
            </div>
            <div class="nav-menu-right">
                <ul>
                    <li><a href="search.html">Search</a></li>
                    <li><a href="#">Log in</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="cart.html" class="nav-cart counter" id="">Cart (0)</a></li>
                </ul> 
            </div>

        </div>
        <div class="hamburger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>

    `
}

createHTML();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-wrap");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}) 

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))


const currentLocation = location.href;
const menuItem = document.querySelectorAll("a");
const menuLenght = menuItem.length;

for (let i = 0; i<menuLenght;  i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "current"
    }
}