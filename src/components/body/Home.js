import React, { Fragment } from "react";
import BodyText from '../common/BodyText';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactWeather, { useOpenWeather } from 'react-open-weather';
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
            <Forecast />
        </Fragment>
    )
};

const bodyText = 'Roger has fished lakes Oconee and Sinclair for more than 25 years and has been a guide on these lakes for over 15 years. He is active on numerous tournament trails and has over 60 first place wins and countless top five finishes. He has served as an instructor at fishing university classes while performing hundreds of "on the water" instructions for beginner and intermediate anglers. Roger does guided fishing trips from the Ritz Carlton Lodge, Reynolds Plantation, Cuscowilla, Great Waters, Harbor Club, Oconee Outdoors, and Sugar Creek Marina. Corporate guided trips are available, and gift certificates can be purchased online for any occasion.';
const plugText = 'Enjoy a fun-filled day of fishing on Lake Oconee or Sinclair with Roger McKee, a professional fishing guide and tournament angler.'
const caption1 = 'Roger wins another boat in the HD Marine Tournament Trail.'
const caption2 = 'Champions of Berry\'s 2-day Classic Tournament on Lakes Sinclair and Oconee.'
const caption3 = 'Roger wins R&R Tournament Trail Championship on Lake Oconee.'
const caption4 = 'Roger wins a new Skeeter bass boat with a 150 Yamaha motor at the Oconee Marine Tournament Trail Classic.'
const caption5 = 'Roger is the focus of a Georgia Outdoor News article where he provides tips on catching largmouth bass in tough summer heat.'


const SlideShow = () => {
    const images = [carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselImg5];
    const captions = [caption1, caption2, caption3, caption4, caption5];
    return (
        <div className="row">
                <Carousel className="text-center" autoPlay={true} infiniteLoop={true} interval={4000} showArrows={false} showStatus={false}>
                    {images.map((img, index) => {
                        return (
                            <div key={index} className="col-sm-4 col-sm-offset-4">
                                <img src={img} />
                                <p className="legend">{captions[index]}</p>
                            </div>
                        )
                    })}
                </Carousel>
        </div>
    )
}

const Forecast = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'f5873508e48856fe11f3748ef4662371',
        lat: '33.449339',
        lon: '-83.26209',
        lang: 'en',
        unit: 'imperial', // values are (metric, standard, imperial)
    });
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h3 className="page-description">5 Day Lake Oconee/Sinclair Fishing Forecast</h3>
                </div>
            </div>
            <div className="row">
                <div className="forecast">
                    <ReactWeather
                        isLoading={isLoading}
                        errorMessage={errorMessage}
                        data={data}
                        lang="en"
                        locationLabel="Lake Oconee/Sinclair Area"
                        unitsLabels={{ temperature: 'F', windSpeed: 'mph' }}
                        showForecast
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default Home;