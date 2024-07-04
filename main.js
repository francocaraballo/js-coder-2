// Objetivo: Crear un sistema para almacenar productos de una zapateria

class Product {
    constructor(type, product, brand, price){
        this.type = type;
        this.product = product;
        this.brand = brand;
        this.price = price;
    }

}

const addProduct = () => {
    const type = prompt("Type of clothing: ");
    const product = prompt("Enter model: ");
    const brand = prompt("Enter brand: ");
    const price = parseFloat(prompt("Enter price: "));

    return new Product(type, product, brand, price);
}


const product1 = new Product("Sneakers", "Air Max", "Nike", 500);
const product2 = new Product("Sneakers", "Retro 90", "Adidas", 320);
const product3 = new Product("Shirt", "T-", "Nike", 100);
const product4 = new Product("Short", "Swimg", "Topper", 800);
const products = [];

products.push(product1, product2, product3, product4);


const orderByPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    console.log(products);
};

const orderByPriceDesc = () => {
    products.sort((a,b) => b.price - a.price);
    console.log(products);
};

const showPricesLowerThan = (n) => {
    const filterResult = products.filter(product => product.price <= n );
    console.log(filterResult);
};

const showPricesHigherThan = (n) => {
    const filterResult = products.filter(product => product.price >= n );
    console.log(filterResult);
}

const filterByBrand = (s) => {
    const filterResult = products.filter(product => product.brand === s);
    console.log(filterResult);
}

filterByBrand("Nike")





