import React, { Component } from 'react';
import Account from '../components/Account/account';
import MenuTimeline from '../components/Menu/menuTimeline';
import { Helmet } from 'react-helmet';
class PayMent extends Component {

    render() {
        return (
            <div className="container">
                <div className="timeline">
                    <MenuTimeline />
                    <div id="page-contents">
                        <Helmet>
                            <title>Payment</title>
                        </Helmet>
                        <div className="row">

                            <div className="col-md-3">
                            </div>
                            <Account />
                            {/* <div className="col-md-2 static">History</div> */}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PayMent;
