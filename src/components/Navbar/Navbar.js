import React from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login";
import "./Navbar.scss";

const Navbar = ({navigateToHome, buffBrowserIcon, onSubmit, inputValue, handleInputChange, inputRef, wrapperRef, isOpen, filteredData, handleItemSelection, isLoggedIn}) => {
    return (
        <div className="searchForm">
                    <img onClick={navigateToHome} style={{cursor: 'pointer'}} src={buffBrowserIcon} className="buffBrowserIcon" alt="Website icon" />

                    <div className="searchlogincontainer">
                        <form onSubmit={onSubmit}>
                            <input
                                className="input-base input-white input-width-50"
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Fire Serpent"
                                ref={inputRef}
                            />
                            <label htmlFor="search" className="searchLabel">Search For Skins</label>

                            <div className="dropdown" ref={wrapperRef}>
                                {isOpen && (
                                    <ul>
                                        {filteredData.map(item => (
                                            <li key={item} onClick={() => handleItemSelection(item)}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </form>

                        {isLoggedIn ? 
                            <div className="profile"><a href="/profile">Profile</a></div> 
                        :
                            <div className="login">
                                <Login />
                            </div>
                        }
                    </div>
                </div>
    );
}

Navbar.propTypes = {
    navigateToHome: PropTypes.func.isRequired,
    buffBrowserIcon: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    inputRef: PropTypes.object.isRequired,
    wrapperRef: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    filteredData: PropTypes.array.isRequired,
    handleItemSelection: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};

export default Navbar;