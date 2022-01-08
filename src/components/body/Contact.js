import React, { Fragment, useState } from 'react';
import BodyText from '../common/BodyText';
import Title from '../common/Title';
import { SEND_MAIL_CLOUD_FUNCTION_URL } from "../../config/config";
import axios from 'axios';
import Plug from "../common/Plug";

const Contact = () => {
    return (
        <Fragment>
            <Title text={'Contact'} />
            <BodyText text={text} />
            <ContactForm />
        </Fragment>
    )
};

const text = 'To schedule a trip, or for more information, contact Roger via email, telephone, or by filling out the form below (all fields are required).';
const emailRegex = /\S+@\S+\.\S+/;
const plugText = 'Email sent. Roger will be in contact with you soon!'


const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [submitted, setSubmitted] = useState(null)

    const validateForm = (value, handler) => {
        handler(value);
        if (name !== '' && message !== '' && emailRegex.test(email) && value !== '')  setSubmitDisabled(false);
        else setSubmitDisabled(true);
    }

    const handleSubmit = () => {
        const contents = JSON.stringify({
            name,
            email,
            message
        });

        axios.post(SEND_MAIL_CLOUD_FUNCTION_URL, contents, { headers:{'Content-Type': 'text/plain'} })
        setSubmitted(true);
    }

    const formMarkup =
            <form id="contact-form">
                <div className="form-group" id="name-input">
                    <label>Name</label>
                    <input onChange={(e) => validateForm(e.target.value, setName)} id='name' type="text" className="form-control" placeholder="name" value={name} />
                </div>
                <div className="form-group" id="email-input">
                    <label>Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="email address" value={email} onChange={(e) => validateForm(e.target.value, setEmail) } />
                    {/*{invalidEmail ? <p id="form-error">A valid email address is required</p> : null}*/}
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea id="message" placeholder="message" className="form-control" rows="4" value={message} onChange={(e) => validateForm(e.target.value, setMessage)} />
                </div>
                <button id='contact-button' className="btn btn-primary" disabled={submitDisabled} onClick={handleSubmit}>Submit</button>
            </form>

    const submittedMarkup = <Plug text={plugText} />

    return  (
        <div className="col-sm-8 col-sm-offset-2">
            {submitted ? submittedMarkup : formMarkup}
        </div>
    )
}



export default Contact;