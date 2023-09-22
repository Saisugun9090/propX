import React from 'react';

const ContactUs = () => {
  // Define the URL you want to redirect to
  const contactUrl = 'https://example.com/contact';

  // Handle the click event to redirect to the contact page
  const handleContactClick = () => {
    window.location.href = contactUrl;
  };

  return (
    <div className="contact-us">
      <button onClick={handleContactClick}>Contact Us</button>
    </div>
  );
};

export default ContactUs;