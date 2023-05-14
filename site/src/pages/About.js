import './About.css';
import {Route, Routes} from "react-router-dom"
import { Link } from 'react-router-dom';
import GitHubLogo from './img/GitHubLogo.png';
import LinkInLogo from './img/LinkInLogo.png';

export default function About (){
    return(
        <section class="haze">
            <div class="grid">
                <div class="col-1 hide-m"></div>
                <div class="col-4 col-5-m col-3-s" >
                    <h1>Cameron Haynes -<span class="light">Dedicated Coder and Tech Nerd</span></h1> 
                    <ul class="contact">
                    <li><Link to="/contact" class="button">Get in touch</Link></li>
                    <li><a href="https://github.com/CamH04" target="_blank" class="social"><img src={GitHubLogo}alt="GitHub" width="30px" height="30px"></img></a></li>
                    <li><a href="https://www.linkedin.com/in/cameron-haynes-778056233/" target="_blank" class="social"><img src={LinkInLogo} alt="LinkedIn" width="30px" height="30px"></img></a></li>
                    </ul>
                </div>
                <div class="col-6 col-4-m col-3-s">
                    <p class="big">
                    I am the father of the most beautiful twin daughters in the world. I live in the Netherlands and I love to ride my motorcyle to unwind.
                    </p>
                    <p class="big">
                    A long time ago I started my career as a psychologist, but quickly realized that designing digital products is my true passion. My master's in psychology turned out to be a tremendous help with understanding human behavior and how to best design for it; <i>simplicity is the key to great user experiences.</i>
                    </p>
                    <p class="big">
                    I have around 16 years experience designing digital products. I co-founded two companies called Bread&amp;Pepper and Gibbon. The last one got acquired by Degreed, and for several years I have enjoyed leading and growing the product design team of this edtech unicorn.
                    </p>
                    <p class="big">
                    I love simplicity, have an allergy for bullsh*t and always strive to be a good human. If you think I can help you with any project or coaching, don't hesitate to get in touch.
                    </p>
                </div>
            </div>
        </section>
    );
}