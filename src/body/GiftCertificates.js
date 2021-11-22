import { Fragment } from "react";
import BodyText from './BodyText';
import Title from './Title';

const GiftCertificates = () => {
    return (
        <Fragment>
            <Title text={'Gift Certificates'} />
            <BodyText text={text} />
        </Fragment>
    )
};

const text = 'Know someone who would like to go fishing with Roger?  Gift certificates make an excellent present for friends and family to enjoy some time relaxing and catching fish on Lake Oconee or Sinclair. Upon purchase, Roger will mail a signed certificate to either the purchaser or giftee good for a fishing trip claimable at any time for up to a year from the purchase date.';

export default GiftCertificates;