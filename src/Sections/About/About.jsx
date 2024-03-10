import React from 'react';

// importing components
import MyDp from '../../Components/MyDp.tsx';

const About = () => {
  return (
    <>
        <div className="about-container">
            <MyDp />

            <div className="about-writing">
                <p>Hello! I am Pranjal Sarkar. I'm passionate about technology, web development, and photography. I blend creativity with technical expertise to craft captivating digital experiences. From coding to capturing moments, I thrive on pushing boundaries and telling stories. Join me on this journey where art meets innovation, one line of code and one click of the shutter at a time.
                </p>
            </div>
        </div>
    </>
  )
}

export default About