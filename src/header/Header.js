import './Header.css';

function Header() {
    return(
        <header>
            <nav>
                <div class="nav-logo">
                    <img src="../../public/img/logo/logo.png" alt='logo'/>
                </div>
                <ul class="nav-list">
                    <li class="nav-list-item">
                        <a href="#about-me">About me</a>
                    </li>
                    <li class="nav-list-item">
                        <a href="#portfolio">Projects</a>
                    </li>
                    <li class="nav-list-item">
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
            <div class="header-photo">
                <div class="header-photo-headline">
                    <h1>Hi! I'm Mischa. I'm a website creator. Entirely at your service</h1>
                    <button class="btn btn-header btn-fb" type="button">Leave me a message</button>
                </div>
            </div>
        </header>
    );
}

export default Header;