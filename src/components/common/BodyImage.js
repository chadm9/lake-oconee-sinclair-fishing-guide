import img from "../../images/boat-pic.jpg";

const BodyImage = ({ id, image, description }) => {
    return (
        <div className="col-sm-8 col-xs-8 col-sm-offset-2 col-xs-offset-2">
            <img id={id} src={image} />
            <div className="row text-center">
                <p><b>{description}</b></p>
            </div>
        </div>
    )
}

export default BodyImage;