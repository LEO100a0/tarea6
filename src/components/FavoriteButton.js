function FavoriteButton({ isFavorite, onClick }) {
    return (
      <button
        className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
        onClick={onClick}
      >
        {isFavorite ? '❤️ Quitar' : '🤍 Favorito'}
      </button>
    );
  }
  
  window.FavoriteButton = FavoriteButton;