import './Header.css';
// import Modal from 'react-modal';
import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
import Feedback, { openModal } from '../feedback/Feedback';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)'
//     }
// }

// const PUBLIC_KEY = "Vrd-s4lUzw0GNkh68";
// const serviceID = 'service_4xsh4oc';
// const templateID = 'template_pyr97q9';

// Modal.setAppElement('#root');

function Header() {

    // var subtitle;
    // const [modalIsOpen, setIsOpen] = React.useState(false);

    // function openModal() {
    //     setIsOpen(true);
    // }
    // function afterOpenModal() {
    //     subtitle.style.color = '#f00';
    // }
    // function closeModal() {
    //     setIsOpen(false);
    // }
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();  
    //     emailjs.sendForm(serviceID, templateID, form.current, PUBLIC_KEY)
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };

    return(
        <header id="header">
            <nav>
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
                    <button className='btn btn-header btn-fb' type="button" onClick={openModal}>Leave me a message</button>
                </div>
            </div>
            <Feedback />
        </header>
    );
}

export default Header;