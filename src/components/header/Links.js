import { Link } from "react-router-dom";

const Links = () => {
    const pages = ['Home', 'Packages', 'Equipment', 'Gift Certificates', 'Contact'];
    return (
        <div className="row text-center nav-bar">
            <div className="col-sm-1"> </div>
                {pages.map((page, index) => (
                    <div key={index} className="col-sm-2 links">
                        <Link class="links" to={page.replace(' ', '')}>{page}</Link>
                    </div>
                ))}
            <div className="col-sm-1"> </div>
        </div>
    )
}

export default Links;