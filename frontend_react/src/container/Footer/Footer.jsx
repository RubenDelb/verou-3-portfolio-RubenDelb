import { useState } from 'react';

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client'
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // To be used to change the value of the 'send'-button

  const { name, email, message } = formData; // This is to destructure the formData for later use.

  const handleChangeInput = (e) => {
    const { name, value  } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  // All messages sent through the form will be arriving as a new entry in sanity in the 'contact'-schema.
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact) // Create new entry in sanity
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true); // Show success-message
    })
  }

  return (
    <>
      <h2 className="head-text">Let's chat & grab a coffee</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a className="p-text" href="mailto:ruben.delbrassine@gmail.com" >ruben.delbrassine@gmail.com</a>
        </div>
      </div>

      {/* Check if form is submitted, if not, show form, if it's submitted, then show a success-message */}
      { !isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea className="p-text" value={message} name="message" onChange={handleChangeInput} />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{ loading ? 'Sending' : 'Send Message' }</button>
      </div>
      : <div>
          <h3 className="app__footer-success-message">Thank you for getting in touch.</h3>
      </div>}
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'),
'contact',
'app__designBg'
)