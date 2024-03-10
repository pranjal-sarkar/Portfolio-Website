import React from 'react';

// importing components
import Carousel from '../../Components/Carousel.tsx';

const Projects = () => {
  return (
    <>
        <div className="my-projects-container">
            <div className="my-projects-heading">
                <p>My Coding Projects</p>
            </div>

            <div className="my-projects-carousel">
                <Carousel />
            </div>
        </div>
    </>
  )
}

export default Projects