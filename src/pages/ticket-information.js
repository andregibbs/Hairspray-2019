import React from 'react'
import Layout from 'components/Layout'
import { Container, Row, Col } from 'reactstrap'
import Footer from 'components/Footer'
import clock730 from 'images/icons/clock-730.svg'
import clock300 from 'images/icons/clock-300.svg'
import clock400 from 'images/icons/clock-400.svg'

const headData = {
    title: 'Ticket info - Hairspray The Musical - London Coliseum',
    description: 'Arriving at the London Coliseum from next April for a strictly limited 18-week season. Don’t miss out – book now!',
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
                        <p className="text-center text-uppercase"><strong>LIMITED SEASON FROM 23 APRIL UNTIL 29 August 2020</strong></p>
                    </Container>
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
                                href="https://www.encoretickets.co.uk/london-theatre/musicals/hairspray?utm_source=website&utm_medium=link&utm_campaign=hairspray"
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
                                href="https://www.encoretickets.co.uk/london-theatre/musicals/hairspray?utm_source=website&utm_medium=link&utm_campaign=hairspray"
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
                <Container fluid={true} className="py-4 py-lg-5">
                    <Container>
                        <h3>Performance schedule</h3>
                        <div className="flex clock pt-4 pt-lg-5">
                            <div className="clock__item">
                                <div>
                                    <img src={clock730} className="clock__img" alt="7:30PM" title="7:30PM" />
                                </div>
                                <div className="clock__copy">
                                    <p className="clock__time">7.30PM</p>
                                    <p className="clock__days">Tuesday - Saturday</p>
                                </div>
                            </div>
                            <div className="clock__item">
                                <div>
                                    <img src={clock300} className="clock__img" alt="3:00PM" title="3:00PM" />
                                </div>
                                <div className="clock__copy">
                                    <p className="clock__time">3.00PM</p>
                                    <p className="clock__days">Thursday & Saturday</p>
                                </div>
                            </div>
                            <div className="clock__item">
                                <div>
                                    <img src={clock400} className="clock__img" alt="4:00PM" title="4:00PM" />
                                </div>
                                <div className="clock__copy">
                                    <p className="clock__time">4.00PM</p>
                                    <p className="clock__days">Sunday</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center mb-0">
                            Visit <a href="https://www.encoretickets.co.uk/london-theatre/musicals/hairspray?utm_source=website&utm_medium=link&utm_campaign=hairspray" className="link--pink" target="_blank" rel="noreferrer noopener">London Coliseum</a> for full performance schedule
                        </p>
                    </Container>
                </Container>
                <div className="container--lighter-blue text-center">
                    <h2 className="heading--xl text--white text-center">Group rates</h2>
                    {/* <h3 className="text--white my-2">ACCELERATOR RATES AVAILABLE – SAVE UP TO £42.50 PER TICKET*</h3>
                    <p>for 21 July - 29 August 2020 performances: <strong>book and pay by 20 December 2019</strong></p>
                    <div className="flex group pt-2 pt-lg-4">
                        <div className="group__item mb-lg-5">
                            <h4 className="heading--md text-uppercase text--purple">Groups 10+</h4>
                            <p className="group__copy">Band A just <strong>£55</strong></p>
                            <p className="group__copy">Band B just <strong>£45</strong></p>
                        </div>
                        <div className="group__item mt-4 mt-md-5 mt-lg-0 mb-lg-5">
                            <h4 className="heading--md text-uppercase text--purple">Groups 20+</h4>
                            <p className="group__copy">Band A just <strong>£50</strong></p>
                            <p className="group__copy">Band B just <strong>£40</strong></p>
                        </div>
                        <div className="group__item mt-4 mt-md-5 mt-lg-0 mb-lg-5">
                            <h4 className="heading--md text-uppercase text--purple">Groups 50+</h4>
                            <p className="group__copy">Band A just <strong>£45</strong></p>
                            <p className="group__copy">Band B just <strong>£35</strong></p>
                        </div>
                    </div> */}
                    <h3 className="text--white my-2">SAVE UP TO £32.50 PER TICKET*</h3>
                    <div className="flex group pt-2 pt-lg-4">
                        <div className="group__item mb-lg-5">
                            <h4 className="heading--md text-uppercase text--purple">Groups 10+</h4>
                            <p className="group__copy">Band A just <strong>£60</strong></p>
                            <p className="group__copy">Band B just <strong>£50</strong></p>
                        </div>
                        <div className="group__item mt-4 mt-md-5 mt-lg-0 mb-lg-5">
                            <h4 className="heading--md text-uppercase text--purple">Groups 20+</h4>
                            <p className="group__copy">Band A just <strong>£55</strong></p>
                            <p className="group__copy">Band B just <strong>£45</strong></p>
                        </div>
                    </div>
                    <div className="flex group__buttons">
                        <div className="call-email font-weight-bold text-uppercase">Call</div>
                        <div className="call-email font-weight-bold text-uppercase">Email</div>
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
                    <p className="text--faded-blue">*Valid Tuesday to Thursday - exclusions apply. Band A usually £87.50 and Band B usually £55</p>
                </div>

                <div className="container--light-blue text-center">
                    <h2 className="heading--md text--white text-center">Education rate</h2>
                    <div className="flex group pt-2 pt-lg-4">
                        <div className="group__item mt-4 mt-md-5 mt-lg-0 mb-lg-3">
                            <h4 className="heading--md text-uppercase text--purple">Groups 10+ £25</h4>
                            <p>Plus one teacher goes free for every ten tickets booked</p>
                        </div>
                    </div>
                    <div className="flex group__buttons">
                        <div className="call-email font-weight-bold text-uppercase">Call</div>
                        <div className="call-email font-weight-bold text-uppercase">Email</div>
                    </div>
                    <div className="flex group__buttons pt-0 pb-lg-5">
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
                    <p className="text--faded-blue">Valid Monday to Thursdays in the upper circle – exclusions apply.</p>

                    <Row>
                        <Col lg={5} className="py-5 w-100 mx-auto">
                            <h4 className="text--bolder text-uppercase text--purple">SECONDARY EDUCATION PACK (KS3/KS4)</h4>
                            {/* <img src={poster} alt="camera" className="img-fluid p-3 pb-lg-5" /> */}
                            <div className="pb-4 pb-lg-0">
                                <a
                                    href="../docs/HAIRSPRAY_Secondary_Education_Lesson_Plans.zip"
                                    rel="noreferrer noopener" target="_blank"
                                    className="btn btn--download mt-3 mt-xl-4 d-block mx-auto">
                                    Download
                                        </a>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="container--lighter-blue text-center">
                    <h2 className="heading--md text--white text-center">Access</h2>
                    <div className="flex group__buttons">
                        <div className="call-email font-weight-bold text-uppercase">Call</div>
                        <div className="call-email font-weight-bold text-uppercase">Email</div>
                    </div>
                    <div className="flex group__buttons pt-0 pb-lg-5">
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
                <Footer />
            </div>
        </section>
    </Layout>
)
export default TicketInfoPage