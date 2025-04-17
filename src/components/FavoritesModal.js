function FavoritesModal({ isOpen, favorites, products, onClose, onToggleFavorite }) {
  if (!isOpen) return null;

  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  return (
    <>
      <div className="modal-overlay open" onClick={onClose}></div>
      <div className="favorites-modal open">
        <button 
          className="close-cart" 
          onClick={onClose}
          aria-label="Cerrar modal de favoritos"
        >
          &times;
        </button>
        
        <h2>Tus Favoritos ({favorites.length})</h2>
        
        {favoriteProducts.length === 0 ? (
          <div className="empty-message">
            <p>No tienes productos favoritos aún</p>
            <button 
              className="continue-shopping"
              onClick={onClose}
            >
              Seguir comprando
            </button>
          </div>
        ) : (
          <div className="favorites-grid">
            {favoriteProducts.map(product => (
              <div key={product.id} className="favorite-item">
                <div className="favorite-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/150?text=Imagen+no+disponible';
                    }}
                  />
                </div>
                <div className="favorite-info">
                  <h3>{product.name}</h3>
                  <p className="brand">{product.brand}</p>
                  <p className="price">${product.price.toFixed(2)}</p>
                </div>
                <div className="favorite-actions">
                  <FavoriteButton 
                    isFavorite={true}
                    onClick={() => onToggleFavorite(product.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

window.FavoritesModal = FavoritesModal;
