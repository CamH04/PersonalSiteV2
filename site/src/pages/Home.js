import './Home.css';
import Gif1 from './img/DeGif.gif';
import Gif2 from './img/FiddlesticksGif.gif';
import CV from './img/CV.docx'

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Home(){
    useEffect(() => {
        Aos.init();
      });

    return(
        <section>
        <div class="grid intro">
            <div class="col-1 hide-m"></div>
            <div class="col-11 col-6-m col-3-s center">
            <div class="text-to-center" data-aos="fade-up" data-aos-duration="1500">
                <p class="name-text">Cameron Haynes - Programmer</p>
                <h1 class="name-text2">I like to code things </h1>
            </div>
            </div>
        </div>
        <section class="lower">
            <div class="Buttons" data-aos="zoom-in-up" data-aos-duration="1000">
                <a href="https://www.linkedin.com/in/cameron-haynes-778056233/">
                <button type="button" class="LinkedIn"> <span class="Button-Text LinkedIn"> LinkedIn </span></button>
                </a>
                <a href={CV}>
                <button type="button" class="Cv">  <span class="Button-Text Cv"> Cv </span></button>
                </a>
                <a href="https://github.com/CamH04">
                <button type="button" class="Github" >  <span class="Button-Text Github"> Github </span></button>
                </a>
            </div>
        </section>


        <section class="projects">
        <h1 class="name-text2 title-text" data-aos="fade-up" data-aos-duration="1500"> Projects</h1>
        <div data-aos="fade-up" data-aos-duration="2000">
        <div class="project grid center gap">  
                <a href="https://github.com/CamH04/Decrypt-Website" class="col-8 col-6-m col-3-s project-image">
                    <img id="ui" src={Gif1} width="480" height="270"  alt="help" data-aos="zoom-in-right" data-aos-duration="1000"></img>
                </a>
                <div class="col-3 col-6-m col-3-s center ">
                <h2 data-aos="zoom-in-left" data-aos-duration="1000">
                    <a href="https://github.com/CamH04/Decrypt-Website">Base64, Hex or Binary translation with a Ceaser Cipher</a>
                </h2>
                </div>
            </div>


            <div class="project grid center gap">  
                <div class="col-3 col-6-m col-3-s center">
                <h2 data-aos="zoom-in-right" data-aos-duration="1000" >
                    <a href="https://cool-seahorse-c97407.netlify.app">A Website for an artist called "Fiddlesticks_" for his music project</a>
                </h2>
                </div>
                <a href="https://cool-seahorse-c97407.netlify.app" class="col-8 col-6-m col-3-s project-image GOTOTHERIGHTIBEG" data-aos="zoom-in-left" data-aos-duration="1000">
                    <img id="ui" src={Gif2} width="480" height="270" alt="help"></img>
                </a>
            </div>
        </div>
        </section>
    </section>
    );
}