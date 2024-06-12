import { getLocalStorage } from './utils.mjs';

function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');

  // console.log('--------------------*----------------------');
  // console.log('');
  
  // console.log('cartItems:');
  // console.log(cartItems);
  // console.log('');
  // console.log('--------------------*----------------------');




  if (cartItems && Array.isArray(cartItems)) {
   /* // console.log('Contenido de cartItems:');
    cartItems.forEach((item, index) => {
      // console.log(`Item ${index + 1}:`);
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          // console.log(`ZZZZZZZZ  ${key}: ${item[key]}`);
        }
      }
    });*/

    const htmlItems = cartItems.map( 
      (item) => cartItemTemplate(item)
    );
  
    document.querySelector('.product-list').innerHTML = htmlItems.join('');
  

  } else {
    // console.log('No hay elementos en el carrito o el formato es incorrecto.');
  }
/*
  const htmlItems = cartItems.map( 
    (item) => cartItemTemplate(item)
  );

  document.querySelector('.product-list').innerHTML = htmlItems.join('');
  */
}

function cartItemTemplate(item) {
  const newItem = `<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${item.Image}'
      alt='${item.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: 1</p>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
