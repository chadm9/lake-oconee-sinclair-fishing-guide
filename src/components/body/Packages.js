import { Fragment } from 'react';
import BodyText from '../common/BodyText';
import PayPal from '../common/PayPal';
import Plug from "../common/Plug";
import Title from '../common/Title';

const Packages = () => {
    return (
        <Fragment>
            <Title text={'Packages'} />
            <BodyText text={bodyText} />
            <PackagesTable />
            <Plug text={plugText}/>
            <PayPal />
        </Fragment>
    )
};

const bodyText = 'All packages include fuel costs, soft drinks and bottled water on ice, snacks, sunscreen, and all fishing tackle and equipment.';
const plugText = 'Trip payments can be made via check, or using the PayPal checkout option below.'

const PackagesTable = () => {
    return (
        <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
                <table className="table table-striped text-center">
                    <thead>
                    <tr>
                        <th className="table-headings">Length</th>
                        <th className="table-headings"># of Anglers</th>
                        <th className="table-headings">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1/2 day (4 hours)</td>
                        <td>1-2</td>
                        <td>$300.00</td>
                    </tr>
                    <tr>
                        <td>3/4 day (6 hours)</td>
                        <td>1-2</td>
                        <td>$375.00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Packages;