import { Fragment } from "react";
import BodyText from './BodyText';
import Title from './Title';

const Contact = () => {
    return (
        <Fragment>
            <Title text={'Contact'} />
            <BodyText text={text} />
        </Fragment>
    )
};

const text = 'To schedule a trip, or for more information, contact Roger via email:';

export default Contact;