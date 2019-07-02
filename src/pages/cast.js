import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col} from 'reactstrap'
import {Link} from 'gatsby'
import Footer from 'components/Footer'
import micheal from 'images/micheal.png'

const headData = {
    title: 'Cast - Hairspray The Musical - London Coliseum',
    description: 'Arriving at the London Coliseum from next April for a strictly limited 12-week season. Don’t miss out – book now!',
}

const CastPage = () => (
    <Layout
        headData={headData}
        displayLogo={true}
    >
        <section className="page CastPage">
            <div className="CastPage__content">
                <Container fluid={true} className="py-2 pt-lg-5">
                    <Container>
                        <h1>Cast</h1>
                    </Container>
                </Container>

                <img src={micheal} alt="" title="" className="img-fluid d-block mx-auto top-logo"/>
                 <div className="container--blue-shape text-center">
                    <p className="text--bold">MICHAEL BALL is Britain's leading musical theatre star, a double Olivier Award winner, multi-platinum recording artist and a hugely popular radio<br className="d-none d-xxl-block"/> and TV presenter. For 30 years Michael has been at the top of his game starring in musical theatre productions in the West End and on Broadway,<br className="d-none d-xxl-block"/> winning critical acclaim, a devoted following and awards for his stage work and recording career.</p>
                    <p>Let’s not be coy: Michael Ball has been, yes, having a ball. And even by his own prolific standards, the star of stage, screen, radio and record has<br className="d-none d-xxl-block"/> outdone himself in the last couple of years.</p>
                    <p>For one thing, there’s his ongoing love affair with, and mastery of, the musical. Last year he was on stage in London for the revival of Chess. Later this<br className="d-none d-xxl-block"/> year he’ll be reuniting with old friend Cameron Mackintosh in a special new West End staging of Les Misérables and in 2020 he will don the frock and <br className="d-none d-xxl-block"/>wig again to recreate the infamous Edna Turnblad in Hairspray at London’s Coliseum.</p>
                    <p>For another, there were those back-to-back triumphs with Alfie Boe: a pair of Number One albums in 2016 and 2017, Together and Together Again. The <br className="d-none d-xxl-block"/>million-sellers were end-of-year chart champs, shifting old-fashioned numbers of physical sales, winning a pair of Classical Brits and leading to TV<br className="d-none d-xxl-block"/> specials and international arena tours.</p>
                    <p>“Unbelievable!” is how the singer/actor/radio DJ describes their successes. “It really was kind of a dream. It’s especially nice because it wasn’t planned<br className="d-none d-xxl-block"/> in any way. It was an idea that grew organically, that people invested in and got behind – and it just worked, and we had so much fun doing it. <br className="d-none d-xxl-block"/>“To put the first tour on sale and watch that grow and sell out. And to find ourselves at Number One at Christmas,” he marvels. “And then to repeat the <br className="d-none d-xxl-block"/>success with a second one, especially at a time when as we all know, the music industry is in some crisis.”</p>
                    <p>The joy of the partnership was there for all to see, not least in the natural “bantz” between the pair. <br className="d-none d-xxl-block"/>“We loved it and the banter is what it is, that’s us. We’re horrible to each other as only mates can be…” <br className="d-none d-xxl-block"/>Is there more where that came from? Well, rumours of a third collaborative album, could not be confirmed at time of writing…</p>
                    <p>…and in any case, it would have to wait, as Ball recently released Coming Home To You, his first solo album in four years and his first Number 1 album in<br className="d-none d-xxl-block"/> 27 years!. Not only that, the album – his 21st – features, for the first time, a clutch of self-penned originals alongside a choice collection of covers. Rich, <br className="d-none d-xxl-block"/>warm and beautifully played and sung, it’s a deeply personal, 14-track journey into the heart and musical soul of one our most beloved performers.</p>
                     <p>As Michael heads into the later part of 2019 and early 2020, it looks like it will be just as busy, with a number of solo projects in the pipeline and many<br className="d-none d-xxl-block"/> more exciting things to come!</p>
                </div>
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
                            <p className="text--faded-pink">A £2.25 booking fee applies to online & phone bookings</p>
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
                            <p className="text--faded-pink">A £2.25 booking fee applies to online & phone bookings</p>
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
export default CastPage