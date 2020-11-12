// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
@@ -44,12 +44,13 @@ function handleSubmit(event) {
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  if (name === Product.allProducts[i].name){
    return event.target.quanity.value
    Cart.push(Product.allProducts[i].name)
  var picked = document.getElementById('items').value;
  // TODO: get the quantity
  var quantity = document.getElementById('quantity').value;
  // TODO: using those, add one item to the Cart
}
  cart.addItem(picked,quantity);
  }

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

@@ -60,12 +61,11 @@ function updateCartPreview() {
}

// Set up the "submit" event listener on the form.

// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
populateForm(); 