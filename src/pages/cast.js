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