import{setAddButtonEvent} from "../events.js"
const clearHtml = () => {
    document.querySelector('.product-container')?.remove();
    document.querySelector('.filter')?.remove();    
    document.querySelector('.cart-container')?.remove();
    document.querySelector('.receipt-product')?.remove();
}
const createElement = (tag, className=null, text=null) =>{
    const element = document.createElement(tag);
    className && element.classList.add(className);
    text && (element.textContent = text);
    return element;
}
//DEBE imprimir en pantalla la información de filtros.

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.
const formatMenu = (name, description, price) => {
    try {
        const productContainer =createElement('div', 'product-container');

        const h3Product=createElement('h3', null, name);//cambiar título
        productContainer.appendChild(h3Product);

        const pProduct=createElement('p', null, description);//cambiar descripción
        productContainer.appendChild(pProduct);

        const priceProduct=createElement('div', 'price-container');

        const h5Product=createElement('h5', null, `${price} €`);//cambiar precio
        priceProduct.appendChild(h5Product);

        const buttonProduct=createElement('button', 'add-button', 'Añadir');
        setAddButtonEvent(buttonProduct);
        priceProduct.appendChild(buttonProduct);

        productContainer.appendChild(priceProduct);

        return productContainer;
        
        
    } catch (error) {
        console.error(`Error charge products: ${error}`)
    }
}
const setDataMenu = (fragment, products) => products.map(product =>{
    const productPrint = formatMenu(product.name, product.description, product.price);
    fragment.appendChild(productPrint);
});
const printMenu = (products) => {
    const fragment=document.createDocumentFragment();
    setDataMenu(fragment, products);
    document.getElementById('products').appendChild(fragment);
}


export{clearHtml, printMenu}