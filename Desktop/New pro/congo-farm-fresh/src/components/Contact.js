import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            
            <div className="contact-detail">
              <Phone className="contact-icon" />
              <div>
                <strong>Phone:</strong><br />
                +242 06 872 0583<br />
                +91 901 92 98 711
              </div>
            </div>
            
            <div className="contact-detail">
              <Mail className="contact-icon" />
              <div>
                <strong>Email:</strong><br />
                info@congofarmfresh.cg<br />
                orders@congofarmfresh.cg
              </div>
            </div>
            
            <div className="contact-detail">
              <MapPin className="contact-icon" />
              <div>
                <strong>Address:</strong><br />
                123 Avenue de la Paix<br />
                Brazzaville, Congo
              </div>
            </div>
            
            <div className="contact-detail">
              <Clock className="contact-icon" />
              <div>
                <strong>Business Hours:</strong><br />
                Monday - Saturday: 8am - 8pm<br />
                Sunday: 9am - 2pm
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Envoyez nous un message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn">Envoyez le message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;