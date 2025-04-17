function FavoritesModal({ isOpen, favorites, products, onClose, onToggleFavorite }) {
  if (!isOpen) return null;

  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  return (
    <>
      <div className="modal-overlay open" onClick={onClose}></div>
      <div className="favorites-modal open">
        <button className="close-cart" onClick={onClose}>×</button>
        <h2>Tus Favoritos ({favorites.length})</h2>
        
        {favoriteProducts.length === 0 ? (
          <div className="empty-cart">
            <p>No tienes productos favoritos</p>
          </div>
        ) : (
          <div className="product-list" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
            {favoriteProducts.map(product => (
              <div key={product.id} className="product-card" style={{ padding: '10px' }}>
                <span className="brand-tag">{product.brand}</span>
                <div className="product-image-container" style={{ height: '120px' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://via.placeholder.com/200x200?text=Imagen+no+disponible';
                    }}
                  />
                </div>
                <h4 style={{ margin: '5px 0' }}>{product.name}</h4>
                <p style={{ fontSize: '14px', margin: '5px 0' }}>${product.price.toFixed(2)}</p>
                <FavoriteButton 
                  isFavorite={true}
                  onClick={() => onToggleFavorite(product.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

window.FavoritesModal = FavoritesModal;
