import React from "react";
import buffBrowserIcon from "../../img/Browser.png";
import Logout from "../Logout/Logout";
import "./NavProfile.scss";

const NavProfile = () => {
    const navigateToHome = () => {
        window.location.href = 'http://localhost:3000/';
    };

    return (
        <div className="navProfile">
            <img onClick={navigateToHome} style={{cursor: 'pointer'}} src={buffBrowserIcon} className="buffBrowserIcon" alt="Website icon" />
            <div className="login">
                <Logout />
            </div>
        </div>
    );
};

export default NavProfile;