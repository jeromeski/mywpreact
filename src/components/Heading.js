
import React from 'react';

const Heading = ({heading, paragraph}) => {
 

  return (
    <div className='text-zone'>
      <h1
        className='heading-main'>
        {heading}
      </h1>
      <p
        className='description'>
        {paragraph}
      </p>
    </div>
  );
};

export default Heading;
