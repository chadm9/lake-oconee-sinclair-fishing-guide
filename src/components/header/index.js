import Links from './links';
import Heading from './heading';

const Header = ({ pages }) => {
    return (
        <div Class="container top-bar">
            <Heading />
            <Links />
        </div>
    );
}

export default Header;