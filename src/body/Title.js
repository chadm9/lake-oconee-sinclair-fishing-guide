import {Fragment} from "react";
import img from './../images/bass-2.jpg';


const Title = () => {
    return (
        <Fragment>
            <div className="row">
                <p>title</p>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <img id="lake-pic" src={img} />
                </div>
            </div>
        </Fragment>
    )
}

export default Title;