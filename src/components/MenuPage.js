import React, { useState } from 'react';
import './MenuPage.css'; // Import CSS for specific styling

// Import images
import doughnutsImage from '../images/Dough1.jpg';
import macaroonsImage from '../images/Macaroons.jpg';
import cakesImage from '../images/Cakes.jpg';
import breadImage from '../images/Bread.jpg';
import biscuitsImage from '../images/Biscuits.jpg';

const menuItems = [
  { name: 'Doughnuts', image: doughnutsImage, price: 45 },
  { name: 'Macaroons', image: macaroonsImage, price: 60 },
  { name: 'Cakes', image: cakesImage, price: 150 },
  { name: 'Bread', image: breadImage, price: 30 },
  { name: 'Biscuits', image: biscuitsImage, price: 25 },
];

const MenuPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} className="menu-image" />
            <p className="price">R {item.price}</p>
            <button onClick={() => addToCart(item)} className="add-to-cart-button">
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;

