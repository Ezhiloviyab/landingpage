import React from 'react';

import Navigation from '../Components/Navigation/Navigation';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (<><Navigation/>
  <div className='firstpage'>
<div className='l'>
  <h1>Welcom to <br/> Metro Shoes </h1>
  <p>Here are the best quality shoes to purchase for <br/>
  your family and friends</p>
</div>
<div className='r'>
 <img src="https://dxkvlfvncvqr8.cloudfront.net/media/images/image_mobile/image/shoes-1681133499.jpg" className='img'/> <br/><br/>
 <img src="https://dxkvlfvncvqr8.cloudfront.net/media/images/cmspage/image/slippers-1681133316.jpg" className='img'/>
  {/* <img src="https://dxkvlfvncvqr8.cloudfront.net/media/images/image_mobile/image/sneakers-1681133316.jpg"  className='img1'/> */}
</div>
<Button type="btn" className="b1" id="b">Explore Now</Button>
<Button   type="btn "className="b1" id="b">Contact us</Button>

  </div>
    <div className="home">
    
    </div>
   

    
    </>
  );
};

export default Home;
