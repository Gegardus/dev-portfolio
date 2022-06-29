import React, { useRef } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Vahan Khachvankian</h5>
            <a href="mailto:stgegard@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
        </form>
      </div>
    </section>
  );
};

export default Contact;
