//Intenta separar los eventos en este archivo.
import {clearHtml, menu, productAdd} from "./components/menu.js";
document.addEventListener("DOMContentLoaded", function() {
    clearHtml();
    menu();
});
const buttonAdd= (button) =>{
    button.addEventListener('click', productAdd);
}
export {buttonAdd}