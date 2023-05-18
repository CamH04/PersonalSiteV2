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
                    <h1>Cameron Haynes -<span class="light">Dedicated Coder and Music Lover</span></h1> 
                    <ul class="contact">
                    <li><Link to="/contact" class="button">Get in touch</Link></li>
                    <li><a href="https://github.com/CamH04" target="_blank" class="social"><img src={GitHubLogo}alt="GitHub" width="30px" height="30px"></img></a></li>
                    <li><a href="https://www.linkedin.com/in/cameron-haynes-778056233/" target="_blank" class="social"><img src={LinkInLogo} alt="LinkedIn" width="30px" height="30px"></img></a></li>
                    </ul>
                </div>
                <div class="col-6 col-4-m col-3-s">
                    <p class="big">
                    I'm a programmer from Hampshire who is currently based in Sunderland. I love to listen and create music to unwind.
                    </p>
                    <p class="big">
                    I started programming in senior school and even back then i was programming heavily in my spare time. I learnt more and more, leading to where i am now. I love to experment with code and build a large varity of projects using any tech i can get my hands on.
                    </p>
                    <p class="big">
                    I love creating website which are intuitve to the user, creating an efficent environment for those to utilise 
                    </p>
                    <p class="big">
                    I love creating website which are intuitve to the user, creating an efficent environment for those to utilise 
                    </p>
                    <p class="big">
                    Im experianced in C# and the 3 expected languages (HTML/CSS/JavaScript) with React and Blazor being my Web Frameworks of choice
                    </p>
                </div>
            </div>
        </section>
    );
}