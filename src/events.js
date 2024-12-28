//Intenta separar los eventos en este archivo.
import{products, filters} from "./data/data.js";
import {clearHtml, printFilters, printMenu} from "./components/menu.js";
import {changeFilter} from "./components/searcher.js";
import {displayCart, productAddToCart} from "./components/cart.js";

document.addEventListener("DOMContentLoaded", function() {
    clearHtml();
    printFilters(filters);
    printMenu(products);
    document.getElementById('cart').addEventListener('click', displayCart);
});
const setFilterButtonEvent = (button) =>{
    button.addEventListener('click', () => changeFilter(products));
}
const setAddButtonEvent = (button) =>{
    button.addEventListener('click', productAddToCart);
}

export {setFilterButtonEvent, setAddButtonEvent}