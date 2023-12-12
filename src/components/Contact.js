import React from "react";
import './Styles/Contact.css';

export default function Contact() {
  return(
  <div className="contact-container">
      <h3>Contact Us</h3>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
);
}
