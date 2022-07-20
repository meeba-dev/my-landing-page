import './Header.css';
import { openModal } from '../feedback/Feedback';

function Header() {
    return(
        <header>
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
                    <button className='btn btn-header btn-fb' type="button" onClick={""}>Leave me a message</button>
                </div>
            </div>
        </header>
    );
}

export default Header;