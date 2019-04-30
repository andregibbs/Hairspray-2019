import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col, Modal, ModalHeader, ModalBody} from 'reactstrap'
import 'react-image-lightbox/style.css'
import Lottie from 'react-lottie'
import * as animationData from 'lottie/data.json'
import copyLg from 'images/copy-lg.svg'
import copySm from 'images/copy-sm.svg'
import copyXs from 'images/copy-xs.svg'
import SignUpForm from '../components/SignUpForm'
import coliseum from 'images/London-Coliseum.svg'
import sheIsBack from 'images/she-is-back.svg'
import starringXs from 'images/starring-xs.svg'
import starring from 'images/starring.svg'
import limitedSeasonXs from 'images/limited-season-xs.svg'
import limitedSeason from 'images/limited-season.svg'
import mainImgXs from 'images/Image-mobile.jpg'
import mainImgSm from 'images/Image-tablet.jpg'
import mainImgLg from 'images/Image-desktop.jpg'
import {Link} from 'gatsby'

const headData = {
    title: 'Hairspray The Musical | Official Site',
    description: '',
}

const lottieOptions = {
    loop: true,
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
                        <Container fluid={true} className="pt-4 pb-1 mb-n5">
                            <Container>
                                <img src={sheIsBack} className="img-fluid" alt="She is back to shake up the West end"
                                     title="She is back to shake up the West end"/>
                            </Container>
                        </Container>
                        <div className="py-4">
                            <Lottie options={lottieOptions}
                                    className="img-fluid logo"
                            />
                        </div>
                        <Container fluid={true} className="pb-2 pt-1 mt-n5">
                            <Container>
                                <img src={starringXs} className="img-fluid mx-auto d-block d-sm-none"
                                     alt="Starring Michael Ball as Edna Turnblad"
                                     title="Starring Michael Ball as Edna Turnblad"/>
                                <Row className="d-none d-sm-flex mb-n5 d-xl-none">
                                    <Col sm={6}>
                                        <img src={starring} className="img-fluid mx-auto starring"
                                             alt="Starring Michael Ball as Edna Turnblad"
                                             title="Starring Michael Ball as Edna Turnblad"/>
                                        <button
                                            onClick={this.toggleModal}
                                            className="btn btn--watch-trailer mt-3">
                                            Watch trailer
                                        </button>
                                    </Col>
                                    <Col sm={6}>
                                        <img src={limitedSeason} className="img-fluid mx-auto limitedSeason"
                                             alt="Limited season begins april 2020 at the London Coliseum"
                                             title="Limited season begins april 2020 at the London Coliseum"/>
                                        <a
                                            href="https://www.ticketmaster.co.uk/hairspray-tickets/artist/820944"
                                            target="_blank" rel="noreferrer noopener"
                                            className="btn btn--book-now mt-3">
                                            Book now
                                        </a>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                        <div className="pb-4 pb-sm-0">
                            <img src={mainImgXs} className="img-fluid mx-auto d-block d-sm-none" alt=""/>
                            <img src={mainImgSm} className="img-fluid mx-auto d-none d-sm-block d-lg-none" alt=""/>
                            <img src={mainImgLg} className="img-fluid mx-auto d-none d-lg-block d-xl-none mainImg" alt=""/>
                            <a
                                href="https://www.ticketmaster.co.uk/hairspray-tickets/artist/820944"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--book-now mt-n1 d-sm-none">
                                Book now
                            </a>
                            <div className="d-none d-xl-block px-3">
                                <Row>
                                    <Col xl={3} className="my-auto">
                                        <img src={starring} className="img-fluid mx-auto starring"
                                             alt="Starring Michael Ball as Edna Turnblad"
                                             title="Starring Michael Ball as Edna Turnblad"/>
                                        <button
                                            onClick={this.toggleModal}
                                            className="btn btn--watch-trailer mt-3">
                                            Watch trailer
                                        </button>
                                    </Col>
                                    <Col xl={6}>
                                        <img src={mainImgLg} className="img-fluid mx-auto d-none d-lg-block mainImg" alt=""/>
                                    </Col>
                                    <Col xl={3} className="my-auto">
                                        <img src={limitedSeason} className="img-fluid mx-auto limitedSeason"
                                             alt="Limited season begins april 2020 at the London Coliseum"
                                             title="Limited season begins april 2020 at the London Coliseum"/>
                                        <a
                                            href="https://www.ticketmaster.co.uk/hairspray-tickets/artist/820944"
                                            target="_blank" rel="noreferrer noopener"
                                            className="btn btn--book-now mt-3">
                                            Book now
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <Container fluid={true} className="pb-0 mt-n1 d-sm-none">
                            <Container>
                                <img src={limitedSeasonXs} className="img-fluid mx-auto"
                                     alt="Limited season begins april 2020 at the London Coliseum"
                                     title="Limited season begins april 2020 at the London Coliseum"/>
                            </Container>
                        </Container>
                        <Container fluid={true} className="pb-4 mt-n4 d-sm-none">
                            <Container>
                                <button
                                    onClick={this.toggleModal}
                                    className="btn btn--watch-trailer mt-5">
                                    Watch trailer
                                </button>
                            </Container>
                        </Container>

                        <Container fluid={true} className="py-4 container-pink">
                            <Container>
                                <p>The original award-winning production directed by Jack O’Brien and choreographed by
                                    Jerry Mitchell</p>

                                <div className="d-block d-lg-none">
                                    <p>Book by Mark O’Donnell <br className="d-sm-none"/>
                                        and Thomas Meehan</p>
                                    <p>Music by Marc Shaiman</p>
                                </div>
                                <div className="d-none d-lg-block">
                                    <p>Book by Mark O’Donnell and Thomas Meehan | Music by Marc Shaiman</p>
                                </div>
                                <p>Lyrics by Scott Wittman <br className="d-sm-none"/>
                                    and Marc Shaiman</p>
                                <p className="text--normal">Based on the John Waters film</p>

                                <button
                                    onClick={this.toggleModal}
                                    className="btn btn--sign-up mt-x5">
                                    Sign up for updates
                                </button>
                            </Container>
                        </Container>
                        <Container fluid={true} className="footer pb-4">
                            <Container>
                                <img src={coliseum} alt="London Coliseum" className="img-fluid coliseum"/>

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