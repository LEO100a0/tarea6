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
  { 
    id: 2, 
    name: 'iPhone 14', 
    brand: 'iPhone', 
    price: 799.99, 
    description: '128GB, Medianoche', 
    image: '../images/iphone-14.png',
    isFavorite: false 
  },
  { 
    id: 3, 
    name: 'Samsung Galaxy S23 Ultra', 
    brand: 'Samsung', 
    price: 1199.99, 
    description: '256GB, Phantom Black', 
    image: '../images/samsung-23.png',
    isFavorite: false 
  },
  { 
    id: 4, 
    name: 'Samsung Galaxy Z Flip5', 
    brand: 'Samsung', 
    price: 999.99, 
    description: '256GB, Grafito', 
    image: '../images/Samsung-GalaxyZFlip5.png',
    isFavorite: false 
  },
  { 
    id: 5, 
    name: 'Huawei P60 Pro', 
    brand: 'Huawei', 
    price: 899.99, 
    description: '256GB, Rocío dorado', 
    image: '../images/Huawei-P60Pro.png',
    isFavorite: false 
  },
  { 
    id: 6, 
    name: 'Huawei Mate 50 Pro', 
    brand: 'Huawei', 
    price: 1099.99, 
    description: '512GB, Cristal negro', 
    image: '../images/Huawei-Mate50Pro.png',
    isFavorite: false 
  },
  { 
    id: 7, 
    name: 'iPhone SE (3ra gen)', 
    brand: 'iPhone', 
    price: 429.99, 
    description: '64GB, Medianoche', 
    image: '../images/iPhone-SE.png',
    isFavorite: false 
  },
  { 
    id: 8, 
    name: 'Samsung Galaxy A54', 
    brand: 'Samsung', 
    price: 449.99, 
    description: '128GB, Awesome Violet', 
    image: '../images/Samsung-GalaxyA54.png',
    isFavorite: false 
  }
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
