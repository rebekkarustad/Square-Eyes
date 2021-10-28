const baseUrl = "http://www.rebekkarustad.com/wp-json/wc/store/products/"
const detailContainer = document.querySelector(".film-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = baseUrl + id;

async function fetchInfo() {
    try {
        const fetchDetails = await fetch(url)

        const product = await fetchDetails.json();

        console.log(product);

        createHtml(product);

    } catch(error) {
        console.log(error);
        detailContainer.innerHTML = displayError("error", error);
    }
};

fetchInfo();

function createHtml(product) {

    document.title = `${product.name} | Square eyes`;
  
    detailContainer.innerHTML = `<div class="film-wrap-details">
                                    <img src="${product.images[0].src}" alt="${product.images}" />
                                    <h1>${product.name}</h1>
                                    <p>${product.categories[0].name} | 2021 | 1:24:33 </p>
                                    <button class="cta-pay" id="cartButton">Add to cart - ${product.prices.price} ${product.prices.currency_symbol}</button>
                                    <h2>Description</h2>
                                        <div class="film__description">
                                            <p>${product.description}</p>
                                            <p>${product.short_description}</p>
                                        </div>
                                </div>`
}; 