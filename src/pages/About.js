import React from 'react';
import Navigation from '../Components/Navigation/Navigation';

const About = () => {
  return (
    <div className="About">
      <Navigation/> <div className='main'></div>
      <div className='footer'>
        <div className='leftfloat'>
<p>Explore more|contact us | purchase| connections| best Sales|Offers zone</p>
<p>Visit the store | available brands | Gifts </p>
        </div>
        <div className='rightfloat'>
          <h3>Metro shoes</h3>
          <p>Aggarwal City Square,</p>
          <p>Plot No. 10, Manglam Place,</p>
          <p>District Center, Rohini Sector-3,</p>
          <p>Delhi - 110085</p>
          <h5>1800-108-6001</h5>
        </div>
      </div>
    </div>
  );
};

export default About;
