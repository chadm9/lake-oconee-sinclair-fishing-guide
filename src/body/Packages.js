import {Fragment} from 'react';
import BodyText from './BodyText';
import PackagesTable from './PackagesTable';
import PayPal from './PayPal';

const Packages = () => {
    return (
        <Fragment>
            <BodyText text={text} />
            <PackagesTable />
            <PayPal />
        </Fragment>
    )
};

const text = 'All packages include fuel costs, soft drinks and bottled water on ice, snacks, sunscreen, and all fishing tackle and equipment.';


export default Packages;