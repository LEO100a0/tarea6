function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
    return (
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
  
  window.CategoryFilter = CategoryFilter;