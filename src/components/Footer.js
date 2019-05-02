import React from 'react';
import {Container} from "reactstrap";
import {Link} from "gatsby";
import coliseum from 'images/London-Coliseum.svg'

const Footer = () => (
    <Container fluid={true} className="footer pb-4 text-center">
        <Container>
            <a href="https://www.londoncoliseum.org/whats-on/hairspray/" target="_blank" rel="noreferrer noopener">
                <img src={coliseum} alt="London Coliseum" className="img-fluid coliseum"/>
                <span className="sr-only">London Coliseum</span>
            </a>

            <p className="text--small">© 2019 Hairspray - All Rights Reserved</p>

            <ul className="footer__links">
                <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
                <li className="d-none d-sm-inline-block">|</li>
                <li><Link to="/cookie-policy/">Cookie Policy</Link></li>
                <li className="d-none d-sm-inline-block">|</li>
                <li>Site by <a href="https://www.dewynters.com/" target="_blank"
                               rel="noreferrer noopener">Dewynters</a></li>
            </ul>
        </Container>
    </Container>
)

export default Footer;