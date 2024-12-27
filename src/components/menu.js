//DEBE imprimir en pantalla la información de filtros.
import{products} from "../data/data.js";
import{buttonAdd} from "../events.js"
const clearHtml = () => {
    document.querySelector('.product-container').remove();
    document.querySelector('.filter').remove();    
    document.querySelector('.cart-container').remove();
    document.querySelector('.receipt-product').remove();
}
const createElement = (tag, className=null, text=null) =>{
    const element = document.createElement(tag);
    className && element.classList.add(className);
    text && (element.textContent = text);
    return element;
}
const menu = () => {
    console.log(products);
    try {
        const fragment=document.createDocumentFragment();
        const productContainer =createElement('div', 'product-container');

        const h3Product=createElement('h3', null, 'titulo');//cambiar título
        productContainer.appendChild(h3Product);

        const pProduct=createElement('p', null, 'Descripción');//cambiar descripción
        productContainer.appendChild(pProduct);

        const priceProduct=createElement('div', 'price-container');

        const h5Product=createElement('h5', null, 'Precio €');//cambiar precio
        priceProduct.appendChild(h5Product);

        const buttonProduct=createElement('button', 'add-button', 'Añadir');
        buttonAdd(buttonProduct);
        priceProduct.appendChild(buttonProduct);

        productContainer.appendChild(priceProduct);

        fragment.appendChild(productContainer);
        
        document.getElementById('products').appendChild(fragment);
    } catch (error) {
        console.error(`Error charge products: ${error}`)
    }
}
const productAdd = () =>{
    alert("aqui");
}
export{clearHtml, menu, productAdd}
//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.