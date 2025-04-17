const { useState } = React;

const phoneProducts = [
  { 
    id: 1, 
    name: 'iPhone 15 Pro', 
    brand: 'iPhone', 
    price: 1099.99, 
    description: '256GB, Titanio negro', 
    image: '../images/iphone-15pro.png',
    isFavorite: false 
  },
  // ... (otros productos)
];

function App() {
  const [products] = useState(phoneProducts);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [favorites, setFavorites] = useState([]);

  const categories = ['Todos', ...new Set(products.map(p => p.brand))];

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(product => product.brand === activeCategory);

  return (
    <div className="app">
      <Header 
        favoritesCount={favorites.length}
        cartCount={cartItems.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      
      <ProductList
        products={filteredProducts}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onAddToCart={addToCart}
      />
      
      <ShoppingCart 
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={removeFromCart}
      />
      
      <FavoritesModal 
        isOpen={isFavoritesOpen}
        favorites={favorites}
        products={products}
        onClose={() => setIsFavoritesOpen(false)}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}

window.App = App;
