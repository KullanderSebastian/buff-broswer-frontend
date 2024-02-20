import Login from "../components/profile/Login";

const Navbar = ({navigateToHome, buffBrowserIcon, onSubmit, inputValue, handleInputChange, inputRef, wrapperRef, isOpen, filteredData, handleItemSelection, isLoggedIn}) => {
    return (
        <div className="searchForm">
                    <img onClick={navigateToHome} style={{cursor: 'pointer'}} src={buffBrowserIcon} className="buffBrowserIcon" alt="Website icon" />

                    <div className="searchlogincontainer">
                        <form onSubmit={onSubmit}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Fire Serpent"
                                ref={inputRef}
                            />
                            <label for="search" className="searchLabel">Search For Skins</label>

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

export default Navbar;