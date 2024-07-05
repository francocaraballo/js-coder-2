// Objetivo: Crear un sistema para almacenar productos de una zapateria

class Product {
    constructor(type, product, brand, price){
        this.type = type;
        this.product = product;
        this.brand = brand;
        this.price = price;
        this.id;
    }

}

const addProduct = () => {
    const type = prompt("Type of clothing: ");
    const product = prompt("Enter model: ");
    const brand = prompt("Enter brand: ");
    const price = parseFloat(prompt("Enter price: "));

    return new Product(type, product, brand, price);
}

const products = [];

products.push(new Product("Sneakers", "Air Max", "Nike", 500));
products.push(new Product("Sneakers", "Retro 90", "Adidas", 320));
products.push(new Product("Shirt", "T-", "Nike", 100));
products.push(new Product("Short", "Swimg", "Topper", 800));

const enterProducts = () => {

    let confirmAdd = confirm("Do you want add a product?");

    while (confirmAdd) {
        products.push(addProduct());

        confirmAdd = confirm("Quieres seguir agregando productos?")
    } 
}

enterProducts();

const showListAlert = (arr) => {
    const productsList = arr.map(e => `${e.type} - ${e.product} - ${e.brand} - $${e.price}`);
    return productsList.join("\n")
}

const orderByPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    alert(`Price: Low - High \n${showListAlert(products)}`);
};
// orderByPriceAsc();

const orderByPriceDesc = () => {
    products.sort((a,b) => b.price - a.price);
    alert(`Price: High - Low \n${showListAlert(products)}`);
};
// orderByPriceDesc();

const showPricesLowerThan = (n) => {
    const filterResult = products.filter(product => product.price <= n );
    alert(`Prices lower than $${n}:\n${showListAlert(filterResult)}`);
};
// showPricesLowerThan(200);

const showPricesHigherThan = (n) => {
    const filterResult = products.filter(product => product.price >= n );
    alert(`Prices higher than $${n}:\n${showListAlert(filterResult)}`)
}
// showPricesHigherThan(300)

const filterByBrand = (s) => {
    const filterResult = products.filter(product => product.brand.toLowerCase() === s.toLowerCase());
    alert(`Filter by brand: ${s}\n${showListAlert(filterResult)}`)
}
// filterByBrand("Nike")

const filterByType = (s) => {
    const filterResult = products.filter(product => product.type.toLowerCase() === s.toLowerCase());
    alert(`Filter by clothe type: ${s}\n${showListAlert(filterResult)}`)
}
// filterByType("Shirt");

const typeClotheAvaible = () => {
    const map = products.map(e => e.type);
    return new Set(map);
} 





