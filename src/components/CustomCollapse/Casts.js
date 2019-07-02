import React, {Component} from 'react'
import {Container} from 'reactstrap'
import plusIcon from 'images/icons/plus.png'

class Casts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeId: "",
            contentHeight: 0
        }
    }

    clickHandler = (e, id, type) => {
        if (this.state.activeId === id) {
            this.setState({
                activeId: "",
                contentHeight: 0
            });
        } else {
            const trigger = e.currentTarget;
            const content = trigger.nextSibling;
            const inner = content.children[0];
            const height = inner.offsetHeight;
            this.setState({
                activeId: id,
                contentHeight: height
            });

            const collapseItem = document.getElementById(`collapse${id}${type}`)

            setTimeout(() => {
                window.scrollTo({
                    top: collapseItem.offsetTop + 200,
                    behavior: "smooth"
                })
            }, 300)
        }
    };

    render() {

        const items = this.props.data;

        const collapseItems = items.map((item, i) => {
            return <CustomCollapseItem
                key={i}
                id={i}
                data={item.node}
                clickHandler={this.clickHandler}
                type={this.props.type}
                activeId={this.state.activeId}
                contentHeight={this.state.activeId === i ? this.state.contentHeight : 0}
                activeClass={this.state.activeId === i ? 'active' : ''}
            />
        });

        return (
            <Container fluid className="c-collapse">
                {collapseItems}
            </Container>
        )
    }
}

export default Casts

class CustomCollapseItem extends Component {
    render() {
        return (
            <div
                className={`casts c-collapse__item ${this.props.activeClass}`}
                style={{marginBottom: this.props.contentHeight + "px"}}>
                <div
                    className="c-collapse__item-trigger"
                    onClick={(e) => this.props.clickHandler(e, this.props.id, this.props.type)}>
                    <div className="casts-wrapper">
                        <div className="casts-img-wrapper">
                            <img src={this.props.data.image.childImageSharp.fluid.src} alt={this.props.data.name}
                                 className="cast-img c-collapse__item-trigger-img"/>
                        </div>
                        <div className="casts-copy-wrapper">
                            <div>
                                <p className="bigger font-weight-bold mt-2 mb-2 ">{this.props.data.name}</p>
                                <p className="bigger mb-0 ">{this.props.data.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="c-collapse__item-content"
                    style={{height: this.props.contentHeight + "px"}}
                    id={`collapse${this.props.id}${this.props.type}`}
                >
                    <div className="c-collapse__item-content-inner">
                        {this.props.data.name !== '' &&
                        <p className="bigger font-weight-bold mt-2 mb-2 text-uppercase">{this.props.data.name}</p>
                        }
                        <p className="bigger mb-0 ">{this.props.data.role}</p>
                        {this.props.data.bio !== '' &&
                        <div className="casts-bio-wrapper" dangerouslySetInnerHTML={{__html: this.props.data.bio}}/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
