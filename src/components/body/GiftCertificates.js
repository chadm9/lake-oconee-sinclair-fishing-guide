import { Fragment } from "react";
import BodyText from '../common/BodyText';
import PayPal from '../common/PayPal';
import Title from '../common/Title';
import Plug from "../common/Plug";

const GiftCertificates = () => {
    return (
        <Fragment>
            <Title text={'Gift Certificates'} />
            <BodyText text={bodyText} />
            <Plug text={plugText} />
            <PayPal isCertificate={true}/>
        </Fragment>
    )
};

const bodyText = 'Know someone who would like to go fishing with Roger?  Gift certificates make an excellent present for friends and family to enjoy some time relaxing and catching fish on Lake Oconee or Sinclair. Upon purchase, Roger will mail a signed certificate to either the purchaser or giftee good for a fishing trip claimable at any time for up to a year from the purchase date.';
const plugText = 'Purchase a Gift Certificate using the PayPal checkout option below.'

export default GiftCertificates;