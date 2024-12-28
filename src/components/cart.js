//DEBE contener las funcionalidades del carrito de compras.
const displayCart = () => {
    const cartContainer = document.getElementById('cart-container');
    const realDisplay = window.getComputedStyle(cartContainer).display;

    cartContainer.style.display = realDisplay === 'none' ? 'inherit' : 'none';
}
const productAddToCart = () => {
    alert("aqui irá un evento");
}

export{displayCart, productAddToCart}