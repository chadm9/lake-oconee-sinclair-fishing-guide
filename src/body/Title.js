import {Fragment} from "react";
import { useLocation } from 'react-router-dom';
import img from './../images/bass-2.jpg';


const Title = () => {
    const location = useLocation();
    return (
        <Fragment>
            <div className="row">
                {location.pathname === '/Home' ? getPitch(): getHeader(location.pathname)}
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <img id="lake-pic" src={img} />
                </div>
            </div>
        </Fragment>
    )
}

const getHeader = (path) => {
    const heading = path === '/GiftCertificates' ? 'Gift Certificates' : path;
    return (
        <div className="col-sm-12">
            <h3 className="page-description">{heading.replace('/', '')}</h3>
        </div>
    )
}

const getPitch = () => {
    return (
        <div className="col-sm-12 text-center">
            <h5 id="plug">Enjoy a fun-filled day of fishing on Lake Oconee or Sinclair with Roger McKee,
                a professional fishing guide and tournament angler.</h5>
        </div>
    )
}

export default Title;