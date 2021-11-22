import { Fragment } from "react";
import BodyText from './BodyText';
import Title from './Title';

const Home = () => {
    return (
        <Fragment>
            <Title text={'Home'} />
            <Pitch />
            <BodyText text={text} />
        </Fragment>
    )
};

const Pitch = () => {
    return (
        <div className='row'>
            <div className="col-sm-12 text-center">
                <h5 id="plug">Enjoy a fun-filled day of fishing on Lake Oconee or Sinclair with Roger McKee,
                    a professional fishing guide and tournament angler.</h5>
            </div>
        </div>
    )
};

//abstract Pitch to utils

const text = 'Roger has fished lakes Oconee and Sinclair for more than 25 years and has been a guide on these lakes for over 15 years. He is active on numerous tournament trails and has over 60 first place wins and countless top five finishes. He has served as an instructor at fishing university classes while performing hundreds of "on the water" instructions for beginner and intermediate anglers. Roger does guided fishing trips from the Ritz Carlton Lodge, Reynolds Plantation, Cuscowilla, Great Waters, Harbor Club, Oconee Outdoors, and Sugar Creek Marina. Corporate guided trips are available for up to 24 anglers, and gift certificates can be purchased online for any occasion.';

export default Home;