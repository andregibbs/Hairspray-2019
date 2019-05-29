import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col} from 'reactstrap'
import {Link} from 'gatsby'
import Footer from 'components/Footer'
import threeWaysXs from 'images/3-ways-xs.svg'
import threeWays from 'images/3-ways.svg'
import lookBack from 'images/look-back.svg'
import leftimg from 'images/MBH139516_RT.jpg'
import rightimg from 'images/MBH139794_RT.jpg'

const headData = {
    title: 'About - Hairspray The Musical - London Coliseum',
    description: 'Arriving at the London Coliseum from next April for a strictly limited 12-week season. Don’t miss out – book now!',
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

                 <Container fluid={true} className="py-2 py-lg-0">
                   <Row className="text-center mt-4 d-xl-flex text-center">
                        <Col xs={12} xl={4}>
                          <img src={leftimg} alt="" title="" className="img-fluid d-none d-lg-block mx-auto"/>
                        </Col>
                        <Col xs={12} xl={4}>
                           <img src={lookBack} alt="" title="" className="img-fluid d-none d-lg-block mx-auto"/>
                           <br className="d-none d-lg-block"/><br className="d-none d-lg-block"/>
                            <p><strong>Don’t miss Michael Ball reprising his Olivier Award-winning role as Edna Turnblad in Hairspray the Musical. The huge-hearted, smash-hit musical arrives at the magnificent London Coliseum from next April for a strictly limited 12-week season.</strong></p> 
                            <p>Baltimore, 1962. Tracy Turnblad is a big girl with big hair and big dreams. Can she make it on the local TV dance show, win the heart of teen heartthrob Link Larkin and bring everyone together – whatever their colour, size or hairdo? Well if you want a change, you’ve really got to shake things up!</p> 
                            <p>From the original award-winning creative team of director <strong>Jack O’Brien</strong> and choreographer <strong>Jerry Mitchell</strong>, and featuring the infectiously feel-good songs <strong className="text--blue">Good Morning Baltimore</strong>, <strong className="text--blue">You Can’t Stop the Beat</strong> and <strong className="text--blue">Big, Blonde and Beautiful</strong> this inspirational, fun-loving and fabulously uplifting musical sensation is back and bigger than ever.</p>
                            <p>It’s the show that gives maximum lift… but for 12 weeks only.</p>
                            <h2 className="book-title">Don't miss out</h2>
                             <a
                                href="https://londoncoliseum.org/whats-on/hairspray/"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--book-now">
                                Book Now
                            </a>
                        </Col>
                        <Col xs={12} xl={4}>
                         <img src={rightimg} alt="" title="" className="img-fluid d-none d-lg-block mx-auto"/>

                        </Col>
                   </Row>
                </Container>

                <div className="container--pink-shape">
                    <img src={threeWaysXs} alt="" title="" className="img-fluid d-block d-lg-none mx-auto"/>
                    <img src={threeWays} alt="" title="" className="img-fluid d-none d-lg-block mx-auto"/>
                    <Row className="text-center mt-4 d-none d-xl-flex text-center">
                        <Col xs={12} xl={4}>
                            <h2 className="book-title text-uppercase">Online</h2>
                        </Col>
                        <Col xs={12} xl={4}>
                            <h2 className="book-title text-uppercase">Call</h2>
                        </Col>
                        <Col xs={12} xl={4}>
                            <h2 className="book-title text-uppercase">In person</h2>
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
                            <p className="text--faded-pink">A £2.25 booking fee applies to online & phone bookings</p>
                        </Col>
                        <Col xs={12} xl={4}>
                            <p>London&nbsp;Coliseum, St&nbsp;Martin's&nbsp;Ln, Charing&nbsp;Cross, London WC2N&nbsp;4ES</p>
                        </Col>
                    </Row>
                    <Row className="d-xl-none text-center mx-auto mt-4">
                        <Col xs={12}>
                            <h2 className="book-title text-uppercase">Online</h2>
                            <a
                                href="https://londoncoliseum.org/whats-on/hairspray/"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--book-now">
                                Box office
                            </a>

                            <p>&nbsp;</p>
                            <h2 className="book-title text-uppercase">Call</h2>
                            <a
                                href="tel:+442078459300"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--call">
                                020 7845 9300
                            </a>
                            <p className="text--faded-pink">A £2.25 booking fee applies to online & phone bookings</p>
                            <p>&nbsp;</p>
                            <h2 className="book-title text-uppercase">In person</h2>
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