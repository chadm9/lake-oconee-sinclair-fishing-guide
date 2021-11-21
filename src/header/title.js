import img from './../images/bass-1.png';

const Title = () => {
    return (
        <div className="row">
            <div className="col-sm-12 text-center">
                <img id="bass-pic" src={img} />
                    <h1 id="header">Oconee/Sinclair Professional Fishing Guide Services</h1>
            </div>
        </div>
    )
}

export default Title;