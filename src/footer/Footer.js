import './Footer.css';

function Footer() {
    return (
        <footer>
            <ul className='footer-container'>
                <li>
                    <ul className='footer-socials' id="contacts">
                        <li>
                            <a href="https://www.linkedin.com/in/mikhail-baum-2a4391126">
                                <img src="./img/social/linkedin.png" alt="linkedin"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/mikhaelbaum">
                                <img src="./img/social/twitter.png" alt="twitter"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/mikhaelbaum">
                                <img src="./img/social/telegram.png" alt="telegram"/>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <section className='footer-copyrights'>
                <p>&#60; &#62; Made by Mikhail Baum</p>
            </section>
        </footer>
    );
}

export default Footer;