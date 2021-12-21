import React from 'react';

const Customer = function(props) {
    return (
    <div>
        <h4>Well, this is <i>obviously</i> the customer page for loyalty customer {props.loyaltyid}</h4>
        <h5>Loyalty URL is: {process.env.REACT_APP_LOYALTY_URL}</h5>
    </div>
    )}

export default Customer;