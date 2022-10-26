import './Main.css';
import Map from '../map/Map';
import React from 'react';
import Modal from 'react-modal';
import { downloadCV } from './index.js';

const customStyles = {
    content: {
        background: 'var(--white-color)',
        border: '2px solid var(--black-color)',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        minWidth: '16em',
        maxWidth: '40em',
        minHeight: '18em',
        maxHeight: '45em',
        width: '90%',
        transform: 'translate(-50%, -50%)'
    },
    overlay: {
        zIndex: 1000
    }
}

function Main() {
    const [modalOneIsOpen, setOneIsOpen] = React.useState(false);
    const [modalTwoIsOpen, setTwoIsOpen] = React.useState(false);

    function openModalOne() {
        setOneIsOpen(true);
    }
    function closeModalOne() {
        setOneIsOpen(false);
    }
    function openModalTwo() {
        setTwoIsOpen(true);
    }
    function closeModalTwo() {
        setTwoIsOpen(false);
    }
    return(
        <main>
            <div id="about-me" >
                <h1>About me</h1>
                <div className='about-me-container container'>
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
                        <button className='btn btn-cv' type="button" onClick={downloadCV} download="pdf">Download CV</button>
                    </div>
                </div>
            </div>
            <div id="portfolio">
                <h1>My projects</h1>
                <ul className='portfolio-container'>
                    <li className='portfolio-container-item'>
                        <button type="button" className='btn-prt btn-prt-1' onClick={openModalOne}>
                            <img src="./img/logo/doctor-calm-small.png" alt="doctor-calm"/>
                        </button>
                    </li>
                    <li className='portfolio-container-item'>
                        <button type="button" className='btn-prt btn-prt-2' onClick={openModalTwo}>
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
            <Map />
            <Modal isOpen={modalOneIsOpen} onRequestClose={closeModalOne} style={customStyles}>
                <div className='modal-container-portfolio'>
                    <div className='modal-container-header'>
                        <h1>Doctor Calm</h1>
                        <ul className='modal-container-header-icons'>
                            <li>
                                <img src="./img/icons/javascript.png" alt="icon-js" />
                            </li>
                            <li>
                                <img src="./img/icons/nodejs.png" alt="icon-nodejs" />
                            </li>
                            <li>
                                <img src="./img/icons/mongodb.png" alt="icon-mongo" />
                            </li>
                        </ul>
                        <button className='btn-close' type='button' onClick={closeModalOne}>
                            <img className='close' src="./img/icons/close.png" alt="close-cross" />
                        </button>
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
            </Modal>
            <Modal isOpen={modalTwoIsOpen} onRequestClose={closeModalTwo} style={customStyles}>
                <div className='modal-container-portfolio'>
                    <div className='modal-container-header'>
                        <h1>Optimax Cart</h1>
                        <ul className='modal-container-header-icons'>
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
                        </ul>
                        <button className='btn-close' type='button' onClick={closeModalTwo}>
                            <img className='close' src="./img/icons/close.png" alt="close-cross" />
                        </button>
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
            </Modal>
        </main>
    );
}

export default Main;