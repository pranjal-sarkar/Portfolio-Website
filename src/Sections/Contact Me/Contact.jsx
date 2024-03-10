import React from 'react';

// importing components
import EmailField from '../../Components/EmailField.tsx';
import EmailMessage from '../../Components/EmailMessage.tsx';
import EmailButton from '../../Components/EmailButton.tsx';

const Contact = () => {
  return (
    <>
      <div className="contact-me-container">
        <div className="contact-me-heading">
          <p>Contact Me</p>
        </div>

        <div className="contact-me-details">
          <div className="contact-me-writing">
            I am always open to work so feel free to contact me. Happy to help!
          </div>

          <div className="contact-input-fields">
            <EmailField />
            <EmailMessage />
            <EmailButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact