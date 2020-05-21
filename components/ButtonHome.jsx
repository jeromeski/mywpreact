import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax } from 'gsap/all';

function ButtonHome() {
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

  // const showButton = () => {
  //   btn.style.display = 'block';
  // };

  useEffect(() => {
    go();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = () => {
    masterTL.add(clearStage()).add(showStage());

    return masterTL;
  };

  return (
    <>
      <Link
        ref={el1 => {
          btn = el1;
        }}
        className='flat-button'
        to='#'>
        Contact Me
      </Link>
    </>
  );
}

export default ButtonHome;
