import './Home.css';
export default function Home(){
    return(
    <section>
        <div class="grid intro">
            <div class="col-1 hide-m"></div>
            <div class="col-11 col-6-m col-3-s center">
            <div class="text-to-center">
                <p class="name-text">Cameron Haynes - Programmer</p>
                <h1 class="name-text2">I like to <span> code things</span></h1>
            </div>
            </div>
        </div>
        <section class="lower">
            <div class="Buttons">
                <a href="https://www.linkedin.com/in/cameron-haynes-778056233/">
                <button type="button" class="LinkedIn"> <span class="Button-Text LinkedIn"> LinkedIn </span></button>
                </a>
                <a href=" ">
                <button type="button" class="Cv">  <span class="Button-Text Cv"> Cv </span></button>
                </a>
                <a href="https://github.com/CamH04">
                <button type="button" class="Github" >  <span class="Button-Text Github"> Github </span></button>
                </a>
            </div>
        </section>
    </section>
    );
}