import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col, Modal, ModalHeader, ModalBody} from 'reactstrap'
import threeWaysXs from 'images/3-ways-xs.svg'
import threeWays from 'images/3-ways.svg'

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
                <Container fluid={true}>
                    <Container>
                        <h1>Ticket information</h1>
                        <h3>12 weeks only | 23 April – 19 July</h3>
                    </Container>
                </Container>
                <div className="container-pink-shape">
                    <img src={threeWaysXs} alt="" title="" className="img-fluid d-block d-sm-none mx-auto"/>
                    <img src={threeWays} alt="" title="" className="img-fluid d-none d-sm-block mx-auto"/>
                    <Row className="text-center mt-4">
                        <Col xs={12} xl={6}>
                            <p className="book-title text-uppercase">Online</p>
                        </Col>
                        <Col xs={12} xl={3}>
                            <p className="book-title text-uppercase">Call</p>
                        </Col>
                        <Col xs={12} xl={3}>
                            <p className="book-title text-uppercase">In person</p>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col xs={12} xl={3}>
                            <a
                                href="https://www.ticketmaster.co.uk/hairspray-tickets/artist/820944"
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
                                href="https://www.ticketmaster.co.uk/hairspray-tickets/artist/820944"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--call">
                                020 7845 9300
                            </a>
                        </Col>
                        <Col xs={12} xl={3}>
                            <a
                                href="https://www.ticketmaster.co.uk/hairspray-tickets/artist/820944"
                                target="_blank" rel="noreferrer noopener"
                                className="btn btn--person">
                                Get directions
                            </a>
                        </Col>
                    </Row>
                    <Row className="text-center mt-xl-4">
                        <Col xs={12} xl={3}>
                            <p className="text--faded">£2.25 booking fee applies</p>
                        </Col>
                        <Col xs={12} xl={3}>
                            <p>Best for mobile bookings</p>
                            <p className="text--faded">Fees apply</p>
                        </Col>
                        <Col xs={12} xl={3}>
                            <p className="text--faded">£2.25 booking fee applies</p>
                        </Col>
                        <Col xs={12} xl={3}>
                            <p>London&nbsp;Coliseum, St&nbsp;Martin's&nbsp;Ln, Charing&nbsp;Cross, London WC2N&nbsp;4ES</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    </Layout>
)
export default TicketInfoPage