import React from 'react';
import ProfileCard from '../components/ProfileCard';
import { Container } from 'reactstrap';

const Customer = function(props) {
    return (
    <div>
        <div class="row">
        <Container className="bg-light border" fluid >
        {/* <h5>Loyalty URL is: {process.env.REACT_APP_LOYALTY_URL}</h5> */}
            <ProfileCard loyalty_id={props.loyaltyid}/>
        </Container>
        </div>
    </div>
    )}

export default Customer;