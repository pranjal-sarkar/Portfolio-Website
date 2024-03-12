import React, {useState} from 'react';

// importing components
import EmailField from '../../Components/EmailField.tsx';
import EmailMessage from '../../Components/EmailMessage.tsx';
import EmailButton from '../../Components/EmailButton.tsx';

const Contact = () => {

  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <>
      <div className="contact-me-container">
        <div className="contact-me-heading">
          <p>Contact Me</p>
        </div>

        <div className="contact-me-details">
          <div className="contact-me-writing">
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
          </div>

          <div className="contact-social-media-handles">
            <EmailField setEmail />
            <EmailMessage setMessage />
            <EmailButton email message />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact