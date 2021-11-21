import { Link } from "react-router-dom";

const Links = () => {
    const pages = ['Home', 'Packages', 'Equipment', 'Gift Certificates', 'Contact'];
    return (
        <div className="row text-center nav-bar">
            <div className="col-sm-1"> </div>
                {pages.map(i => (
                    <Link Class="col-sm-2 links" to={i.replace(' ', '')}>{i}</Link>
                ))}
            <div className="col-sm-1"> </div>
        </div>
    )
}

export default Links;