import React, { useState } from 'react';
import preloaderLogo from '../assets/preloader-logo.svg';
import { randomQuote } from '../scripts/quote';
import { Transition } from 'react-transition-group';

const duration = 2000

const Preloader = props => {
  const [quote] = useState(randomQuote());

  return (
    <Transition
      in={props.in}
      timeout={duration}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <div className='preloader'>
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
    </Transition>
  );
};

export default Preloader;
