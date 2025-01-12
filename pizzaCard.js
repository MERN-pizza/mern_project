import React, { useState } from 'react';

const PizzaCard = ({ pizza, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(pizza.item.sizes[0]);
  const [selectedCategory, setSelectedCategory] = useState(pizza.item.category);

  const handleAddToCart = () => {
    const pizzaToAdd = {
      name: pizza.name,
      size: selectedSize,
      category: selectedCategory,
      price: pizza.item.prices[selectedSize],
      image: pizza.item.images[0]
    };
    addToCart(pizzaToAdd);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={pizza.item.images[0]} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.item.description}</p>

        <div className="form-group">
          <label htmlFor={`categorySelect-${pizza.name}`}>Category:</label>
          <select
            id={`categorySelect-${pizza.name}`}
            className="form-control"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
          </select>
        </div>

        <div className="form-group mt-3">
          <label htmlFor={`sizeSelect-${pizza.name}`}>Size:</label>
          <select
            id={`sizeSelect-${pizza.name}`}
            className="form-control"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {pizza.item.sizes.map(size => (
              <option key={size} value={size}>
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <p className="card-text mt-3"><strong>Price:</strong> ₹{pizza.item.prices[selectedSize]}</p>
        <button className="btn btn-primary mt-3" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default PizzaCard;
