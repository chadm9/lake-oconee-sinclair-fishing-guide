import {Fragment} from "react";
import BodyImage from '../common/BodyImage';
import BodyText from '../common/BodyText';
import Title from '../common/Title';
import img from '../../images/boat-pic.jpg';

const Equipment = () => {
    return (
        <Fragment>
            <Title text={'Equipment'}/>
            <BodyText text={bodyText} />
            <BodyImage id={'boat-pic'} image={img} description={imageText} />
        </Fragment>
    )
};

const bodyText = 'We provide some of the best rods and reels in the fishing industry for your enjoyment. Our lineup includes Shimano, Browning, Pflueger, Garcia, Lew’s, and Bass Pro Shop reels, with Falcon, Diawa, Bass Pro Shop, and Fenwick rods. Our packages include soft drinks and bottled water on ice, snacks, sunscreen, all fishing tackle and equipment. You will need to bring fishing license, rain gear, hats, sunglasses, and any additional clothing for a comfortable day.'
const imageText = '21’ Ranger 520 Tour Edition with a 225 Yamaha HPDI';

export default Equipment;