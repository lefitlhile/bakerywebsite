// src/AboutPage.js
import React from 'react';
import './AboutPage.css'; // Optional: if you want to add specific styling
import  '../images/backgro.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <section>
        <h2>The History Khumza Bakery</h2>
        <p>Our bakery was founded in December 2020 by Lindiwe Khumalo, driven by a deep passion for baking and a heartfelt commitment to serving our community. From the very beginning, our mission has been to provide the highest quality bread, cakes, muffins, doughnuts, and biscuits, all crafted with care and dedication.

Lindiwe Khumalo’s vision was not only to create a place where people could enjoy delicious baked goods but also to contribute positively to the community. Her dedication to excellence and her love for baking have guided every aspect of our bakery, ensuring that each product is made with the finest ingredients and the utmost attention to detail.
As we continue to grow, our commitment to quality and community remains at the heart of everything we do. Our journey from a small bakery to a beloved local establishment is a testament to Lindiwe Khumalo’s vision and the ongoing support of our cherished community.

</p>
      </section>
      <section>
        <h2>Our Mission</h2>
        <p>Our mission is to provide the freshest, most delicious baked goods made with love and care.</p>
      </section>
      <section>
        <h2>Our Values</h2>
        
          <h3>Quality:</h3> <p>Our commitment to quality means that every loaf of bread, cake, or pastry is made from premium, carefully sourced ingredients, guaranteeing a delightful experience in every bite.</p>
          <h3>Tradition:</h3><p> Our traditional baking techniques are combined with modern practices to create a unique and authentic taste. </p>
          <h3>Local Service:</h3><p> We take pride in being an integral part of our village, offering convenient bakery services through our shop and tuckshops. By providing a variety of fresh, homemade baked goods in local stores, we ensure that everyone in our community can enjoy the warmth and flavor of our baked treats</p>
        
      </section>
    </div>
  );
};

export default AboutPage;
