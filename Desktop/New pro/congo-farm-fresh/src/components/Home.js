import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Shield, Clock, Award } from 'lucide-react';
import Products from './Products';
import Contact from './Contact';
import About from './About';
import mouton from '../assets/mouton.jpg';
import screen from '../assets/screen.png';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Local Chicken",
      price: "12,000 CFA",
      image: mouton,
      description: "Free-range local chickens, naturally raised"
    },
    {
      id: 2,
      name: "Fresh Vegetables",
      price: "From 500 CFA",
      image: mouton,
      description: "Farm-fresh organic vegetables daily"
    },
    {
      id: 3,
      name: "Premium Goat Meat",
      price: "15,000 CFA/kg",
      image: mouton,
      description: "Tender, high-quality goat meat"
    },
    {
      id: 4,
      name: "Pork Cuts",
      price: "14,000 CFA/kg",
      image: mouton,
      description: "Fresh pork from locally raised pigs"
    }
  ];

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${screen})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to E.T.M.S</h1>
            <h1>Entreprise Thales Multi-Service.</h1>
            <p>Votre source de confiance pour des porcs de qualité, des chèvres, des poules locales et des légumes frais à Brazzaville. 🐖🐐🐓🥬</p>
            <Link to="/products" className="btn">Shop Now</Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <About />
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <h2>Our Products</h2>
          <Products products={featuredProducts} />
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <Contact />
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <Truck className="feature-icon" />
              <h3>Free Delivery</h3>
              <p>Free delivery within Brazzaville for orders above 50,000 CFA</p>
            </div>
            <div className="feature">
              <Shield className="feature-icon" />
              <h3>Quality Guarantee</h3>
              <p>100% fresh products directly from our farms</p>
            </div>
            <div className="feature">
              <Clock className="feature-icon" />
              <h3>24/7 Service</h3>
              <p>Order anytime, we deliver at your convenience</p>
            </div>
            <div className="feature">
              <Award className="feature-icon" />
              <h3>Certified Products</h3>
              <p>All products meet health and safety standards</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;