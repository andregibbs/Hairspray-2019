import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col, Modal, ModalHeader, ModalBody} from 'reactstrap'
import 'react-image-lightbox/style.css'
import Lottie from 'react-lottie'
import * as animationData from 'lottie/data.json'
import SignUpForm from 'components/SignUpForm'
import Footer from 'components/Footer'
import YoutubeModal from 'components/YoutubeModal/YoutubeModal'
import sheIsBack from 'images/she-is-back.svg'
import starringXs from 'images/starring-xs.svg'
import starring from 'images/starring.svg'
import limitedSeasonXs from 'images/limited-season-xs.svg'
import limitedSeason from 'images/limited-season.svg'
import mainImgXs from 'images/Image-mobile.jpg'
import mainImgSm from 'images/Image-tablet.jpg'
import mainImgLg from 'images/Image-desktop.jpg'

const headData = {
    title: 'Hairspray: The Award-winning Musical | Official London Site',
    description: 'Michael Ball is back to shake up the West End. From April for 12 weeks only. Book now!',
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
            modalOpen: false,
            videoModalOpen: false,
            videoId: 'JJnOJFI-0n8',
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

    toggleVideoModal = (e) => {
        e.preventDefault();
        this.setState({
            videoModalOpen: !this.state.videoModalOpen
        });
    };

    render() {
        const {modalOpen, videoModalOpen, videoId} = this.state

        return (
            <Layout
                headData={headData}
                displayLogo={false}
            >
                <section className="page HomePage">
                    <div className="HomePage__content">
                        <h1 className="sr-only">Hairspray The Musical</h1>
                        <h2 className="sr-only">She is back to shake up the West end</h2>
                        <Container fluid={true} className="pb-1 mb-n5">
                            <Container>
                                <img src={sheIsBack} className="img-fluid sheIsBack" alt="She is back to shake up the West end"
                                     title="She is back to shake up the West end"/>
                            </Container>
                        </Container>
                        <div className="pt-4 logo mx-auto">
                            <Lottie options={lottieOptions}
                                    className="img-fluid"
                            />
                        </div>
                        <Container fluid={true} className="pb-2 pt-1 d-block mt-n1 mt-sm-n4">
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
                                            onClick={this.toggleVideoModal}
                                            className="btn btn--watch-trailer mt-3">
                                            Watch trailer
                                        </button>
                                    </Col>
                                    <Col sm={6}>
                                        <img src={limitedSeason} className="img-fluid mx-auto limitedSeason"
                                             alt="Limited season begins april 2020 at the London Coliseum"
                                             title="Limited season begins april 2020 at the London Coliseum"/>

                                        <p className="btn btn--on-sale">On Sale Friday 10AM</p>
                                        {/*<a*/}
                                        {/*    href="https://www.ticketmaster.co.uk/hairspray-tickets/artist/820944"*/}
                                        {/*    target="_blank" rel="noreferrer noopener"*/}
                                        {/*    className="btn btn--book-now mt-3 mt-lg-4">*/}
                                        {/*    Book now*/}
                                        {/*</a>*/}
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                        <div className="pb-4 pb-sm-0 mt-lg-n5">
                            <img src={mainImgXs} className="img-fluid mx-auto d-block d-sm-none" alt=""/>
                            <img src={mainImgSm} className="img-fluid mx-auto d-none d-sm-block d-lg-none" alt=""/>
                            <img src={mainImgLg} className="img-fluid mx-auto d-none d-lg-block d-xl-none mainImg" alt=""/>
                            {/*<a*/}
                            {/*    href="https://www.ticketmaster.co.uk/hairspray-tickets/artist/820944"*/}
                            {/*    target="_blank" rel="noreferrer noopener"*/}
                            {/*    className="btn btn--book-now mt-n2 d-sm-none">*/}
                            {/*    Book now*/}
                            {/*</a>*/}
                            <p className="btn d-sm-none btn--on-sale">On Sale Friday 10AM</p>
                            <div className="d-none d-xl-block px-3">
                                <Row>
                                    <Col xl={3} className="my-auto">
                                        <img src={starring} className="img-fluid mx-auto starring"
                                             alt="Starring Michael Ball as Edna Turnblad"
                                             title="Starring Michael Ball as Edna Turnblad"/>
                                        <button
                                            onClick={this.toggleVideoModal}
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
                                        {/*<a*/}
                                        {/*    href="https://www.ticketmaster.co.uk/hairspray-tickets/artist/820944"*/}
                                        {/*    target="_blank" rel="noreferrer noopener"*/}
                                        {/*    className="btn btn--book-now mt-4">*/}
                                        {/*    Book now*/}
                                        {/*</a>*/}
                                        <p className="btn mt-4 btn--on-sale">On Sale Friday 10AM</p>
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
                                    onClick={this.toggleVideoModal}
                                    className="btn btn--watch-trailer mt-5">
                                    Watch trailer
                                </button>
                            </Container>
                        </Container>

                        <Container fluid={true} className="py-4 container--pink">
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
                        <Footer/>
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

                <YoutubeModal isOpen={videoModalOpen} toggleModal={this.toggleVideoModal} videoId={videoId}/>
            </Layout>
        );

    }
}

export default IndexPage