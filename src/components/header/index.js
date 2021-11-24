import Links from './Links';
import Heading from './Heading';

const Header = ({ pages }) => {
    return (
        <div className="container top-bar">
            <Heading />
            <Links />
        </div>
    );
}

export default Header;