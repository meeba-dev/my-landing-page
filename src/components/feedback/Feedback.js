import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import './Feedback.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const PUBLIC_KEY = "Vrd-s4lUzw0GNkh68";
const serviceID = 'service_4xsh4oc';
const templateID = 'template_pyr97q9';


function Feedback() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
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
    };

    return(
        <div id="feedback">
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Modal window testing">
                <div className='modal-container'>
                    <div className='modal-container-header'>
                        <h1>Contact me</h1>
                        <img className='close' src="./img/icons/close.png" alt="close-cross" />
                    </div>
                    <form ref={form} className='feedback-form' method="post" encType="text/plain">
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
            </Modal>
        </div>
    );
}

export default Feedback;