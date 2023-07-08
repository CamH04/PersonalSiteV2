import './Contact.css';

export default function Contact (){
    return(
        <section>
            <script src="./sc"></script>
            <div class="grid">
            <div class="col-7 col-6-m col-3-s">
                <h1>Hello!</h1>
                <p class="big">
                I would love to hear from you! If you wish to contact me you can use the options below. I've put a lot of effort into this site and hope you enjoy it as much as i do!
                </p>
            </div>
            <div class="col-5 hide-m"></div>
            <div class="col-4 col-3-m col-3-s">
                <p class="light">Send me an email</p>
                <p class="big"><a href="mailto:wouterdebres@gmail.com">cameronahaynes04@gmail.com</a></p>
            </div>
            <div class="col-5 col-3-m col-3-s">
                <p class="light">Connect on LinkedIn</p>
                <p class="big"><a href="https://www.linkedin.com/in/cameron-haynes-778056233/">linkedin.com/cameron-haynes/</a></p>
            </div>
            
            </div>
        </section>
    );
}