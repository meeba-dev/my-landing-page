import './Main.css';
import { downloadCV, sendEmail } from './index.js';
import Map from '../map/Map';

function Main() {
    return(
        <main>
            <div id="about-me">
                <h1>About me</h1>
                <div className='about-me-container'>
                    <div className='about-me-photo'>
                        <div className='about-me-photo-container'>
                            <img src="./img/me/MK-4432.jpg" alt="me"/>
                        </div>
                    </div>
                    <div className='about-me-text'>
                        <ul className='about-me-text-icons'>
                            <li>
                                <img src="./img/icons/javascript.png" alt="icon-js" />
                            </li>
                            <li>
                                <img src="./img/icons/nodejs.png" alt="icon-nodejs" />
                            </li>
                            <li>
                                <img src="./img/icons/typescript.png" alt="icon-ts" />
                            </li>
                            <li>
                                <img src="./img/icons/react.png" alt="icon-react" />
                            </li>
                            <li>
                                <img src="./img/icons/redux.png" alt="icon-redux" />
                            </li>
                            <li>
                                <img src="./img/icons/mongodb.png" alt="icon-mongo" />
                            </li>
                            <li>
                                <img src="./img/icons/java.png" alt="icon-java" />
                            </li>
                            <li>
                                <img src="./img/icons/spring-logo-black.svg" alt="icon-spring" />
                            </li>
                            <li>
                                <img src="./img/icons/spring-boot.svg" alt="icon-spring-boot" />
                            </li>
                            <li>
                                <img src="./img/icons/sql.png" alt="icon-sql" />
                            </li>
                        </ul>
                        <p className='about-me-text-description'>
                            My name is Mikhail Baum. I am a Web Developer. I have a Bachelor degree in Computer Science from Togliatti State University since 2021.
                            I have some experience both in frontend and backend development. 
                        </p>
                        <p className='about-me-text-description'>
                            Now mostly, I focus on JavaScript and making web sites.
                            I work in a couple of Software Companies. Now I'm a freelance web developer and I'm ready to implement your ideas with 
                            slight correction of mine. I can help you to adapt your product of imagination to the environment of the Internet.
                            I have recently started to work with CMS systems. Of course one of it is Wordpress. 
                            So feel free to order the site which should be created by that system.
                            Also, I prefer making sites with React, Redux and MongoDB. I got used to it and I like it.
                        </p>
                        <p className='about-me-text-description'>
                            I don't have a huge portfolio so I'm ready to help with various type of jobs.
                            I have some turnkey solutions and patterns, but I'll be working with your ideas by pleasure too.
                        </p>
                        <div className='about-me-text-button'>
                            <button className='btn btn-cv' type="button" onClick={downloadCV} download="pdf">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
            <Map className="leaflet-container"/>
            <div id="portfolio">
                <h1>My projects</h1>
                <ul className='portfolio-container'>
                    <li className='portfolio-container-item'>
                        <button type="button" className='btn-prt btn-prt-1'>
                            <img src="./img/logo/doctor-calm-small.png" alt="doctor-calm"/>
                        </button>
                    </li>
                    <li className='portfolio-container-item'>
                        <button type="button" className='btn-prt btn-prt-2'>
                            <img src="./img/logo/optimax-logo-small.png" alt="optimax-logo" />
                        </button>
                    </li>
                    <li className='portfolio-container-item'>
                        <button type="button" className='btn-prt btn-prt-3'>
                            <img src="./img/placeholder-small.png" alt="placeholder" />
                        </button>
                    </li>
                    <li className='portfolio-container-item'>
                        <button type="button" className='btn-prt btn-prt-4'>
                            <img src="./img/placeholder-small-coffee.png" alt="placeholder" />
                        </button>
                    </li>
                </ul>
            </div>
            <div id="payment-options">
                <ul className='payment-options-list'>
                    <li className='payment-options-list-item'>
                        <img src="./img/psp/visa.png" alt="visa" />
                    </li>
                    <li className='payment-options-list-item'>
                        <img src="./img/psp/paypal.png"  alt="paypal" />
                    </li>
                    <li className='payment-options-list-item'>
                        <img src="./img/psp/worldpay.png" alt="worldpay" />
                    </li>
                    <li className='payment-options-list-item'>
                        <img src="./img/psp/maestro.png" alt="maestro" />
                    </li>
                </ul>
            </div>
            <div id="feedback">
                <div className='modal-container'>
                    <div className='modal-container-header'>
                        <h1>Contact me</h1>
                        <img className='close' src="./img/icons/close.png" alt="close-cross" />
                    </div>
                    <form className='feedback-form' method="post" encType="text/plain">
                        <div className='name-form'>
                            <input className='input-form' type="text" id="input-form-firstname" placeholder="First name" />
                            <input className='input-form' type="text" id="input-form-lastname" placeholder="Last name" />
                        </div>
                        <input className='input-form' type="email" id="input-form-email" placeholder="Email" />
                        <input className='input-form' type="text" id="input-form-subject" placeholder="Subject" />
                        <textarea className='textarea-form' id="input-form-body" placeholder="Message"></textarea>
                        <button className='btn btn-form' type="submit" onClick={sendEmail}>Submit</button>
                    </form>
                </div>
            </div>
            <div id="doctor-calm">
                <div className='modal-container-portfolio'>
                    <div className='modal-container-header'>
                        <h1>Doctor Calm</h1>
                        <img className='close' src="./img/icons/close.png" alt="close-cross" />
                    </div>
                    <div className='modal-container-image'>
                        <img src="./img/demo/dc-2.png" alt="doctor-calm-demo" />
                    </div>
                    <a href="https://vk.com/doctor_calm" target="_blank" rel="noreferrer">Try it out</a>
                    <a href="https://github.com/meeba-dev/bot-antidep" target="_blank" rel="noreferrer">Look at the code</a>
                    <p className='portfolio-project-description'>
                        This is my pet projects during university times. In my third year I receive an invintation to the project.
                        The task was to create a bot for social media interaction with users. The main aim was to collect the data 
                        of users through providing various types of mental tests. It's useful way to determine what's happening
                        with user and make an initial diagnosis, before professional doctor can start the communication with user.
                        It can save a lot of time, because the majority of users don't have any mental problems. The main code is maden by Node.js.
                    </p>
                </div>
            </div>
            <div id="optimax">
                <div className='modal-container-portfolio'>
                    <div className='modal-container-header'>
                            <h1>Optimax Cart</h1>
                            <img className='close' src="./img/icons/close.png" alt="close-cross" />
                    </div>
                    <div className='modal-container-image'>
                        <img src="./img/demo/optimax-demo.png" alt="optimax-demo" />
                    </div>
                    <a href="https://optimax-shopping-cart.herokuapp.com" target="_blank" rel="noreferrer">Try it out</a>
                    <a href="https://github.com/meeba-dev/optimax-shopping-cart" target="_blank" rel="noreferrer">Look at the code</a>
                    <p className='portfolio-project-description'>
                        This is a test task from local branch of Oprimax company. 
                        It's Israeli based company which is selleing eyeglasses, sunglasses and related products.
                        I created a part of future online store with shopping cart and checkout section. 
                        It was a pleasure to use TypeScript, React and Redux during the process.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Main;