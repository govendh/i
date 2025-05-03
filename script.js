let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();

  // Check if the added item is cake, and play the song only for the cake
  if (name === 'cake') {
    document.getElementById('cake-song').play();
  }
}


function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
}

function orderNow() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  // Creating the order details string
  const orderDetails = cart.map(item => `${item.name}: ₹${item.price}`).join('%0A');

  // Creating the mailto link with placeholders for name and address
  const mailtoLink = `mailto:govendhan4196@gmail.com?subject=New%20Order&body=NAME:%20<name%20here>%20%0A%0AAddress:%20<address%20here%20please>%0A%0AOrder%20Details:%0A%0A${orderDetails}%0A%0ATime:%20${encodeURIComponent(new Date().toLocaleString())}`;

  // Redirecting to the mailto link
  window.location.href = mailtoLink;
}

  

/*  
function orderNow() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const userName = prompt("Enter your name:");
  const userAddress = prompt("Enter your address:");
  const userPhone = prompt("Enter your phone number (optional):");

  const orderDetails = cart.map(item => `${item.name}: ₹${item.price}`).join('\n');

  const mailBody = `Name: ${userName}\nAddress: ${userAddress}\nPhone: ${userPhone}\n\nOrder Details:\n${orderDetails}\nTime: ${new Date().toLocaleString()}`;

  const mailtoLink = `mailto:govendhan4196@gmail.com?subject=New Order&body=${encodeURIComponent(mailBody)}`;

  window.location.href = mailtoLink;
}*/

function clearCart() {
    cart = [];
    displayCart();
  }


  
