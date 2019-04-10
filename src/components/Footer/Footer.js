import React from 'react'
import {Link} from 'gatsby'
import {Container, Row, Col} from 'reactstrap'
import DominionLogo from 'images/Logo-DominionTheatre.svg'

const Footer = () => (
    <footer className="footer">
        <Container>
            Sue Hyman Associates
            BAFTA Full Voting Membership
            <hr/>
            +44 (0) 7976 514 449
            sue.hyman@btconnect.com
                <ul className="footer__links--social">
                <li>
                    <a href="https://twitter.com/BigTheMusical" target="_blank" rel="noopener noreferrer"
                       className="icon icon-twitter">
                        <div className="btn-social twitter">
                            <span className="sr-only">Twitter</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank" rel="noopener noreferrer"
                       className="icon icon-skype">
                        <div className="btn-social skype">
                            <span className="sr-only">Skype</span>
                        </div>
                    </a>
                </li>
            </ul>

            <ul className="footer__links py-2">
                <li>Designed and built by <a href="https://www.dewynters.com/"
                                             target="_blank"
                                             rel="noopener noreferrer">Dewynters</a></li>
            </ul>
        </Container>
    </footer>
);

export default Footer