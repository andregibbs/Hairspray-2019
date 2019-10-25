import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col} from 'reactstrap'
import {Link, StaticQuery, graphql} from 'gatsby'
import Footer from 'components/Footer'
import Cast from 'components/CustomCollapse/Casts'

const headData = {
    title: 'Cast Team - Hairspray The Musical - London Coliseum',
    description: 'Arriving at the London Coliseum from next April for a strictly limited 12-week season. Don’t miss out – book now!',
}

const CastPage = ({data}) => (
    <Layout
        headData={headData}
        displayLogo={true}
    >
        <section className="page CreativePage">
            <div className="CreativePage__content">
                <Container fluid={true} className="py-2 pt-lg-5">
                    <Container>
                        <h1>Cast</h1>
                    </Container>
                </Container>


 
                <Row className="justify-content-center mx-auto">
                    <Cast data={data.allCastJson.edges} type="cast"/>
                </Row>

                <Row className="justify-content-center mx-auto">
                    <Cast data={data.allCastTwoJson.edges} type="cast"/>
                </Row>

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
);

export default props => (
    <StaticQuery
        query={graphql`
            query {
            allCastJson {
                edges {
                    node {
                        id
                        name
                        role
                        image {
                            childImageSharp {
                                fluid(maxWidth: 283) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        bio
                        background
                    }
                }
            }
            allCastTwoJson {
                edges {
                    node {
                        id
                        name
                        role
                        image {
                            childImageSharp {
                                fluid(maxWidth: 283) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        bio
                        background
                    }
                }
            }
        }`}
        render={data => <CastPage data={data} {...props} />}
    />
)