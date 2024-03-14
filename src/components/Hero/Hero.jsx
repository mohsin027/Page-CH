import React from 'react'
import './Hero.css'
import budImage from '../../assets/bud.png'
import people from '../../assets/people.png'


export const Hero = () => {
  return (
    <section className='hero-section'>
       <div>
        <h1>Make Someone's life </h1>
          <h1>by giving of Yours</h1>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magnam consequatur.</p>
          <p>ipsum dolor sit amet consectetur,</p>
          <button className='donate'>Donate Now</button>
          <div className='people-div'>
            <img src={people} alt="people" />
            <button className='button1'>2.5K helped</button>
          </div>
       </div>
       <div className='img-div'>
        <div className='bud-circle'>

        <img  src={budImage} alt='image'/>
        </div>
       </div>
    </section>
  )
}
