import React, { useState } from 'react';


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = {
    pigs: [
      {
        id: 'p1',
        name: "Whole Pig",
        price: "250,000 CFA",
        image: "/mouton.jpg",
        description: "Whole pig, perfect for celebrations"
      },
      {
        id: 'p2',
        name: "Pork Chops",
        price: "14,000 CFA/kg",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Premium pork chops, cut to order"
      },
      {
        id: 'p3',
        name: "Pork Shoulder",
        price: "13,000 CFA/kg",
        image: "https://images.unsplash.com/photo-1602470520407-b6b1ad4d9067?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Perfect for roasting or slow cooking"
      }
    ],
    goats: [
      {
        id: 'g1',
        name: "Whole Goat",
        price: "200,000 CFA",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Fresh whole goat, cleaned and prepared"
      },
      {
        id: 'g2',
        name: "Goat Leg",
        price: "15,000 CFA/kg",
        image: "https://images.unsplash.com/photo-1602470520407-b6b1ad4d9067?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Tender goat leg, perfect for grilling"
      },
      {
        id: 'g3',
        name: "Goat Ribs",
        price: "16,000 CFA/kg",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Flavorful goat ribs, great for barbecue"
      }
    ],
    chickens: [
      {
        id: 'c1',
        name: "Local Chicken",
        price: "12,000 CFA",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Free-range local chicken, 2-3 kg"
      },
      {
        id: 'c2',
        name: "Chicken Pieces",
        price: "13,000 CFA/kg",
        image: "https://images.unsplash.com/photo-1600891965053-0be7a1c2f4b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Mixed chicken pieces, skin-on"
      },
      {
        id: 'c3',
        name: "Whole Chicken",
        price: "11,000 CFA",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Farm-fresh whole chicken"
      }
    ],
    vegetables: [
      {
        id: 'v1',
        name: "Mixed Vegetables",
        price: "3,500 CFA/bundle",
        image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Seasonal mixed vegetables bundle"
      },
      {
        id: 'v2',
        name: "Cassava Leaves",
        price: "1,500 CFA/bundle",
        image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Fresh cassava leaves for saka saka"
      },
      {
        id: 'v3',
        name: "Amaranth",
        price: "1,000 CFA/bundle",
        image: "https://images.unsplash.com/photo-1576045059431-7d7ab5e1c8a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Fresh local amaranth greens"
      },
      {
        id: 'v4',
        name: "Eggplant",
        price: "2,000 CFA/kg",
        image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Fresh local eggplants"
      }
    ]
  };

  const categories = ['all', 'pigs', 'goats', 'chickens', 'vegetables'];

  const getFilteredProducts = () => {
    if (selectedCategory === 'all') {
      return Object.values(products).flat();
    }
    return products[selectedCategory] || [];
  };

  return (
    <section className="products-section">
      <div className="container">
        <h1 className="section-title">Our Products</h1>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn btn-small ${selectedCategory === category ? 'active' : ''}`}
              style={{
                margin: '0 0.5rem 1rem',
                background: selectedCategory === category ? 'var(--primary-brown)' : 'var(--primary-green)'
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {getFilteredProducts().map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <p className="description">{product.description}</p>
                <button className="btn btn-small">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;