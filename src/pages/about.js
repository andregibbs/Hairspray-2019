import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col} from 'reactstrap'
import Footer from 'components/Footer'
import leftimg from 'images/MBH139516_RT.jpg'
import rightimg from 'images/MBH139794_RT.jpg'

const headData = {
    title: 'About - Hairspray The Musical - London Coliseum',
    description: 'Arriving at the London Coliseum from next April for a strictly limited 18-week season. Don’t miss out – book now!',
}

const AboutPage = () => (
    <Layout
        headData={headData}
        displayLogo={true}
    >
        <section className="page AboutPage">
            <div className="AboutPage__content">
                <Container fluid={true} className="py-2 py-lg-5">
                    <Container>
                        <h1>About</h1>
                    </Container>
                </Container>

                 <Container fluid={true} className="py-2 pb-lg-5">
                   <Row className="text-center m-0 mt-4 d-xl-flex text-center">
                        <Col xs={12} xl={4} style={{ marginTop: "-8rem"}}>
                          <img src={leftimg} alt="" title="" className="img-fluid d-none d-xl-block mx-auto"/>
                        </Col>
                        <Col xs={12} xl={4}>
                           <h2 className="heading--xl text--purple">LOOK WHO'S BACK!</h2>
                           <br /><br/>
                            <p><span className="text--bold">Look who’s back! Don’t miss Michael Ball reprising his Olivier Award-winning role as Edna Turnblad in Hairspray. The huge-hearted, smash-hit musical arrives at the magnificent London Coliseum from this April until 29 August 2020.</span></p> 
                            <p>Baltimore, 1962. Tracy Turnblad is a big girl with big hair and big dreams. Can she make it on the local TV dance show, win the heart of teen heartthrob Link Larkin and bring everyone together – whatever their colour, size or hairdo? Well if you want a change, you’ve really got to shake things up!</p> 
                            <p>From the original award-winning creative team of director <strong>Jack O’Brien</strong> and choreographer <strong>Jerry Mitchell</strong>, and featuring the infectiously feel-good songs <strong className="text--blue text--bolder">Good Morning Baltimore</strong>, <strong className="text--blue text--bolder">You Can’t Stop the Beat</strong> and <strong className="text--blue text--bolder">Big, Blonde and Beautiful</strong> this inspirational, fun-loving and fabulously uplifting musical sensation is back and bigger than ever.</p>
                            <p>It’s the show that gives maximum lift<br/> so don’t miss out – book now!</p>
                             <a
                                href="https://londoncoliseum.org/whats-on/hairspray/"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--book-now">
                                Book Now
                            </a>
                        </Col>
                        <Col xs={12} xl={4} style={{ marginTop: "-8rem"}}>
                         <img src={rightimg} alt="" title="" className="img-fluid d-none d-xl-block mx-auto"/>

                        </Col>
                   </Row>
                </Container>

                <div className="container--pink-shape">
                    <h2 className="heading--xl text--white text-center">3&nbsp;WAYS&nbsp;TO BOOK&nbsp;TICKETS</h2>
                    <Row className="text-center mt-4 d-none d-xl-flex text-center">
                        <Col xs={12} xl={4}>
                            <h3 className="book-title text-uppercase">Online</h3>
                        </Col>
                        <Col xs={12} xl={4}>
                            <h3 className="book-title text-uppercase">Call</h3>
                        </Col>
                        <Col xs={12} xl={4}>
                            <h3 className="book-title text-uppercase">In person</h3>
                        </Col>
                    </Row>
                    <Row className="text-center d-none d-xl-flex text-center">
                        <Col xs={12} xl={4}>
                            <a
                                href="https://londoncoliseum.org/whats-on/hairspray/"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--book-now">
                                Box office
                            </a>
                        </Col>
                        <Col xs={12} xl={4}>
                            <a
                                href="tel:+442078459300"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--call">
                                020 7845 9300
                            </a>
                        </Col>
                        <Col xs={12} xl={4}>
                            <a
                                href="https://goo.gl/maps/cjgp5krePeyiRWvM6"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--person">
                                Get directions
                            </a>
                        </Col>
                    </Row>
                    <Row className="text-center mt-xl-4 d-none d-xl-flex text-center">
                        <Col xs={12} xl={8}>
                            {/* <p className="text--faded-pink">A £2.25 booking fee applies to online & phone bookings</p> */}
                        </Col>
                        <Col xs={12} xl={4}>
                            <p>London&nbsp;Coliseum, St&nbsp;Martin's&nbsp;Ln, Charing&nbsp;Cross, London WC2N&nbsp;4ES</p>
                        </Col>
                    </Row>
                    <Row className="d-xl-none text-center mx-auto mt-4">
                        <Col xs={12}>
                            <h3 className="book-title text-uppercase">Online</h3>
                            <a
                                href="https://londoncoliseum.org/whats-on/hairspray/"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--book-now">
                                Box office
                            </a>

                            <p>&nbsp;</p>
                            <h3 className="book-title text-uppercase">Call</h3>
                            <a
                                href="tel:+442078459300"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--call">
                                020 7845 9300
                            </a>
                            {/* <p className="text--faded-pink">A £2.25 booking fee applies to online & phone bookings</p> */}
                            <p>&nbsp;</p>
                            <h3 className="book-title text-uppercase">In person</h3>
                            <a
                                href="https://goo.gl/maps/cjgp5krePeyiRWvM6"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--person">
                                Get directions
                            </a>
                            <p>London&nbsp;Coliseum, St&nbsp;Martin's&nbsp;Ln, Charing&nbsp;Cross, London WC2N&nbsp;4ES</p>
                        </Col>
                    </Row>
                </div>        
                <Footer/>
            </div>
        </section>
    </Layout>
)
export default AboutPage