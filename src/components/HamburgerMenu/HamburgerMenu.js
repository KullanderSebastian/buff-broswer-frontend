import React from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login";
import "./HamburgerMenu.scss";

const HamburgerMenu = ({navigateToHome, buffBrowserIcon, open, handleHamburger, onSubmit, inputValue, handleInputChange, inputRef, isLoggedIn}) => {
    return (
        <div className="hamburgerContainer">
                <img onClick={navigateToHome} style={{cursor: 'pointer'}} src={buffBrowserIcon} className="buffBrowserIcon" alt="Website icon" />
                
                <div className="hamburgerPlacement">
                    <button className={`hamburger ${open ? "hamburgerOpen" : ""}`} onClick={handleHamburger}>
                        <div />
                        <div />
                        <div />
                    </button>
                </div>
                
                <form className={`hamburgerMenu ${open ? "hamburgerMenuOpen" : "" }`} onSubmit={onSubmit}>
                    <div className="hamburgerSearch">
                        <input
                            className="input-base input-white input-width-80"
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Fire Serpent"
                            ref={inputRef}
                        />
                        <button className="btn" type="submit">Search</button>
                    </div>
                    
                    {isLoggedIn ? 
                        <div className="profile"><a href="/profile">Profile</a></div> 
                    :
                        <div className="login">
                            <Login />
                        </div>
                    }
                    
                </form>
            </div>
    );
}

HamburgerMenu.propTypes = {
    navigateToHome: PropTypes.func.isRequired,
    buffBrowserIcon: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    handleHamburger: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    inputRef: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
};

export default HamburgerMenu;