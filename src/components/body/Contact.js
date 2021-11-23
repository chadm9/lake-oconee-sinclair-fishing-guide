import React, { Fragment, useState } from 'react';
import BodyText from '../common/BodyText';
import Title from '../common/Title';

const Contact = () => {
    return (
        <Fragment>
            <Title text={'Contact'} />
            <BodyText text={text} />
            <ContactForm />
        </Fragment>
    )
};

const text = 'To schedule a trip, or for more information, contact Roger via email, telephone, or by filling out the form below.';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidMsg, setInvalidMsg] = useState(false);
    const emailRegex = /\S+@\S+\.\S+/;

    const handleSubmit = () => {
        if (name.length === 0) setInvalidName(true);
        if (!emailRegex.test(email)) setInvalidEmail(true);
        if (msg.length === 0) setInvalidMsg(true);

        return setSubmitDisabled(true);
    }
    return  (
        <div className="col-sm-8 col-sm-offset-2">
            <form id="contact-form">
                {/*<p id="form-error"></p>*/}
                {/*<p id="form-submission"></p>*/}
                <div className="form-group" id="name-input">
                    <label>Name</label>
                    <input onChange={(e) => setName(e.target.value)} id='name' type="text" className="form-control" placeholder="name" value={name} />
                    {invalidName ? <p id="form-error">A name is required</p> : null}
                </div>
                <div className="form-group" id="email-input">
                    <label>Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value) } />
                    {invalidEmail ? <p id="form-error">An email address is required</p> : null}
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea id="message" placeholder="message" className="form-control" rows="4" value={msg} onChange={(e) => setMsg(e.target.value)} />
                    {invalidMsg ? <p id="form-error">A message is required</p> : null}
                </div>
                <button id='contact-button' className="btn btn-primary" disabled={submitDisabled} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}



export default Contact;