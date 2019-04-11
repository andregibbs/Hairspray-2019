import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul className="header__links--social">
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer"
                           className="icon icon-twitter">
                            <div className="btn-social twitter">
                                <span className="sr-only">Twitter</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank"
                           rel="noopener noreferrer" className="icon icon-facebook">
                            <div className="btn-social facebook">
                                <span className="sr-only">Facebook</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer"
                           className="icon icon-instagram">
                            <div className="btn-social instagram">
                                <span className="sr-only">Instagram</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;