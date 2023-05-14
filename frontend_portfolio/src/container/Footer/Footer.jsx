import React, { useRef, useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import emailjs from '@emailjs/browser';


const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const form = useRef();

  // console.log(formData)


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_j1ow04d', 'template_k495l2g', form.current, '_sxf1cwPcj6sQ2YfX')
      .then((result) => {
        // console.log(result.text);
        // console.log("Successfully MSG Send")
      }, (error) => {
        // console.log(error.text);
      });
  };

/*   const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_j1ow04d', 'template_k495l2g', form.current, '_sxf1cwPcj6sQ2YfX')
        .then((result) => {
          console.log(result.text);
          console.log("Successfully MSG Send")
        }, (error) => {
          console.log(error.text);
        });
    };

    return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    )
  } */



  const handleSubmit = (e) => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));

    // emailjs.sendForm('service_j1ow04d', 'template_k495l2g', formData, '_sxf1cwPcj6sQ2YfX')
    //   .then((result) => {
    //     console.log(result.text);
    //     console.log("Successfully MSG Send")
    //   }, (error) => {
    //     console.log(error.text);
    //   });


    /*  */
    emailjs.send('service_j1ow04d', 'template_k495l2g', formData, '_sxf1cwPcj6sQ2YfX')
      .then((response) => {
        console.log('SUCCESS!', response?.status, response?.text);
        console.log("Successfully MSG Send")
      }, (error) => {
        console.log('FAILED...', error);
      }, e.target); // Pass the form element as the third parameter
  };

  return (
    < >
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:jisan.sc@gmail.com" className="p-text">jisan.sc@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+880 1957 281 281" className="p-text">+880 1957 281 281</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          {/* <form ref={form} > */}
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
          {/* <button type="button" className="p-text" onClick={ContactMe}>{!loading ? 'Send Message' : 'Sending...'}</button> */}
          {/* </form> */}
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);