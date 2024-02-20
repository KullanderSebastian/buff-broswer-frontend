import Login from "../components/profile/Login";

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
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder="Fire Serpent"
                                    ref={inputRef}
                                />
                                <button type="submit">Search</button>
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

export default HamburgerMenu;