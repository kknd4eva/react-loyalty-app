import React from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faAddressCard, faBarcode, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
export default function NavBar(props) {
    return (
        <div className="NavBar">
            <div className="fixed-bottom">
                <div className="row">
                    <div className="col-sm-3 text-center ">
                        <FontAwesomeIcon className="icon" icon={faGift} />
                        <br />
                        <p>Rewards</p>
                    </div>
                    <div className="col-sm-3 text-center">
                        <FontAwesomeIcon className="icon" icon={faAddressCard} />
                        <br />
                        <p>Account</p>
                    </div>
                    <div className="col-sm-3 text-center">
                        <FontAwesomeIcon className="icon" icon={faBarcode} />
                        <br />
                        <p>Cards</p>
                    </div>
                    <div className="col-sm-3 text-center">
                        <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                        <br />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}