import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Get in touch for opportunities or collaborations:</p>
        <div className="contact-info">
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-details">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <strong>Email:</strong> your.email@example.com
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
            <div className="contact-item">
              <strong>Location:</strong> Your City, Country
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;