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

export default PackagesTable;