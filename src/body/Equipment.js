import {Fragment} from "react";
import BodyText from './BodyText';
import Title from './Title';
import img from './../images/boat-pic.jpg';

const Equipment = () => {
    return (
        <Fragment>
            <Title text={'Equipment'}/>
            <BodyText text={text} />
            <div className="col-sm-8 col-xs-8 col-sm-offset-2 col-xs-offset-2">
                <img id="boat-pic" src={img} />
                <div className="row text-center">
                    <p><b>21’ Ranger 520 Tour Edition with a 225 Yamaha HPDI</b></p>
                </div>
            </div>
        </Fragment>
    )
};

//imgae container

const text = 'We provide some of the best rods and reels in the fishing industry for your enjoyment. Our lineup includes Shimano, Browning, Pflueger, Garcia, Lew’s, and Bass Pro Shop reels, with Falcon, Diawa, Bass Pro Shop, and Fenwick rods. Our packages include soft drinks and bottled water on ice, snacks, sunscreen, all fishing tackle and equipment. You will need to bring fishing license, rain gear, hats, sunglasses, and any additional clothing for a comfortable day.'

export default Equipment;