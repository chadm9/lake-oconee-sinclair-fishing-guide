import { Routes, Route } from 'react-router-dom';

import Contact from './Equipment';
import Equipment from './Equipment';
import GiftCertificates from './GiftCertificates';
import Home from './Home'
import Packages from './Packages';
import Title from './Title';

const Body = () => {
    return (
        <div className="container">
            <Title />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Packages" element={<Packages />} />
                <Route path="/Equipment" element={<Equipment />} />
                <Route path="/GiftCertificates" element={<GiftCertificates />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Home" element={<Home />} />
                <Route path="*" element={<Home />}/>
            </Routes>
        </div>
    )
};

export default Body;