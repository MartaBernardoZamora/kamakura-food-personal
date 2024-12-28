//Intenta separar los eventos en este archivo.
import{products, filters} from "./data/data.js";
import {clearHtml, printMenu} from "./components/menu.js";
import {productAddToCart} from "./components/cart.js";

document.addEventListener("DOMContentLoaded", function() {
    clearHtml();
    printMenu(products);
});
const setAddButtonEvent = (button) =>{
    button.addEventListener('click', productAddToCart);
}
export {setAddButtonEvent}