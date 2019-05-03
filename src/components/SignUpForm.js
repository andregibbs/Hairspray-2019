import React, {Component} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import {FormGroup, Input, ModalBody} from 'reactstrap'
import {Link, navigate} from 'gatsby'
import thankYou from 'images/thank-you.svg'
import thankYouXs from 'images/thank-you-xs.svg'
import signUpTitle from 'images/sign-up-title.svg'
import signUpTitleXs from 'images/sign-up-title-xs.svg'

const url = "https://dewynters.us1.list-manage.com/subscribe/post?u=2f36c1eba84f0edbfa535ad91&id=93985861d5";

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            postcode: '',
            status: ''
        };
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        // Update value in state
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        return {
            EMAIL: this.state.emailAddress,
        };
    };

    formatMessage = (message) => {
        if (message.includes("0 - Please enter a value")) {
            return "Please enter your email address."
        }

        if (message.includes("An email address must contain")) {
            return "Please enter a valid email address."
        }

        if (message.includes("The domain portion of the email address is invalid")) {
            return "Please enter a valid email address."
        }

        if (message.includes("This email cannot be added to this list")) {
            return "This email address is already registered. Please enter a different email address."
        }

        return message
    };

    render() {
        const SubmitButton = ({onValidated, submitBtnCopy}) => {
            const submit = () => {
                onValidated({
                    EMAIL: this.state.emailAddress,
                });
            };
            return (
                <Input
                    className={`btn ${this.props.className}__submit`}
                    type="submit"
                    value={submitBtnCopy}
                    onClick={submit}
                />
            )
        };

        const submitBtnCopy = this.props.submitBtnCopy ? this.props.submitBtnCopy : '';

        const color = "black";

        return (
            <MailchimpSubscribe
                url={this.props.url ? this.props.url : url}
                render={({subscribe, status, message}) => (
                    <>
                        {status === "success" ? (
                            this.props.thankYouPage
                                ?
                                navigate(this.props.location + '/thank-you/')
                                :
                                <>
                                    <img src={thankYouXs}
                                         alt="Thank you for signing up! Share the news with your friends"
                                         title="Thank you for signing up! Share the news with your friends"
                                         className="signUpTitle img-fluid mx-auto d-block d-md-none"/>
                                    <img src={thankYou}
                                         alt="Thank you for signing up! Share the news with your friends"
                                         title="Thank you for signing up! Share the news with your friends"
                                         className="signUpTitle img-fluid mx-auto d-none d-md-block"/>
                                </>
                        )
                            :
                            <>
                                <img src={signUpTitleXs}
                                     alt="Sign up for all the news on Hairspray’s return to London"
                                     title="Sign up for all the news on Hairspray’s return to London"
                                     className="signUpTitle img-fluid mx-auto d-block d-md-none"/>
                                <img src={signUpTitle}
                                     alt="Sign up for all the news on Hairspray’s return to London"
                                     title="Sign up for all the news on Hairspray’s return to London"
                                     className="signUpTitle img-fluid mx-auto d-none d-md-block"/>
                                <div className="position-relative mx-auto">
                                    <Input
                                        type="email"
                                        name="emailAddress"
                                        id="emailAddress"
                                        className={`${this.props.className}__input`}
                                        placeholder="Email*"
                                        value={this.state.emailAddress}
                                        onChange={e => {
                                            this.handleChange(e)
                                        }}
                                    />
                                    <div className="d-none d-md-block">
                                        <SubmitButton
                                            onValidated={formData => subscribe(formData)}
                                            submitBtnCopy={submitBtnCopy}
                                        />
                                    </div>
                                </div>
                                <div className="mx-auto text-center pb-md-5">
                                    {status === "sending" && <div style={{color: color}}>sending...</div>}
                                    {status === "error" && (
                                        <p
                                            className="text--small"
                                            style={{color: "#a70010", fontWeight: "bold"}}
                                            dangerouslySetInnerHTML={{__html: this.formatMessage(message)}}
                                        />
                                    )}
                                    {status === "success" && (
                                        this.props.thankYouPage
                                            ?
                                            navigate(this.props.location + '/thank-you/')
                                            :
                                            <p
                                                className="text--small"
                                                style={{color: "green"}}
                                                dangerouslySetInnerHTML={{__html: message}}
                                            />
                                    )
                                    }
                                </div>
                                <div className="mx-auto d-block d-md-none">
                                    <SubmitButton
                                        onValidated={formData => subscribe(formData)}
                                        submitBtnCopy={submitBtnCopy}
                                    />
                                </div>
                            </>
                        }
                    </>
                )}
            />
        );
    }
}

export default SignUpForm;