import React, { FunctionComponent, useState } from 'react';
import { useSubmitContactFormMutation } from '../src/graphql';

const Contact: FunctionComponent = () => {
    const [submitContactForm] = useSubmitContactFormMutation();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const valid = true;

    const submit = () => {
        submitContactForm({
            variables: {
                email,
                message
            }
        });
        setEmail('');
        setMessage('');
        alert("Message sent successfully, we'll be in touch.");
    };

    return (
        <div>
            <section className="hero is-bold">
                <div className="hero-body">
                    <div className="container content">
                        <h1 className="title">Contact</h1>
                        <hr />
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <div className="control">
                                <textarea
                                    className="textarea"
                                    placeholder="Your message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className="buttons">
                            <button
                                className="button is-primary"
                                disabled={!valid}
                                onClick={submit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
