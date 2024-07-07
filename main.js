// Objetivo: Crear un sistema para almacenar productos de una zapateria

class Product {
    constructor(name, price){
        this.id = products[products.length - 1].id + 1; // auto ID
        this.name = name;
        this.price = price;
        this.quantity = 0;
    }
}

const products = [
    {
        id: 0,
        name: "Nike Air Zoom",
        price: 63,
        quantity: 0
    },
    {
        id: 1,
        name: "Nike Air Max",
        price: 120,
        quantity: 0
    },
    {
        id: 2,
        name: "Adidas Grand Court",
        price: 79,
        quantity: 0
    },
    {
        id: 3,
        name: "Adidas Run 50s",
        price: 90,
        quantity: 0
    },
    {
        id: 4,
        name: "Puma Redeem",
        price: 80,
        quantity: 0
    },
    {
        id: 5,
        name: "Puma Trinity",
        price: 115,
        quantity: 0
    }
];

const shopCart = [];

const newProduct = () => {
    const name = prompt("Ingrese el producto: ");
    const price = parseFloat(prompt("Ingrese el precio: "));

    return new Product(name, price);
}

const enterProductsToStock = () => {

    alert("A continuacion, ingrese los datos del producto");
    let confirmAdd = true;

    while (confirmAdd) {
        products.push(newProduct());
        confirmAdd = confirm("Quieres seguir agregando productos?")
    } 
}

const convertToList = (arr) => {
    const productsList = arr.map(e => `${e.name} - $${e.price}`);
    return productsList.join("\n");
}

const showListAndQuantity = (arr) => {
    const productsList = arr.map(e => `${e.name} - ${e.quantity} x $${e.price}`);
    return productsList.join("\n");
}

const buyProducts = (products, cart) => {
    let continueBuy = true;

    do {
        let productName = prompt(`Que producto desea comprar?\n\n${convertToList(products)}`)
        let productQuantity = parseInt(prompt("Cuantas unidades quiere agregar?"));

        const product = products.find(i => i.name.toLowerCase() === productName.toLowerCase());
        addToCart(product, productQuantity);
        continueBuy = confirm("Queres seguir comprando?")
    } while (continueBuy);
    checkout(cart);
}

const addToCart = (product, quantity) => {

    const itemCart = shopCart.find(item => item.name.toLowerCase() === product.name.toLowerCase());
    if(itemCart) {
        product.quantity += quantity;
    } else {
        product.quantity += quantity;
        shopCart.push(product);
    }
}

const totalToPay = (cart) => {
    let totalPerItem = cart.map(item => item.price * item.quantity);
    let totalAmount = totalPerItem.reduce((acc, num) => acc + num, 0);

    return totalAmount;
}

const checkout = (cart) => {
    alert(`Productos en el carrito:\n\n${showListAndQuantity(cart)}\n\nTotal: $${totalToPay(cart)}`);
    alert("Pago realizada con exito! Gracias por su compra");
}
buyProducts(products, shopCart);

// Filter functions

const orderByPriceAsc = () => {
    const sortProducts = products.slice(0)
    sortProducts.sort((a, b) => a.price - b.price);
    alert(`Price: Low - High \n\n${convertToList(sortProducts)}`);
};
// orderByPriceAsc();

const orderByPriceDesc = () => {
    const sortProducts = products.slice(0)
    sortProducts.sort((a,b) => b.price - a.price);
    alert(`Price: High - Low \n\n${convertToList(sortProducts)}`);
};
// orderByPriceDesc();

const showPricesLowerThan = (n) => {
    const filterResult = products.filter(product => product.price <= n );
    alert(`Prices lower than $${n}:\n\n${convertToList(filterResult)}`);
};
// showPricesLowerThan(100);

const showPricesHigherThan = (n) => {
    const filterResult = products.filter(product => product.price >= n );
    alert(`Prices higher than $${n}:\n\n${convertToList(filterResult)}`)
}
// showPricesHigherThan(80)





