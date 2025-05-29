document.getElementById('addToCartBtn').addEventListener('click', function () {
  const cartMessage = document.getElementById('cartMessage');
  cartMessage.textContent = "Added to cart!";
  setTimeout(() => {
    cartMessage.textContent = "";
  }, 3000);
});
