import { Fragment } from "react";
import BodyText from '../common/BodyText';
import Title from '../common/Title';

const Contact = () => {
    return (
        <Fragment>
            <Title text={'Contact'} />
            <BodyText text={text} />
        </Fragment>
    )
};

const text = 'To schedule a trip, or for more information, contact Roger via email, telephone, or by filling out the form below.';

export default Contact;