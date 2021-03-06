import React, { Component } from 'react'
import { Container} from 'reactstrap'
import pointer from 'images/pointer.svg'
import closeIcon from 'images/buttons/close-btn.svg'

class Creatives extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeId: "",
            contentHeight: 0
        }
    }

    clickHandler = (e, id, type, disabled) => {
        if (!disabled) {
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
                        top: collapseItem.offsetTop + -250,
                        behavior: "smooth"
                    })
                }, 300)
            }
        }
    };


    render() {

        const items = this.props.data;

        const collapseItems = items.map((item, i) => {
            console.log(item.node)
            return (
                <>
                    <CustomCollapseItem
                        key={i}
                        id={i}
                        data={item.node}
                        disabled={item.node.bio === "" ? true : false}
                        clickHandler={this.clickHandler}
                        activeId={this.state.activeId}
                        contentHeight={this.state.activeId === i ? this.state.contentHeight : 0}
                        activeClass={this.state.activeId === i ? 'active' : ''}
                    />
                    {item.node.new_line &&
                        <div className="w-100"></div>
                    }
                </>
            )
        });

        return (
            <Container fluid className="c-collapse">
                {collapseItems}
            </Container>
        )
    }
}

export default Creatives

class CustomCollapseItem extends Component {
    render() {
        return (
            <div
                className={`creatives c-collapse__item ${this.props.activeClass} ${this.props.disabled ? "disabled" : ""}`}
                style={{ marginBottom: this.props.contentHeight + "px" }}>
                <div
                    className="c-collapse__item-trigger"
                    onClick={(e) => this.props.clickHandler(e, this.props.id, this.props.type, this.props.disabled)}>
                    <div className="casts-wrapper">

                            <div className="rectangle-creative">
                            </div>

                        <div className={`casts-copy-wrapper ${this.props.data.background}`}>
                            <div>
                                <p className="mb-0 small">{this.props.data.role}</p>
                                <p className="bigger font-weight-bold mt-2 mb-2" dangerouslySetInnerHTML={{ __html: this.props.data.name }} />
                            </div>
                        </div>
                    </div>
                    <img src={pointer} className="pointer" alt=""/>
                </div>
                <div
                    className="c-collapse__item-content"
                    style={{ height: this.props.contentHeight + "px" }}
                    id={`collapse${this.props.id}${this.props.type}`}
                >
                    <div className="c-collapse__item-content-inner">
                        {this.props.data.name !== '' &&
                            <p className="font-weight-bold mt-2 mb-2 text-uppercase c-blue">{this.props.data.name}</p>
                        }
                        <p className="mb-0">{this.props.data.role}</p>
                        {this.props.data.bio !== '' &&
                            <div className="casts-bio-wrapper py-5" dangerouslySetInnerHTML={{ __html: this.props.data.bio }} />
                        }
                        <div className="w-100 text-center mt-n3 mt-md-n5">
                            <img onClick={(e) => this.props.clickHandler(e, this.props.id, this.props.type, this.props.disabled)} class="close-icon " src={closeIcon} alt="close" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
