import React from 'react';
import './ProfileCard.css'

const ProfileCard = (props) => {
    return (
      <div>
        <div class="container d-flex justify-content-center align-items-center">
            <div class="card">
                <div class="upper"> <img src="https://www.cockburngateway.com.au/CockburnGateway/media/Images/StoreFrontage/PricelinePharmacy.jpg" class="img-fluid" alt="background" /> </div>
                <div class="user text-center">
                    <div class="profile"> <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80" alt="p"/> </div>
                </div>
                <div class="mt-5 text-center">
                    <h4 class="mb-0">Jessica Foo</h4> 
                    <span class="text-muted d-block mb-2">Melbourne</span> 
                    <span class="text-muted d-block mb-2">{props.loyalty_id}</span>
                    <button class="btn btn-primary btn-sm follow">Edit Details</button>
                    <div class="d-flex justify-content-between align-items-center mt-4 px-4">
                        <div class="stats">
                            <h6 class="mb-0">Points</h6> <span>8,797</span>
                        </div>
                        <div class="stats">
                            <h6 class="mb-0">Tier</h6> <span>Diamond</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  export default ProfileCard;