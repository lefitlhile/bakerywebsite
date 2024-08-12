// src/HomePage.js
import React from 'react';
import './HomePage.css'; 

// Import all our images
import Cake1 from '../images/Cake1.jpg'; 
import Cake2 from '../images/Cake4.jpg'; 
import Cakes3 from '../images/Cake7.jpg'; 
import Cake4 from '../images/Cake6.jpg';
import Dough2 from '../images/Dough1.jpg';
import Dough3 from '../images/Dough3.jpg';
import Dough4 from '../images/Dough4.jpg';
import Dough5 from '../images/Dough5.jpg';
import Mac1 from '../images/Mac1.jpg';
import Mac2 from '../images/Mac2.jpg';
import Mac3 from '../images/Mac3.jpg';
import Mac4 from '../images/Mac4.jpg';
import Mac5 from '../images/Mac5.jpg';
import bisc1 from '../images/biscu1.jpg';
import bisc2 from '../images/biscu2.jpg';
import bisc3 from '../images/biscu3.jpg';
import bisc4 from '../images/biscu4.jpg';
import brd1 from '../images/brd1.jpg';
import brd2 from '../images/brd2.jpg';
import brd3 from '../images/brd3.jpg';
import brd4 from '../images/brd4.jpg';


const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Khumza's Bakery</h1>
      <h2>Cakes</h2>
      <div className="image-gallery">
        <div className="image-item">
          <img src={Cake1} alt="Cake1" className="home-image" />
          <p>Homemade Cake</p>
        </div>
        <div className="image-item">
          <img src={Cake2} alt="Cake2" className="home-image" />
          <p>Wedding Cake</p>
        </div>
        <div className="image-item">
          <img src={Cake4} alt="Cake4" className="home-image" />
          <p>Wedding Cake</p>
        </div>
        <div className="image-item">
          <img src={Cakes3} alt="Cake3" className="home-image" />
          <p>Birthday Cake</p>
        </div>
        <div className="image-item">
          <img src={Dough2} alt="Dough2" className="home-image" />
          <p>Doughnuts</p>
        </div>
        <div className="image-item">
          <img src={Dough3} alt="Dough3" className="home-image" />
          <p>Doughnut</p>
        </div>
        <div className="image-item">
          <img src={Dough4} alt="Dough4" className="home-image" />
          <p>Doughnut</p>
        </div>
        <div className="image-item">
          <img src={Dough5} alt="Dough5" className="home-image" />
          <p>Doughnut</p>
        </div>
        <div className="image-item">
          <img src={Mac5} alt="Mac5" className="home-image" />
          <p>Doughnut</p>
        </div>
        <div className="image-item">
          <img src={Mac1} alt="Mac1" className="home-image" />
          <p>Macaroons</p>
        </div>
        <div className="image-item">
          <img src={Mac2} alt="Mac2" className="home-image" />
          <p>Macaroons</p>
        </div>
        <div className="image-item">
          <img src={Mac3} alt="Mac3" className="home-image" />
          <p>Macaroons</p>
        </div>
        <div className="image-item">
          <img src={Mac4} alt="Mac4" className="home-image" />
          <p>Macaroons</p>
        </div>
        <div className="image-item">
          <img src={bisc1} alt="bisc1" className="home-image" />
          <p>Biscuits</p>
        </div>
        <div className="image-item">
          <img src={bisc2} alt="bisc2" className="home-image" />
          <p>Biscuits</p>
        </div>
        <div className="image-item">
          <img src={bisc3} alt="bisc3" className="home-image" />
          <p>Biscuits</p>
        </div>
        <div className="image-item">
          <img src={bisc4} alt="bisc4" className="home-image" />
          <p>Biscuits</p>
        </div>
        <div className="image-item">
          <img src={brd1} alt="brd1" className="home-image" />
          <p>Homemade Bread</p>
        </div>
        <div className="image-item">
          <img src={brd2} alt="brd2" className="home-image" />
          <p>Fresh Bread</p>
        </div>
        <div className="image-item">
          <img src={brd3} alt="brd3" className="home-image" />
          <p></p>
        </div>
        <div className="image-item">
          <img src={brd4} alt="brd4" className="home-image" />
          <p>Garlic Roll</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
