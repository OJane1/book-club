import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {

  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
        <h2 className='about-title fs-26 ls-1'>About The Shelf</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <p className='fs-17'>The Shelf is an online reading club where you can discuss what you're reading with like-minded people. Choose a book among those that are suggested by other members or pick up your own, and maybe next month it will become the subject of a lovely discussion!</p>
            <p className='fs-17'>Search for your favorite book at the Home page and add it to a reading chart. The book that gets the most votes will be rated for the next month!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
