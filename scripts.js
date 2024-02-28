// Sample product data (you can extend this with real data from an API or database)
const products = [
    { id: 1, name: 'Product 1', price: 20, category: 'electronics' },
    { id: 2, name: 'Product 2', price: 30, category: 'clothing' },
    { id: 3, name: 'Product 3', price: 25, category: 'electronics' },
    // Add more products with different categories
  ];
  
  // Display products on the page
  function displayProducts(productsToShow) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Clear previous content
  
    productsToShow.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(card);
    });
  }
  
  // Add to cart functionality
  let cartItemsCount = 0;
  function addToCart(productId) {
    // Perform addition to cart logic here
    cartItemsCount++;
    document.getElementById('cartItems').innerText = cartItemsCount;
  }
  
  // Search products
  function searchProducts() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    displayProducts(filteredProducts);
  }
  
  // Filter products by category
  function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    if (category === 'all') {
      displayProducts(products);
    } else {
      const filteredProducts = products.filter(product => product.category === category);
      displayProducts(filteredProducts);
    }
  }
  
  // Open login modal
  function openLoginModal() {
    // Logic to open the login modal
  }
  
  // Initial display of all products when the page loads
  window.onload = () => displayProducts(products);
git  