import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col} from 'reactstrap'
import 'react-image-lightbox/style.css'
import Lottie from 'react-lottie'
import * as animationData from 'lottie/data.json'
import copyLg from 'images/copy-lg.svg'
import copySm from 'images/copy-sm.svg'
import copyXs from 'images/copy-xs.svg'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import SignUpForm from "../components/SignUpForm"
import {Link} from 'gatsby'

const headData = {
    title: 'Hairspray The Musical | Official Site',
    description: '',
}

const lottieOptions = {
    loop: false,
    autoplay: true,
    renderer: 'svg',
    animationData: animationData.default,
    assetsPath: "/lottie/images/"
}

class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            modalOpen: false,
        }
    }

    componentDidMount() {
    }

    toggleModal = (e) => {
        console.log('asdas')
        e.preventDefault();
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    };

    render() {
        const {modalOpen} = this.state

        return (
            <Layout
                headData={headData}
            >
                <section className="page HomePage">
                    <div className="HomePage__content">
                        <Container fluid={true} className="py-4">
                            <Container>
                                <Lottie options={lottieOptions}
                                        className="img-fluid logo"
                                />
                            </Container>
                        </Container>
                        <Container fluid={true} className="py-4">
                            <Container>
                               <img src={copyLg}
                                    alt="COMbING BACK TO the West end - Returning for a limited season"
                                    title="COMbING BACK TO the West end - Returning for a limited season"
                                    className="d-none d-lg-block combing-back img-fluid mx-auto"/>
                                <img src={copySm}
                                     alt="COMbING BACK TO the West end - Returning for a limited season"
                                     title="COMbING BACK TO the West end - Returning for a limited season"
                                     className="d-none d-sm-block d-lg-none combing-back img-fluid mx-auto"/>
                                <img src={copyXs}
                                     alt="COMbING BACK TO the West end - Returning for a limited season"
                                     title="COMbING BACK TO the West end - Returning for a limited season"
                                     className="d-block d-sm-none combing-back img-fluid mx-auto"/>
                            </Container>
                        </Container>
                        <Container fluid={true} className="py-sm-4">
                            <Container>
                                <button
                                    onClick={this.toggleModal}
                                    className="btn btn--sign-up">
                                    Sign up for updates
                                </button>
                            </Container>
                        </Container>
                        <Container fluid={true} className="pt-4 py-sm-4">
                            <Container>
                                <p>The original award-winning production directed by Jack O’Brien and choreographed by Jerry Mitchell</p>
                            </Container>
                        </Container>
                        <Container fluid={true} className="py-4">
                            <Container>
                                <div className="d-block d-lg-none">
                                    <p>Book by Mark O’Donnell <br className="d-sm-none" />
                                        and Thomas Meehan</p>
                                    <p>Music by Marc Shaiman</p>
                                </div>
                                <div className="d-none d-lg-block">
                                    <p>Book by Mark O’Donnell and Thomas Meehan | Music by Marc Shaiman</p>
                                </div>
                                <p>Lyrics by Scott Wittman <br className="d-sm-none" />
                                    and Marc Shaiman</p>
                                <p className="text--normal">Based on the John Waters film</p>
                            </Container>
                        </Container>
                        <Container fluid={true} className="py-4">
                            <Container>
                                <p className="text--small"> Copyright Messaging goes here 2019<br/>
                                    Fusce dapibus tellus ac cursus commodo</p>

                                <ul className="footer__links">
                                    <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
                                    <li><Link to="/cookie-policy/">Cookie Policy</Link></li>
                                    <li>Site by <a href="https://www.dewynters.com/" target="_blank" rel="noreferrer noopener">Dewynters</a></li>
                                </ul>
                            </Container>
                        </Container>
                    </div>
                </section>

                <Modal isOpen={modalOpen} className="signUp-modal" toggle={this.toggleModal}
                       centered={true}>
                    <button className="signUp-modal__close" onClick={this.toggleModal}>
                        <div className="sr-only">Close</div>
                    </button>
                    <ModalBody>
                        <div className="signUp-form">
                            <SignUpForm
                                className="signUp-modal"
                                submitBtnCopy="Submit"
                            />
                        </div>
                    </ModalBody>
                </Modal>
            </Layout>
        );

    }
}

export default IndexPage