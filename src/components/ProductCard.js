const { useState } = React;

function ProductCard({ product, onToggleFavorite, onAddToCart }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image-container">
        {!imageLoaded && <div className="loading-spinner"></div>}
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          style={{ display: imageLoaded ? 'block' : 'none' }}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x300?text=Imagen+no+disponible';
            setImageLoaded(true);
          }}
        />
      </div>
      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-actions">
          <button 
            className="add-to-cart"
            onClick={() => onAddToCart(product)}
          >
            Agregar al carrito
          </button>
          <FavoriteButton 
            isFavorite={product.isFavorite}
            onClick={() => onToggleFavorite(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

window.ProductCard = ProductCard;