
const PayPal = ({ isCertificate }) => {
    return (
        <div className="row">
            <div className="col-sm-12 text-center">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_xclick" />
                    <input type="hidden" name="business" value="rogermckee9@yahoo.com" />
                    <input type="hidden" name="lc" value="BM" />
                    <input type="hidden" name="button_subtype" value="services" />
                    <input type="hidden" name="no_note" value="0" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
                    <table className="payment-menu">
                        <tbody>
                        <tr>
                            <td>
                                <input type="hidden" name="on0" value="Packages" />
                                <b>Select a Package</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select name="os0">
                                    <option value="1/2 Day Bass Fishing Trip">
                                        1/2 Day Bass Fishing {designateCertificate(isCertificate)}$375.00
                                    </option>
                                    <option value="3/4 Day Bass Fishing Trip">
                                        3/4 Day Bass Fishing {designateCertificate(isCertificate)}$450.00
                                    </option>
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="hidden" name="option_select0" value="1/2 Day Bass Fishing Trip" />
                    <input type="hidden" name="option_amount0" value="375.00" />
                    <input type="hidden" name="option_select1" value="3/4 Day Bass Fishing Trip"/>
                    <input type="hidden" name="option_amount1" value="450.00" />
                    <input type="hidden" name="option_index" value="0" />
                    <input id="paypal-button" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </div>
    )
};

const designateCertificate = (isCertificate) => {
    return isCertificate ? 'Certificate ' : 'Trip ';
}

export default PayPal;
