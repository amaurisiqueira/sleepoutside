import { setLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');

function addProductToCart(product) {
  console.log('addProductToCart ');
  console.log(product);
  setLocalStorage('so-cart', product);
}
// add to cart button event handler
async function addToCartHandler(e) {

  console.log('addToCartHandler e.target.dataset.id=');
  console.log(e.target.dataset.id);
  const product = await dataSource.findProductById(e.target.dataset.id);
  
  console.log('-------------------------------------------------------------');
  
  console.log('product = await dataSource.findProductById(e.target.dataset.id);');
  
  
  console.log(product);


  console.log('-------------------------------------------------------------');
  
  addProductToCart(product);
}

// add listener to Add to Cart button  addToCart
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
