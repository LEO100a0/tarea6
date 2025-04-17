function ShoppingCart({ isOpen, items, onClose, onRemoveItem }) {
    const total = items.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <>
        <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
        <div className={`shopping-cart ${isOpen ? 'open' : ''}`}>
          <button className="close-cart" onClick={onClose}>×</button>
          <h2>Tu Carrito ({items.length})</h2>
          
          {items.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <>
              <div>
                {items.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                    <button 
                      className="cart-item-remove"
                      onClick={() => onRemoveItem(index)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                Total: ${total.toFixed(2)}
              </div>
            </>
          )}
        </div>
      </>
    );
  }
  
  window.ShoppingCart = ShoppingCart;