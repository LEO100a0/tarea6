function Header({ favoritesCount, cartCount, onOpenFavorites, onOpenCart }) {
    return (
      <header className="header">
        <h1>Tienda de Celulares Premium</h1>
        <div className="header-actions">
          <button 
            className="favorites-button"
            onClick={onOpenFavorites}
          >
            ❤️ Favoritos ({favoritesCount})
          </button>
          <button 
            className="cart-button"
            onClick={onOpenCart}
          >
            🛒 Carrito ({cartCount})
          </button>
        </div>
      </header>
    );
  }
  
  window.Header = Header;