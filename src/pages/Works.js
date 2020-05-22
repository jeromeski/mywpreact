import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../scripts/magicwall';
import img1 from '../assets/portfolio/1.png';
import img2 from '../assets/portfolio/2.png';
import img3 from '../assets/portfolio/3.png';
import img4 from '../assets/portfolio/4.png';
import img5 from '../assets/portfolio/5.png';
import img6 from '../assets/portfolio/6.png';
import img7 from '../assets/portfolio/7.png';
import img8 from '../assets/portfolio/8.png';
// import Preloader from '../components/Preloader';

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          id: 1,
          imgUrl: img1
        },
        {
          id: 2,
          imgUrl: img2
        },
        {
          id: 3,
          imgUrl: img3
        },
        {
          id: 4,
          imgUrl: img4
        },
        {
          id: 5,
          imgUrl: img5
        },
        {
          id: 6,
          imgUrl: img6
        },
        {
          id: 7,
          imgUrl: img7
        },
        {
          id: 8,
          imgUrl: img8
        },
        {
          id: 9,
          imgUrl: img1
        },
        {
          id: 10,
          imgUrl: img2
        },
        {
          id: 11,
          imgUrl: img3
        },
        {
          id: 12,
          imgUrl: img4
        },
        {
          id: 13,
          imgUrl: img5
        },
        {
          id: 14,
          imgUrl: img6
        },
        {
          id: 15,
          imgUrl: img7
        },
        {
          id: 16,
          imgUrl: img8
        },
        {
          id: 17,
          imgUrl: img1
        },
        {
          id: 18,
          imgUrl: img2
        }
      ], isPreloading : false
    };
  }

  componentDidMount() {
    this.showMagicWall();
  }

  componentWillUnmount() {
    
    this.stopMagicWall();
  }

  showMagicWall = () => {
    $('.magicwall').magicWall({
      maxItemHeight: 375,
      maxItemWidth: 375,
      delay: 400,
      preloadBeforeSwitch: true,
      loadingMode: 'chain',
      pauseOnHover: 'item',
      animations:
        'flipY,rollOutX,-rollOutX,rollOutY,-rollOutY,slideColumn,-slideColumn,slideRow,-slideRow,fade',
      duration: 800
    });
    console.log('started');
  };

  stopMagicWall = () => {
    $('.magicwall').magicWall('stop');
    console.log('stopped');
  };

  render() {
    const { images, isPreloading } = this.state;
    return (
      <>
        <div
          id='demo'
          className='magicwall'
          style={{ width: '100vw', height: '100vh' }}>
          <ul className='magicwall-grid'>
            {images.map(({ id, imgUrl }) => (
              <li key={id} data-thumb={imgUrl}>
                <div className='hover-content vcenter'></div>
                <Link to={imgUrl} className='colorbox' title='colorbox image' />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Works;
