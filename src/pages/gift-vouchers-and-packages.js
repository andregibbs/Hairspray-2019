import React from 'react'
import Layout from 'components/Layout'
import { Container, Row, Col } from 'reactstrap'
import Footer from 'components/Footer'
import clock730 from 'images/icons/clock-730.svg'
import clock300 from 'images/icons/clock-300.svg'
import gift from 'images/gift.png'

const headData = {
    title: 'Gift - Hairspray The Musical - London Coliseum',
    description: 'Arriving at the London Coliseum from next April for a strictly limited 12-week season. Don’t miss out – book now!',
}

const TicketInfoPage = () => (
  <Layout headData={headData} displayLogo={true}>
    <section className="page TicketInfoPage">
      <div className="TicketInfoPage__content">
        <Container fluid={true} className="py-2 py-lg-5">
          <Container>
            <h1>Gift Vouchers & Packages</h1>
          </Container>
        </Container>
        <div className="container--pink-shape__angle">
          <div className="content-wrapper p-5">
            <Container>
              <h3 className="book-title text-uppercase text-white mb-4">
                GIVE THE GIFT WITH MAXIMUM LIFT
              </h3>
              <img src={gift} alt="hairspray" className="d-block d-lg-none" />
              <p className="mb-5">
                Our gift vouchers let you treat your friends and family to a
                fabulously uplifting night in the West End at the huge-hearted,
                smash-hit musical Hairspray.
              </p>

              <p className="mb-5">
                Vouchers can be redeemed on their chosen date via the London
                Coliseum, by phone or online.
              </p>
              <Row className="mt-4">
                <Col xs={12} lg={6} xl={7}>
                  <p>
                    2x Band A Tickets for Monday – Thursday performances
                    <br />
                    <strong>Price: £175</strong>
                  </p>
                  <a
                    href="https://tickets.eno.org/en-GB/giftvouchers/two%20tickets%20to%20hairspray%20(monday-thursday%20performances)"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="btn btn--book-now mb-2 mb-lg-5 mt-1 mt-lg-1"
                  >
                    BUY NOW
                  </a>
                  <p className="mt-3">
                    2x Band A Tickets for any performance
                    <br />
                    <strong>Price: £195</strong>
                  </p>
                  <a
                    href="https://tickets.eno.org/en-GB/giftvouchers/two%20tickets%20to%20hairspray%20(any%20performance)"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="btn btn--book-now mb-5 mb-lg-5 mt-lg-1"
                  >
                    BUY NOW
                  </a>
                  <p class="text--small">
                    Voucher valid on two band A priced seats. Not redeemable on
                    premium price bands.
                  </p>
                </Col>
                <Col xs={12} lg={6} xl={5}>
                  <img
                    src={gift}
                    alt="hairspray"
                    className="d-none d-lg-flex"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="container--lighter-blue__angle text-center mt-5">
          <Row>
            <Col xs={12} xl={{ size: 5, offset: 1 }}>
              <h3 className="book-title text-uppercase text-white">
                TICKET AND HOTEL PACKAGES
              </h3>
              <p class="text--normal">
                Looking to book a hotel stay with your theatre visit?
              </p>
            </Col>
            <Col xs={12} xl={5}>
              <a
                href="https://hairspray.entsbreaks.com/"
                rel="noreferrer noopener"
                target="_blank"
                className="btn btn--hotel mt-1 mt-lg-2"
              >
                Book <br className="d-block d-sm-none" />
                packages <br className="d-block d-sm-none" />
                here
              </a>
            </Col>
          </Row>
        </div>

        <Footer />
      </div>
    </section>
  </Layout>
)
export default TicketInfoPage