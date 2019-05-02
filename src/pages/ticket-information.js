import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col} from 'reactstrap'
import Footer from 'components/Footer'
import threeWaysXs from 'images/3-ways-xs.svg'
import threeWays from 'images/3-ways.svg'
import clock730 from 'images/icons/clock-730.svg'
import clock300 from 'images/icons/clock-300.svg'
import clock400 from 'images/icons/clock-400.svg'
import groupRates from 'images/group-rates.svg'
import access from 'images/access.svg'
import groups10 from 'images/groups-10.svg'
import groups20 from 'images/groups-20.svg'
import groups50 from 'images/groups-50.svg'

const headData = {
    title: 'Ticket info - Hairspray: The Award-winning Musical | Official London Site',
    description: 'Arriving at the London Coliseum from next April for a strictly limited 12-week season. Don’t miss out – book now!',
}

const TicketInfoPage = () => (
    <Layout
        headData={headData}
        displayLogo={true}
    >
        <section className="page TicketInfoPage">
            <div className="TicketInfoPage__content">
                <Container fluid={true} className="py-2 py-lg-5">
                    <Container>
                        <h1>Ticket information</h1>
                        <h3>12 weeks only | 23 April – 19 July</h3>
                    </Container>
                </Container>
                <div className="container--pink-shape">
                    <img src={threeWaysXs} alt="" title="" className="img-fluid d-block d-lg-none mx-auto"/>
                    <img src={threeWays} alt="" title="" className="img-fluid d-none d-lg-block mx-auto"/>
                    <Row className="text-center mt-4 d-none d-xl-flex">
                        <Col xs={12} xl={6}>
                            <h2 className="book-title text-uppercase">Online</h2>
                        </Col>
                        <Col xs={12} xl={3}>
                            <h2 className="book-title text-uppercase">Call</h2>
                        </Col>
                        <Col xs={12} xl={3}>
                            <h2 className="book-title text-uppercase">In person</h2>
                        </Col>
                    </Row>
                    <Row className="text-center d-none d-xl-flex">
                        <Col xs={12} xl={3}>
                            <a
                                href="https://londoncoliseum.org/whats-on/hairspray/"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--book-now">
                                Box office
                            </a>
                        </Col>
                        <Col xs={12} xl={3}>
                            <a
                                href="https://www.ticketmaster.co.uk/hairspray-tickets/artist/820944"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--ticketmaster">
                                Ticketmaster
                            </a>
                        </Col>
                        <Col xs={12} xl={3}>
                            <a
                                href="tel:+442078459300"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--call">
                                020 7845 9300
                            </a>
                        </Col>
                        <Col xs={12} xl={3}>
                            <a
                                href="https://goo.gl/maps/cjgp5krePeyiRWvM6"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--person">
                                Get directions
                            </a>
                        </Col>
                    </Row>
                    <Row className="text-center mt-xl-4 d-none d-xl-flex">
                        <Col xs={12} xl={3}>
                            <p className="text--faded-pink">£2.25 booking fee applies</p>
                        </Col>
                        <Col xs={12} xl={3}>
                            <p>Best for mobile bookings</p>
                            <p className="text--faded-pink">Fees apply</p>
                        </Col>
                        <Col xs={12} xl={3}>
                            <p className="text--faded-pink">£2.25 booking fee applies</p>
                        </Col>
                        <Col xs={12} xl={3}>
                            <p>London&nbsp;Coliseum, St&nbsp;Martin's&nbsp;Ln, Charing&nbsp;Cross, London WC2N&nbsp;4ES</p>
                        </Col>
                    </Row>
                    <Row className="d-xl-none text-center mx-auto mt-4">
                        <Col xs={12} md={6} className="mb-4 mb-lg-0">
                            <h2 className="book-title text-uppercase">Online</h2>
                            <a
                                href="https://www.ticketmaster.co.uk/hairspray-tickets/artist/820944"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--book-now">
                                Box office
                            </a>
                            <p className="text--faded-pink">£2.25 booking fee applies</p>
                            <p>&nbsp;</p>
                            <p className="d-none d-md-block">&nbsp;</p>
                            <a
                                href="tel:+442078459300"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--call">
                                020 7845 9300
                            </a>
                            <p>Best for mobile bookings</p>
                            <p className="text--faded-pink">Fees apply</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <h2 className="book-title text-uppercase">Call</h2>
                            <a
                                href="tel:+442078459300"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--call">
                                020 7845 9300
                            </a>
                            <p className="text--faded-pink">£2.25 booking fee applies</p>
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
                <Container fluid={true} className="py-4 py-lg-5">
                    <Container>
                        <h2>Performance schedule</h2>
                        <div className="flex clock pt-4 pt-lg-5">
                            <div className="clock__item">
                                <div>
                                    <img src={clock730} className="clock__img" alt="7:30PM" title="7:30PM"/>
                                </div>
                                <div>
                                    <p className="clock__time">7.30PM</p>
                                    <p className="clock__days">Tuesday - Saturday</p>
                                </div>
                            </div>
                            <div className="clock__item">
                                <div>
                                    <img src={clock300} className="clock__img" alt="3:00PM" title="3:00PM"/>
                                </div>
                                <div>
                                    <p className="clock__time">3.00PM</p>
                                    <p className="clock__days">Tuesday - Saturday</p>
                                </div>
                            </div>
                            <div className="clock__item">
                                <div>
                                    <img src={clock400} className="clock__img" alt="4:00PM" title="4:00PM"/>
                                </div>
                                <div>
                                    <p className="clock__time">4.00PM</p>
                                    <p className="clock__days">Tuesday - Saturday</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center mb-0">
                            Visit <a href="https://londoncoliseum.org/whats-on/hairspray/" className="link--pink" target="_blank" rel="noreferrer noopener">London Coliseum</a> for full performance schedule
                        </p>
                    </Container>
                </Container>
                <div className="container--lighter-blue text-center">
                    <img src={groupRates} alt="Group rates" title="Group rates" className="group-rates img-fluid" />
                    <h2 className="text--white my-4">Book by 23 October 2019 and save!</h2>
                    <div className="flex group pt-2 pt-lg-5">
                        <div className="group__item mb-lg-5">
                            <img src={groups10} alt="Groups 10+" title="Groups 10+" className="group__img img-fluid" />
                            <p className="group__copy">Brand A just <strong>£55</strong></p>
                            <p className="group__copy">Brand B just <strong>£45</strong></p>
                        </div>
                        <div className="group__item mt-4 mt-md-5 mt-lg-0 mb-lg-5">
                            <img src={groups20} alt="Groups 20+" title="Groups 20+" className="group__img img-fluid" />
                            <p className="group__copy">Brand A just <strong>£50</strong></p>
                            <p className="group__copy">Brand B just <strong>£40</strong></p>
                        </div>
                        <div className="group__item mt-4 mt-md-5 mt-lg-0 mb-lg-5">
                            <img src={groups50} alt="Groups 50+" title="Groups 50+" className="group__img img-fluid" />
                            <p className="group__copy">Brand A just <strong>£45</strong></p>
                            <p className="group__copy">Brand B just <strong>£35</strong></p>
                        </div>
                    </div>
                    <div className="flex group__buttons pt-4 pt-lg-0 pb-4 pb-lg-5">
                        <a
                            href="tel:+442078459300"
                            target="_blank" rel="noreferrer noopener"
                            className="btn btn--call">
                            020 7845 9300
                        </a>
                        <a
                            href="mailto:groups@eno.org"
                            className="btn btn--mail">
                            groups@eno.org
                        </a>
                    </div>
                    <p className="text--faded-blue">Valid Tuesday to Thursday - exclusions apply. Band A usually £87.50 and Band B usually £55</p>
                </div>
                <div className="container--light-blue text-center">
                    <img src={access} alt="Access" title="Access" className="access img-fluid" />
                    <div className="flex group__buttons pt-4 py-lg-5">
                        <a
                            href="tel:+442078459300"
                            target="_blank" rel="noreferrer noopener"
                            className="btn btn--call">
                            020 7845 9300
                        </a>
                        <a
                            href="mailto:access@eno.org"
                            className="btn btn--mail">
                            access@eno.org
                        </a>
                    </div>
                </div>
                <Footer/>
            </div>
        </section>
    </Layout>
)
export default TicketInfoPage