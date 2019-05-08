import React, {Component} from 'react';
import {Link} from 'gatsby';
import logo from 'images/logo.svg'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navToggled: false,
            collapsed: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        window.addEventListener('resize', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
        window.removeEventListener('resize', this.handleScroll, true);
    }

    handleScroll = () => {
        // let scrollPosition = document.documentElement.scrollTop
        let scrollPosition = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        let collapsed = scrollPosition < 20 ? false : true;
        this.setState({
            collapsed
        });
    };

    toggleNav = () => {
        this.setState({
            navToggled: !this.state.navToggled
        });
    };

    render() {
        const {navToggled, collapsed} = this.state;
        const displayLogo = this.props.displayLogo;

        return (
            <>
            <header className={`header ${collapsed ? 'collapsed' : ''}`}>
                <div className="header__container">
                    <ul className={`header__links--social ${!displayLogo || navToggled ? 'active' : ''}`}>
                        <li>
                            <a href="https://twitter.com/hairspraylondon" target="_blank" rel="noopener noreferrer"
                               className="socialIcon socialIcon-twitter">
                                <div className="btn-social twitter">
                                    <span className="sr-only">Twitter</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/hairspraylondon" target="_blank"
                               rel="noopener noreferrer" className="socialIcon socialIcon-facebook">
                                <div className="btn-social facebook">
                                    <span className="sr-only">Facebook</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/HairsprayLondon/" target="_blank" rel="noopener noreferrer"
                               className="socialIcon socialIcon-instagram">
                                <div className="btn-social instagram">
                                    <span className="sr-only">Instagram</span>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div className={`header-logo ${navToggled ? 'hidden' : ''} ${!displayLogo ? 'd-none' : ''}`}>
                        <Link to="/">
                            <img src={logo} className="img-fluid"/>
                        </Link>
                    </div>

                    <button
                        className={`nav-toggle ${navToggled ? 'active' : ''} ${collapsed ? 'collapsed' : ''}`}
                        onClick={this.toggleNav}
                        aria-expanded="false"
                        aria-controls="navbarSupportedContent"
                        type="button"
                        aria-label="Toggle navigation"
                    >
                        <span className="nav-toggle__burger"></span>
                    </button>
                </div>
            </header>
                <nav id="navbarSupportedContent"
                     className={`nav ${navToggled ? 'active' : ''} ${collapsed ? 'collapsed' : ''}`}>
                    <ul className="nav__btns">
                        <li>
                            <Link to="/" className="link home" activeClassName="active" title="Home">
                                <div/>
                                <span className="sr-only">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ticket-information/" activeClassName="active" className="link ticket-info" title="Ticket Information">
                                <div/>
                                <span className="sr-only">Ticket Information</span>
                            </Link>
                        </li>
                        <li>
                            <ul className="nav__btns--social">
                                <li>
                                    <a href="https://twitter.com/hairspraylondon" target="_blank" rel="noopener noreferrer"
                                       className="socialIcon socialIcon-twitter">
                                        <div className="btn-social twitter">
                                            <span className="sr-only">Twitter</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/hairspraylondon" target="_blank"
                                       rel="noopener noreferrer" className="socialIcon socialIcon-facebook">
                                        <div className="btn-social facebook">
                                            <span className="sr-only">Facebook</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank" rel="noopener noreferrer"
                                       className="socialIcon socialIcon-instagram">
                                        <div className="btn-social instagram">
                                            <span className="sr-only">Instagram</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </>

        );
    }
}

export default Header;