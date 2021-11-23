import { Fragment } from "react";
import BodyText from '../common/BodyText';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Plug from '../common/Plug';
import Title from '../common/Title';
import carouselImg1 from '../../images/Roger_wins_boat2.jpg';
import carouselImg2 from '../../images/Roger_with_check.jpg';
import carouselImg3 from '../../images/Roger_wins_R&R.png';
import carouselImg4 from '../../images/Roger_wins_boat1.png';
import carouselImg5 from '../../images/Roger_GON.jpg';

const Home = () => {
    return (
        <Fragment>
            <Title text={'Home'} />
            <Plug text={plugText} />
            <BodyText text={bodyText} />
            <SlideShow />
        </Fragment>
    )
};

const bodyText = 'Roger has fished lakes Oconee and Sinclair for more than 25 years and has been a guide on these lakes for over 15 years. He is active on numerous tournament trails and has over 60 first place wins and countless top five finishes. He has served as an instructor at fishing university classes while performing hundreds of "on the water" instructions for beginner and intermediate anglers. Roger does guided fishing trips from the Ritz Carlton Lodge, Reynolds Plantation, Cuscowilla, Great Waters, Harbor Club, Oconee Outdoors, and Sugar Creek Marina. Corporate guided trips are available for up to 24 anglers, and gift certificates can be purchased online for any occasion.';
const plugText = 'Enjoy a fun-filled day of fishing on Lake Oconee or Sinclair with Roger McKee, a professional fishing guide and tournament angler.'
const legend1 = 'Roger wins another boat in the HD Marine Tournament Trail.'
const legend2 = 'Champions of Berry\'s 2-day Classic Tournament on Lakes Sinclair and Oconee.'
const legend3 = 'Roger wins R&R Tournament Trail Championship on Lake Oconee.'
const legend4 = 'Roger wins a new Skeeter bass boat with a 150 Yamaha motor at the Oconee Marine Tournament Trail Classic.'
const legend5 = 'Roger is the focus of a Georgia Outdoor News article where he provides tips on catching largmouth bass in tough summer heat.'


const SlideShow = () => {
    const images = [carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselImg5];
    const legends = [legend1, legend2, legend3, legend4, legend5];
    return (
        <div className="row">
                <Carousel className="text-center" autoPlay={true} infiniteLoop={true} interval={5000} showArrows={false} showStatus={false}>
                    {images.map((img, index) => {
                        return (
                            <div className="col-sm-4 col-sm-offset-4">
                                <img src={img} />
                                <p className="legend">{legends[index]}</p>
                            </div>
                        )
                    })}

                </Carousel>
        </div>
    )
}

export default Home;