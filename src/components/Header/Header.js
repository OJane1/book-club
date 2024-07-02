import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

const Header = () => {

  gsap.registerPlugin(useGSAP, TextPlugin);

  useGSAP(() => {
    gsap.to("p", {
      text: "A new book every month",
            duration: 3,
            repeat: -1,
            repeatDelay: 0.7,
            ease: "power1.in",
            yoyo: true
    })
  });
  
  return (
    <div className='holder'>
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>The Shelf</h2><br />
                <div>
                <p className='header-text fs-18 fw-3'>Find your book of choice and discuss it with other people!</p>
                </div>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header;
