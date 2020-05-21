import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax } from 'gsap/all';
import { Transition } from 'react-transition-group';


const duration = 2000

function ButtonHome(props) {
  const [masterTL] = useState(new TimelineMax());
  const [clearTL] = useState(new TimelineMax());
  const [showTL] = useState(new TimelineMax());

  let btn = useRef(null);

  const clearStage = () => {
    clearTL.to(btn, { autoAlpha: 0, scale: 0.1 });

    return clearTL;
  };

  const showStage = () => {
    showTL
      // .to(btn, 2, { onComplete: showButton })
      .to(btn, { autoAlpha: 0.2, scale: 0.1 })
      .to(btn, 1.1, { autoAlpha: 1, scale: 1 });

    return showTL;
  };

  const go = () => {
    masterTL.add(clearStage()).add(showStage());

    return masterTL;
  };

  return (
    <Transition
      in={props.in}
      timeout={duration}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={() =>
        go()
      }
    >
      <Link
        ref={el1 => {
          btn = el1;
        }}
        className='flat-button'
        to='#'>
        Contact Me
      </Link>
    </Transition>
  );
}

export default ButtonHome;
