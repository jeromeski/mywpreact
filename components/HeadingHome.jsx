/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { TimelineMax, Back } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;

const HeadingHome = () => {

  const [masterTL2] = useState(new TimelineMax());
  const [showTL1] = useState(new TimelineMax())
  const [showTL2] = useState(new TimelineMax())
  let $main = useRef(null)
  let $sub = useRef(null)

  const showStage1 = () => {
    showTL1
      .fromTo($main, 1, {autoAlpha: 0, x: -100}, {autoAlpha: 1, x: 0, delay: 3, ease: Back.easeInOut} )
  }

  const showStage2 = () => {
    showTL2
    .fromTo($sub, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 3, ease: Back.easeInOut} )
  }

  const go = () => {
    masterTL2
      .add(showStage1())
      .add(showStage2())
      
  }

  useEffect(() => {
    go()
  }, [])

  return (
    <div className='heading'>
      <h1 ref={el1 => {$main = el1}} className='heading__main'>Jerome&#8239;G</h1>
      <h3 ref={el2 => {$sub = el2}} className='heading__sub'>
        &#8239;FRONT END WEB DEVELOPER&#8239;-&#8239;REACT
      </h3>
    </div>
  );
};

export default HeadingHome;
