// Write a JavaScript function manageShoppingCart(cart) that takes an array of arrays (representing items in the cart) as input and performs the following tasks:

// Add Item: Add a new item to the cart.
// Remove Item: Remove an item from the cart at index 1 using splice().
// Slice Cart: Create a sliced copy of the cart using slice() and log the sliced cart.

function manageShoppingCart(cart) {
    console.log("Initial Cart:", cart);
 
    // add item
    const addItem = "keyboard";
    cart.push(addItem);
    console.log("cart after adding item:",cart);
    
    //remove item
    cart.splice(1,1);   //remove item at index 1
    console.log("cart after removing item at index 1:",cart);

    //slice cart
    const slicedCart = cart.slice();
    console.log("Sliced cart:", slicedCart);
}
const cart = ["mouse","monitor"];
manageShoppingCart(cart);