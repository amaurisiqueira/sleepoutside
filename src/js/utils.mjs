// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {

  let value = JSON.parse(localStorage.getItem(key));
  // console.log(`IN FUNCTION getLocalStorage ${key}:`, value);
  
 // return value;
 return Array.isArray(value) ? value : (value !== null ? [value] : []);

}
// save data to local storage
export function setLocalStorage(key, data) {

  // console.log(`setLocalStorage ${key}:`, data);

  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
