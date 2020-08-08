import React, { FunctionComponent, useState } from 'react';
import * as bulmaToast from 'bulma-toast';
import { useCreateAnnotationMutation } from '../graphql';

interface ISuggestArticleModal {
    open: boolean;
    handleClose: () => void;
}

// https://gist.github.com/jpillora/7885636
const isValidUrl = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;

const SuggestArticleModal: FunctionComponent<ISuggestArticleModal> = ({
    open,
    handleClose
}) => {
    const [createAnnotation] = useCreateAnnotationMutation();
    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');
    const [validUrl, setValidUrl] = useState(false);

    const handleUrlChange = (e) => {
        setValidUrl(isValidUrl.test(e.target.value));
        setUrl(e.target.value);
    };

    const submit = () => {
        createAnnotation({
            variables: {
                document: { title: ['Viral Feedback Submission'] },
                group: '2ZpQXmM1',
                permissions: { read: ['group:2ZpQXmM1'] },
                tags: ['User Submission'],
                text: message,
                uri: url
            }
        });
        handleClose();
        bulmaToast.toast({
            dismissible: true,
            duration: 5000,
            message: 'Success! Thanks for contributing.',
            type: 'is-success'
        });
    };

    return (
        <div className={`modal ${open ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                className="input"
                                type="text"
                                placeholder="URL"
                                value={url}
                                onChange={handleUrlChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-link"></i>
                            </span>
                            {validUrl ? (
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            ) : null}
                        </p>
                    </div>
                    <div className="field">
                        <div className="control">
                            <textarea
                                className="textarea"
                                placeholder="Why is this article interesting?"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="buttons">
                        <button
                            className="button is-primary"
                            disabled={!validUrl}
                            onClick={submit}
                        >
                            Submit
                        </button>
                        <button
                            className="button is-light"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={handleClose}
            ></button>
        </div>
    );
};

export default SuggestArticleModal;
