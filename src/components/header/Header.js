import './Header.css';
import React, { useRef } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';


const customStyles = {
    content: {
        background: 'var(--main-color)',
        border: '2px solid var(--black-color)',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        minWidth: '40em',
        transform: 'translate(-50%, -50%)'
    },
    overlay: {
        zIndex: 1000
    }
}

const PUBLIC_KEY = "Vrd-s4lUzw0GNkh68";
const serviceID = 'service_4xsh4oc';
const templateID = 'template_pyr97q9';

Modal.setAppElement('#root');

function Header() {

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
        setTimeout(() => setTwoIsOpen(false), 5000);
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();  
        emailjs.sendForm(serviceID, templateID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });   
        closeModalOne();
        openModalTwo();
    };

    return(
        <header id="header">
            <nav className='container'>
                <div className='nav-logo'>
                    <img src="./img/logo/logo.png" alt='logo'/>
                </div>
                <ul className='nav-list'>
                    <li className='nav-list-item'>
                        <a href="#about-me">About me</a>
                    </li>
                    <li className='nav-list-item'>
                        <a href="#portfolio">Projects</a>
                    </li>
                    <li className='nav-list-item'>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
            <div className='header-photo'>
                <div className='header-photo-headline'>
                    <h1>Hi! I'm Mischa. I'm a website creator. Entirely at your service</h1>
                    <button className='btn btn-header btn-fb' type="button" onClick={openModalOne}>Leave me a message</button>
                </div>
            </div>
            <Modal isOpen={modalOneIsOpen} onRequestClose={closeModalOne} style={customStyles}>
                <div className='modal-container'>
                    <div className='modal-container-header'>
                        <h1>Contact me</h1>
                        <button className='btn-close' type='button' onClick={closeModalOne}>
                            <img className='close' src="./img/icons/close.png" alt="close-cross" />
                        </button>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className='feedback-form' method="post" encType="text/plain">
                        <div className='name-form'>
                            <input className='input-form' type="text" name="first_name" id="input-form-firstname" placeholder="First name" />
                            <input className='input-form' type="text" name="last_name" id="input-form-lastname" placeholder="Last name" />
                        </div>
                        <input className='input-form' type="email" name="email" placeholder="Email" />
                        <input className='input-form' type="text" name="subject" placeholder="Subject" />
                        <textarea className='textarea-form' name="message"placeholder="Message"></textarea>
                        <button className='btn btn-form' type="submit">Submit</button>
                    </form>
                </div>
            </Modal>
            <Modal isOpen={modalTwoIsOpen} style={customStyles}>
                <div className='modal-container'>
                    <div className='modal-container-header'>
                        <h1>Your message was sent!</h1>
                    </div>
                    <div className='modal-container-text'>
                        <p>Thanks for contacting me. I will get in touch with you shortly</p>
                    </div>
                </div>
            </Modal>
        </header>
    );
}

export default Header;