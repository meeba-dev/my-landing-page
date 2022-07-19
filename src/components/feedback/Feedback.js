import React, { useRef } from 'react';
import './Feedback.css';

function sendEmail() {

}

function Feedback() {
    return(
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
    );
}

export default Feedback;