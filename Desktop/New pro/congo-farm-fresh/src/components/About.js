import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/mouton.jpg"
              
              alt="Our Farm"
            />
          </div>
          <div className="about-text">
            <h1 className="section-title" style={{ textAlign: 'center' }}>About Congo Farm Fresh</h1>
            <p>
              Fondée en 2026, E.T.M.S est devenue l’une des principales sources à Brazzaville pour des porcs, chèvres, poulets locaux et légumes frais de haute qualité, élevés localement. Nous travaillons directement avec les agriculteurs locaux afin de vous offrir les produits les plus frais tout en soutenant notre communauté. 🐖🐐🐓🥬
            </p>
            <p>
              Notre engagement envers la qualité signifie que chaque produit que vous recevez est soigneusement sélectionné, manipulé avec soin et livré frais jusqu’à votre porte. Nous croyons aux pratiques agricoles durables ainsi qu’à des prix justes pour nos agriculteurs et nos clients.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Local Farmers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Delivery Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;