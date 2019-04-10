import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col} from 'reactstrap'
import Lightbox from 'react-image-lightbox'
import {graphql} from 'gatsby'
import 'react-image-lightbox/style.css'
import Img from 'gatsby-image'
import Slider from "react-slick"
import {fluidImage, fluidImageTablet, fluidImageMobile} from 'components/GatsbyImage/GatsbyImage'
import YoutubeModal from 'components/YoutubeModal/YoutubeModal'

const headData = {
    title: 'BIG The Musical | Official Site',
    description: 'The official website Big The Musical. Based on the smash-hit film BIG opens September 2019 at the Dominion Theatre for 9 weeks only starring Jay McGuiness.',
}

const settings = {
    dots: false,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToScroll: 1,
    draggable: true,
    slidesToShow: 1,
    swipeToSlide: true,
    variableWidth: true,
    touchThreshold: 200,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                focusOnSelect: false,
                centerMode: false,
                arrows: false
            }
        }
    ]
}

class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            modalOpen: false,
            slideIndex: 0,
            maxIndex: 1,
            videoId: 'A_O5CTAPZ3o',
            active: 0,
            imageOrder: [0, 1, 2],
        }
    }

    componentDidMount() {
        this.setState({
            maxIndex: this.props.data.allGalleryJson.edges.length - 1
        })
    }

    toggleModal = (e) => {
        e.preventDefault();

        this.setState({
            modalOpen: !this.state.modalOpen
        });
    };

    changeSliders = (next) => {
        setTimeout(() => {
            this.carousel.slickGoTo(next)
        }, 200)

        this.setState({
            slideIndex: next
        })
    }

    imgClick = (id) => {
        this.setState({
            slideIndex: id
        })
        this.changeSliders(id)
    }

    leftClick = () => {
        this.imgClick(this.state.slideIndex === 0 ? this.state.maxIndex : (this.state.slideIndex - 1))
    }

    rightClick = () => {
        this.imgClick(this.state.slideIndex === this.state.maxIndex ? 0 : (this.state.slideIndex + 1))
    }

    arrayMove = (arr, index) => {

        // Store element
        const clickedValue = arr[index];

        // Remove element
        arr.splice(index,1);

        // Insert element to front
        arr.unshift(clickedValue);

        this.setState({
            imageOrder: arr
        })
    };

    changeActiveElement = (index) => {
        if (this.state.active === index) {
            return true
        }
        // Change order of images
        this.arrayMove(this.state.imageOrder, index)

        this.setState({
            active: index
        })
    }

    render() {
        const {isOpen, photoIndex, modalOpen, videoId, active} = this.state

        const items = this.props.data.allGalleryJson.edges

        let images = []

        const galleryItems = items.map((item, i) => {
            images.push(item.node.image.childImageSharp.fluid.src)
            return (
                <div
                    tabIndex={i} role="button" aria-pressed="false"
                    className={`photo-wrapper`}
                    data-name={`${item.node.name}`}
                    onClick={() => this.setState({photoIndex: i, isOpen: true})}
                    onKeyDown={() => this.setState({photoIndex: i, isOpen: true})}
                    key={i}
                >
                    <Img
                        fixed={item.node.thumb.childImageSharp.fixed}
                        alt=""
                        className="photo-wrapper__img d-none d-sm-block"
                    />
                    <Img
                        fixed={item.node.thumbMobile.childImageSharp.fixed}
                        alt=""
                        className="photo-wrapper__img d-block d-sm-none"
                    />
                    <div className="photo-wrapper__bg"/>
                </div>
            )
        })

        return (
            <Layout
                headData={headData}
                headerImage={this.props.data.headerImage.childImageSharp.fluid}
                headerImageTablet={this.props.data.headerImageTablet.childImageSharp.fluid}
                headerImageMobile={this.props.data.headerImageMobile.childImageSharp.fluid}
            >
                <section className="page HomePage">
                    <div className="HomePage__content">
                        <div className="pb-4">
                            <section className="headerSlider">
                                <div className="headerSlider__wrapper">
                                    <div onClick={() => this.changeActiveElement(0)}
                                         className={`headerSlider__item headerSlider__item-0 ${active === 0 ? 'active' : 'inactive'}`}>
                                        <div className="relative">
                                            <div className="headerSlider__item__bottomCopy">
                                                <h2 className="text--huge">Matthew Golding & Liudmila Konovalova</h2>
                                                <h3 className="text--big">Sleeping Beauty Moscow 2015</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => this.changeActiveElement(1)}
                                         className={`headerSlider__item headerSlider__item-1 ${active === 1 ? 'active' : 'inactive'} ${active === 2 ? 'last-of-type' : ''}`}>
                                        <div className="relative">
                                            <div className="headerSlider__item__topCopy">2</div>
                                        </div>
                                    </div>
                                    <div onClick={() => this.changeActiveElement(2)}
                                         className={`headerSlider__item trevor headerSlider__item-2 ${active === 2 ? 'active' : 'inactive'}`}>
                                        <div className="relative">
                                            <div className="headerSlider__item__topCopy">3</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="headerSlider__topCopy">
                                    Sue Hyman<br/>
                                    Associates</div>
                            </section>
                        </div>

                        <Container fluid={true} className="py-4">
                            <Container>
                                <p><span className="text--big">Sue Hyman Associates</span> has been one of the most established & highly respected publicity companies in the West End in theatre, film, dance, opera throughout the UK.</p>
                            </Container>
                        </Container>

                            {/*<Parallax*/}
                            {/*    className="d-none d-lg-block"*/}
                            {/*    offsetYMax={30}*/}
                            {/*    offsetYMin={-30}*/}
                            {/*    slowerScrollRate*/}
                            {/*    disabled={this.state.parallaxDisabled}*/}
                            {/*>*/}
                            {/*    <Img fluid={this.props.data.parallaxImg.childImageSharp.fluid}*/}
                            {/*         className="d-none d-sm-block"/>*/}
                            {/*</Parallax>*/}
                            {/*<Img fluid={this.props.data.parallaxImg.childImageSharp.fluid}*/}
                            {/*     className="d-block d-sm-none"/>*/}
                            {/*<p>Sue began her career at the Royal Court, working for directors William Gaskill, Anthony Page and Lindsay Anderson before joining film publicist Theo Cowan and later launching her own company.<br/>*/}
                            {/*    She worked for Theo Cowan film publicist for 10 years. Since Theo Cowan died she has been a key source of information for many of his clients including David Niven (re issued paperback autobiographies 2016), Dirk Bogarde, Michael Caine, Rod Steiger, Claire Bloom, screen writer Ernest Tidyman – Academy Award winner 'The French Connection' Shaft series, High Plains Drifter etc. Directors Joseph Losey, Joe Strick, Sidney Glazier producer for many of Mel Brooks movies.</p>*/}

                        <Container fluid={true} className="py-4">
                            <Container>
                                <h4 className="text--big">Most recent credits include</h4>
                                <p><strong>Unit Publicity</strong> <span className="text--italic">'A Street Cat Named Bob'</span> Joanne Froggatt, Luke Treadaway, Ruta Gedmintas. Producer Adam Rolston Shooting Films Ltd.</p>
                                <p><strong>Dublin Oldschool</strong> by Emmet Kirwan, cast Ian Lloyd Anderson, Emmet Kirwan Projects Arts Dublin, Edinburgh Pleasance 2016, National Theatre 2017 Film première Dublin June 2018.</p>
                                <p><strong>Adam Rolston Shooting Script Films</strong> publicity since 2014.</p>
                                <p><strong>Landmark Productions</strong> Dublin and Edinburgh Fringe Festivals</p>
                                <p><strong>Ian McKellen and Anthony Hopkins</strong> for <span className="text--italic">‘The Dresser’</span> location filming Hackney Empire screenwriter</p>
                                <p><strong>Ronald Harwood</strong> (long term publicity) transmission 2015 plus US 2016.</p>
                                <p><strong>David Suchet</strong> personal publicity plus international tour.</p>
                                <p><strong>Lenny Henry</strong> diversity campaign, extensive TV and media coverage <span className="text--italic">'Rudy's Rare Records'</span> 2014.</p>
                                <p><strong>Vanessa Redgrave</strong> ongoing, and 3 generations of Redgrave family including <strong>Lynn Redgrave, Corin Redgrave, Joely Richardson and Carlo Nero</strong> film producer.</p>
                                <p><strong>Robert Sheehan</strong> for <span className="text--italic">'Jet Trash'</span> Edinburgh Film Festival 2016 Dan M Brown writer.</p>
                                <p><strong>Hackney Empire</strong> publicity from 2011.</p>
                                <p><strong>Publicist</strong> for stage productions with Judi Dench, Maggie Smith, Derek Jacobi, Peter O'Toole, Al Pacino, Mike Leigh, Felicity Kendal and Michael Rudman personal publicity.</p>

                            </Container>
                        </Container>

                        <Container fluid={true} className="py-4">
                            <Container className="no-padding-x-xs">
                                <div className="gallery">
                                    <Slider
                                        {...settings}
                                        ref={slider => (this.carousel = slider)}
                                    >
                                        {galleryItems}
                                    </Slider>
                                    <div className="scroll-btn-wrapper">
                                        <div className="btn btn--red scroll-btn">
                                            <button
                                                className="arrow arrow--left"
                                                type="button"
                                                aria-label="Previous"
                                                aria-pressed="false"
                                                tabIndex={0}
                                                role="button"
                                                onKeyDown={this.leftClick}
                                                onClick={this.leftClick}
                                            >
                                                <span className="sr-only">Previous</span>
                                            </button>
                                            Scroll
                                            <button
                                                className="arrow arrow--right"
                                                type="button"
                                                aria-label="Next"
                                                aria-pressed="false"
                                                tabIndex={1}
                                                role="button"
                                                onKeyDown={this.rightClick}
                                                onClick={this.rightClick}
                                            >
                                                <span className="sr-only">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Container>
                    </div>
                </section>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageCaption={''}
                        onCloseRequest={() => this.setState({isOpen: false})}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
                <YoutubeModal isOpen={modalOpen} toggleModal={this.toggleModal} videoId={videoId}/>
            </Layout>
        );

    }
}

export default IndexPage

export const GalleryPageQuery = graphql`
query {
    allGalleryJson {
        edges {
            node {
                id
                name
                image {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                thumb {
                    childImageSharp {
                        fixed(width: 200) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                thumbMobile {
                    childImageSharp {
                        fixed(width: 136) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
    
    headerImage: file(relativePath: { eq: "bg-header-xl.jpg" }) {
    	...fluidImage
	}
	headerImageTablet: file(relativePath: { eq: "bg-header-md.jpg" }) {
        ...fluidImageTablet
    }
    headerImageMobile: file(relativePath: { eq: "bg-header-sm.jpg" }) {
        ...fluidImageMobile
    }
    parallaxImg: file(relativePath: { eq: "parallax-img.jpg" }) {
        ...fluidImage
    }
}`
