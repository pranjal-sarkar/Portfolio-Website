import React from 'react';

// importing images
import pic1 from "../../Assets/My Work/Pic 1.jpg";
import pic2 from "../../Assets/My Work/Pic 2.jpg";
import pic3 from "../../Assets/My Work/Pic 3.jpg";
import pic4 from "../../Assets/My Work/Pic 4.jpg";
import pic5 from "../../Assets/My Work/Pic 5.jpg";
import pic6 from "../../Assets/My Work/Pic 6.jpg";
import pic7 from "../../Assets/My Work/Pic 7.jpg";
import pic8 from "../../Assets/My Work/Pic 8.jpg";

const Work = () => {
  return (
    <>
      <div className="my-work-container">
        <div className="my-work-heading">
          <p>My Photography</p>
        </div>

        <div className="my-photographs-row-1">
          <img src={pic1} alt="My Photograph 1" className='pic 1' />
          <img src={pic2} alt="My Photograph 2" className='pic 2' />
          <img src={pic3} alt="My Photograph 3" className='pic 3' />
          <img src={pic4} alt="My Photograph 4" className='pic 4' />
        </div>

        <div className="my-photographs-row-2">
          <img src={pic5} alt="My Photograph 5" className='pic 5' />
          <img src={pic6} alt="My Photograph 6" className='pic 6' />
          <img src={pic7} alt="My Photograph 7" className='pic 7' />
          <img src={pic8} alt="My Photograph 8" className='pic 8' />
        </div>
      </div>
    </>
  )
}

export default Work