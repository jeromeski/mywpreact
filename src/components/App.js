import React, { useRef, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Works from '../pages/Works';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import { TimelineMax, Power4, TweenMax, Power2 } from 'gsap/all';
import Yoda from '../assets/preloader-logo.svg';
import { randomQuote } from '../scripts/quote';

const App = () => {
  const [quote, setQuote] = useState();
  const [preloaderanim] = useState(new TimelineMax());
  const [preloaderanimHide] = useState(new TimelineMax());

  let container = useRef(null);
  let preloader = useRef(null);

  const app = {};

  app.ui = {
    animations: {
      preloaderanim: null,
      preloaderanimHide: null
    },
    navMenu: function() {
      $(document).on('click', '#nav_bar nav a, .flat-button, a.logo', function(
        e
      ) {
        e.preventDefault();
        $('body').removeClass('no-overflow');
        app.ui.play();
        app.ui.quote = app.ui.generateQuote();
        setQuote(app.ui.quote);
        window.history.pushState('', '', $(this).attr('href'));
      });
    },
    generateQuote: function() {
      return randomQuote();
    },
    play: function() {
      app.ui.animations.preloaderanim.play(0);
      setTimeout(() => {
        app.ui.animations.preloaderanimHide.play(0);
      }, 3000);
    },
    initAnimation: function() {
      app.ui.animations.preloaderanim = preloaderanim
        .to(container, 0.1, {
          immediateRender: false,
          opacity: 0.01,
          scale: 0.85,
          ease: Power4.easeOut
        })
        .fromTo(
          preloader,
          0.3,
          {
            immediateRender: false,
            x: '-100%',
            display: 'none',
            ease: Power4.easeOut
          },
          {
            x: '0%',
            display: 'block'
          },
          0.3
        )
        .pause();

      app.ui.animations.preloaderanimHide = preloaderanimHide
        .fromTo(
          container,
          0.5,
          {
            immediateRender: false,
            opacity: 0,
            scale: 0
          },
          {
            opacity: 1,
            scale: 1
          },
          0.3
        )
        .fromTo(
          preloader,
          0.6,
          { immediateRender: false, x: '0%', ease: Power4.easeIn },
          {
            x: '100%',
            onComplete: function() {
              $('.preloader').hide();
            }
          },
          0
        )
        .pause();
    }
  };


  useEffect(() => {
    app.ui.navMenu();
    app.ui.initAnimation();
    initHomeAnim();
  }, []);

  const initHomeAnim = () => {
    if ($('#svgdraw')) {
      TweenMax.to(container, 0.5, { opacity: 1, scale: 0.85 });
    }
    if ($('.magicwall')) {
      TweenMax.to(container, 0.5, { opacity: 1, scale: 1 });
    }

    if ($('.contact')) {
      TweenMax.to(container, 0.5, { opacity: 1, scale: 1 });
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className='container'
        ref={el1 => {
          container = el1;
        }}>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/about'} component={About}/>
        <Route exact path={'/works'} component={Works} />
        <Route exact path={'/skills'} component={Skills} />
        <Route exact path={'/contact'} component={Contact} />
      </div>
      <div
        ref={el2 => {
          preloader = el2;
        }}
        className='preloader'>
        <div className='inner'>
          <img src={Yoda} alt='Front End Developer Loader' />
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
    </div>
  );
};

export default App;
