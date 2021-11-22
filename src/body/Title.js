import {Fragment} from "react";
import img from './../images/bass-2.jpg';

const Title = ({ text }) => {
    return (
        <Fragment>
            <TitleText text={text} />
            <TitlePic />
        </Fragment>
    )
}

const TitleText = ({ text }) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <h3 className="page-description">{text}</h3>
            </div>
        </div>
    )
}

const TitlePic = () => {
    return (
        <div className="row">
            <div className="col-sm-12 text-center">
                <img id="lake-pic" src={img} />
            </div>
        </div>
    )
}

export default Title;