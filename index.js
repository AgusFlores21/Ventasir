window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentPosition > 0) {
    window.requestAnimationFrame(topFunction);
    window.scrollTo(0, currentPosition - currentPosition / 8);
  }
}

const images = document.querySelectorAll('.gallery-img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');

images.forEach(image => {
  image.addEventListener('click', () => {
    modalImg.src = image.src;
    modal.style.display = 'block';
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});


// cart.js

document.addEventListener("DOMContentLoaded", function() {
  var cartItemsElement = document.getElementById("cart-items");
  var cartTotalElement = document.getElementById("cart-total");

  // Obtener los productos del almacenamiento local
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Mostrar los productos en el carrito
  cartItems.forEach(function(productId) {
    // Aquí puedes agregar la lógica para obtener la información del producto basado en su ID y mostrarlo en el carrito

    // Ejemplo: Mostrar solo el ID del producto
    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.textContent = "Product ID: " + productId;
    cartItemsElement.appendChild(cartItem);
  });

  // Calcular y mostrar el total de la compra
  var total = cartItems.length; // Aquí puedes calcular el total real en base a los precios de los productos
  cartTotalElement.textContent = total;
});



// productos.js

document.addEventListener("DOMContentLoaded", function() {
  var addToCartButtons = document.querySelectorAll(".add-to-cart");

  // Manejar el evento click del botón "Agregar al carrito"
  addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();

      // Obtener el ID del producto
      var productId = button.dataset.productId;

      // Obtener los productos existentes en el carrito del almacenamiento local
      var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      // Agregar el nuevo producto al carrito
      cartItems.push(productId);

      // Guardar los productos actualizados en el almacenamiento local
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Redirigir a la página del carrito
      window.location.href = "../page/carrito.html";
    });
  });
});
