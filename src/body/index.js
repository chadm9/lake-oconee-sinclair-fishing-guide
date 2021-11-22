import { Routes, Route, Navigate } from 'react-router-dom';
import Contact from './Contact';
import Equipment from './Equipment';
import GiftCertificates from './GiftCertificates';
import Home from './Home'
import Packages from './Packages';
import Title from './Title';

const Body = () => {
    return (
        <div className="container middle">
            <Title />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Packages" element={<Packages />} />
                <Route path="/Equipment" element={<Equipment />} />
                <Route path="/GiftCertificates" element={<GiftCertificates />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<Navigate replace to="/Home" />}/>
            </Routes>
        </div>
    )
};
export default Body;