};

Cart.prototype.addItem = function(product, quantity) {

 var newItem= this.product*this.quantity;
 var newItem = new CartItem(product,quantity);
 this.items.push(newItem);
 console.log(this.items);
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
 // TODO: Fill in this instance method to create a new CartItem and add it to this.items
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  // var cart = JSON.stringify(Cart);
  localStorage.setItem('cart', JSON.stringify(this.items));
};

Cart.prototype.removeItem = function(item) {
@@ -28,7 +28,7 @@ var CartItem = function(product, quantity) {
  this.quantity = quantity;
};

// Product contructor.
// Product constructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;