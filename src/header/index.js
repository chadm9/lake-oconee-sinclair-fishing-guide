import Links from './links';
import Title from './title';

const Header = ({ pages }) => {
    return (
        <div Class="container top-bar">
            <Title />
            <Links />
        </div>
    );
}

export default Header;