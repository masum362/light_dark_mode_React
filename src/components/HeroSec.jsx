import React from 'react';
import img from '../assets/passport size photo.jpg'

const HeroSec = () => {
  return (
    <>
          <section>
        <div>
            <h1>Md. Masum Ahmed</h1>
            <p>Full Stack Web Developer</p>
            <p>Graphic Designer</p>
            <p>digital marketer</p>
            <p>youtuber</p>
            <p>content creator</p>
        </div>
        <div>
            <img src={img} alt="masum ahmed lotib" />
        </div>
    </section>

    </>
  )
}

export default HeroSec