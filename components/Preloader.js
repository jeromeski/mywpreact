import React, { useState, useEffect, useRef } from 'react';
import preloaderLogo from '../assets/preloader-logo.svg';
import {randomQuote} from '../scripts/quote';

const Preloader = (props) => {
  const val = useRef();
  const [quote, settQuote] = useState(randomQuote())

  useEffect(() => {
    val.current = props;
    

  },[props])

  useEffect(() => {
    settQuote(randomQuote);
  })

  return (
    <div
      className='preloader'>
      <div className='inner'>
        <img src={preloaderLogo} alt='Front End Developer Loader' />
        <blockquote>{quote}</blockquote>
        <div id='loader'>
          <div className='ls-particles ls-part-1'></div>
          <div className='ls-particles ls-part-2'></div>
          <div className='ls-particles ls-part-3'></div>
          <div className='ls-particles ls-part-4'></div>
          <div className='ls-particles ls-part-5'></div>
          <div className='lightsaber ls-left ls-green'></div>
          <div className='lightsaber ls-right ls-red'></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
