const baseUrl = "http://www.rebekkarustad.com/wp-json/wc/store/products"
const productContainer = document.querySelector(".products");
const perPage = document.querySelector(".per-page-selection");
const categories = document.querySelectorAll(".categories")
const searchButton = document.querySelector(".search-button")

const filmDetailsContainer = document.querySelector(".film-details");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();

    products.forEach(function(product){
        productContainer.innerHTML += `
        <div class="product">
            <div><img src="${product.images[0].src}"></div>
            <div class="product-text">
                <h2>${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <div class="price">
                    <p>${product.prices.price}${product.prices.currency_symbol}</p>
                    <p><a href="details.html?id=${product.id}">More info >></a></p>
                </div>
            </div>
        </div>`
    })
}

getProducts(baseUrl);

perPage.onchange = function(event){
    const newUrl = baseUrl + `?per_page=${event.target.value}`;
    productContainer.innerHTML ="";
    getProducts(newUrl);
}

categories.forEach(function(category){
    category.onclick = function(event){
        let newUrl;
        if(event.target.id ==="featured"){
            newUrl = baseUrl + "?featured=true";
        }
        else{
            const categoryChosen = event.target.value;
            newUrl = baseUrl + `?category=${categoryChosen}`
        }
        productContainer.innerHTML ="";
        getProducts(newUrl);
    }
})

searchButton.onclick = function(){
    const searchInput = document.querySelector("#search-input").value;
    const newUrl = baseUrl + `?search=${searchInput}`;
    productContainer.innerHTML ="";
    getProducts(newUrl);
}

// <div class="product-image" style="background-image:url('${product.images[0].src}')"></div>
