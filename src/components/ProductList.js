function ProductList({ products, favorites, onToggleFavorite, onAddToCart }) {
    return (
      <div className="product-list">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={{
              ...product,
              isFavorite: favorites.includes(product.id)
            }}
            onToggleFavorite={onToggleFavorite}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    );
  }
  
  window.ProductList = ProductList;