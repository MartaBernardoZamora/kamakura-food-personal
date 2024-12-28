//Intenta separar los eventos en este archivo.
import{products, filters} from "./data/data.js";
import {clearHtml, printFilters, printMenu} from "./components/menu.js";
import {changeFilter} from "./components/searcher.js";
import {productAddToCart} from "./components/cart.js";

document.addEventListener("DOMContentLoaded", function() {
    clearHtml();
    printFilters(filters);
    printMenu(products);
});
const setFilterButtonEvent = (button) =>{
    button.addEventListener('click', changeFilter);
}
const setAddButtonEvent = (button) =>{
    button.addEventListener('click', productAddToCart);
}

export {setFilterButtonEvent, setAddButtonEvent}