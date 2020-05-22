import React from 'react';
import GoogleMapComponent from '../components/GoogleMap';

function Contact() {
  return (
    <div className='contact'>
      <div className='contact__headline-group'>
        <h1 className='contact__headline--main'>Get In Touch</h1>
        <h3 className='contact__headline--sub'>Send me a message now.</h3>
        <div className='contact__form'>
          <form className='form'>
            <input
              className='form__input isFull'
              type='text'
              placeholder='Name'
            />
            <input
              className='form__input isFull'
              type='text'
              placeholder='Email'
            />
            <input
              className='form__input full'
              type='text'
              placeholder='Subject'
            />
            <textarea
              className='form__text-area full'
              type='text-area'
              placeholder='Message'
              rows='3'></textarea>
            <button className='full form__button'>Send</button>
          </form>
        </div>
      </div>
      <GoogleMapComponent />
    </div>
  );
}

export default Contact;
