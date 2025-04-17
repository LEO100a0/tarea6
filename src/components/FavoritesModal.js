function FavoritesModal({ isOpen, favorites, products, onClose, onToggleFavorite }) {
    const favoriteProducts = products.filter(p => favorites.includes(p.id));
  
    return (
      <>
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
        <div className={`favorites-modal ${isOpen ? 'open' : ''}`}>
          <button className="close-cart" onClick={onClose}>×</button>
          <h2>Tus Favoritos ({favorites.length})</h2>
          
          {favoriteProducts.length === 0 ? (
            <p>No tienes productos favoritos</p>
          ) : (
            <div className="product-list">
              {favoriteProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={{
                    ...product,
                    isFavorite: true
                  }}
                  onToggleFavorite={onToggleFavorite}
                  onAddToCart={() => {}}
                />
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
  
  window.FavoritesModal = FavoritesModal;