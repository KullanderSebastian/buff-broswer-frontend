import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";
import * as Yup from 'yup';
import WatchlistItem from "../WatchlistItem/WatchlistItem";
import SkinWatchlistForm from "../SkinWatchlistForm/SkinWatchlistForm";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import NavProfile from "../NavProfile/NavProfile";
import fetchWithTokenRefresh from "../../utils/fetchWithTokenRefresh";
import "./Profile.scss";
  
const Profile = () => {
    const [userData, setUserData] = useState();
    const [watchlist, setWatchlist] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [refreshState, setRefreshState] = useState(false);
    const [notificationPreference, setNotificationPreference] = useState();
    const navigate = useNavigate();

    const phoneSchema = Yup.object().shape({
        phone: Yup.string()
            .required("Phone number is required")
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await phoneSchema.validate({ phone });
            setError("");

            const response = await fetchWithTokenRefresh("http://localhost:8080/user/updatephone", {
                method: "POST",
                body: JSON.stringify({
                    phone: phone
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setRefreshState(true);
            console.log(data)
        } catch (err) {
            setError(err.message);
        }
    }

    const handleRadioSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetchWithTokenRefresh("http://localhost:8080/user/updatenotificationpreference", {
                method: "POST",
                body: JSON.stringify({
                    notificationPreference: notificationPreference
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            alert("Notification preference changed.")
        } catch (error) {
            console.error(error);

            if (error.message.includes("Redirecting to login.")) {
                window.location.href = "http://localhost:8080/auth/google";
            } else {
                alert(error.message);
            }
        }
    }

    const handleNotificationPreference = (event) => {
        setNotificationPreference(event.target.value);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetchWithTokenRefresh("http://localhost:8080/user/getuser", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                setUserData(data);
                setWatchlist(data.watchlist);
                setNotificationPreference(data.notificationPreference);
            } catch (error) {
                console.error("Error fetching user data: ", error);

                if (error.message.includes("Redirecting to login.")) {
                    window.location.href = "http://localhost:8080/auth/google"; 
                }
            }
        }
    
        fetchData();
    }, [navigate]);

    const handleModal = () => {
        if (!modalIsOpen) {
            setModalIsOpen(true);
        } else {
            setModalIsOpen(false);
        }
    }

    const handleRemoveItem = async (itemId) => {
        try {
            const response = await fetchWithTokenRefresh("http://localhost:8080/user/removeitemfromwatchlist", {
                method: "POST",
                body: JSON.stringify({
                    objectId: itemId,
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.ok) {
                setWatchlist(prevWatchlist => prevWatchlist.filter(item => item._id !== itemId));
            } else {
                console.error("Failed to remove item from watchlist");
            }
        } catch(error) {
            console.error("An error occurred: ", error);
        }
    }

    const addToWatchlistState = (newItem) => {
        setWatchlist((currentWatchlist) => [...currentWatchlist, newItem]);
    }

    console.log('handleModal function:', handleModal);

    return (
        <div>
            <NavProfile />
            <div className="profile">
                <div className="information">
                    <h1>{userData ? userData.displayName : ""}</h1>
                    <p><HiOutlineMail /> {userData ? userData.email : ""}</p>
                    {userData ? (userData.phone === "" ? (
                        <form className="telephone" onSubmit={handleSubmit}>
                            <PhoneInput
                                international
                                value={phone}
                                onChange={setPhone}
                            />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <button className="btn" type="submit">Save</button>
                        </form>
                    ) : <p className="phoneIcon"><HiOutlinePhone /> {userData.phone}</p>) : <p>Loading...</p>}
                    <form className="preference" onSubmit={handleRadioSubmit}>
                        <h2>Notification Preferences</h2>
                        <label>
                            Email
                            <input
                                type="radio"
                                value="Email"
                                checked={notificationPreference === "Email"}
                                onChange={handleNotificationPreference}
                            />
                        </label>
                        <label>
                            Phone
                            <input
                                disabled={!userData || userData.phone === ""}
                                type="radio"
                                value="Phone"
                                checked={notificationPreference === "Phone"}
                                onChange={handleNotificationPreference}
                            />
                        </label>
                        <button className="btn" type="submit">Save</button>
                    </form>
                </div>
                
                <div className="watchlist">
                    <h1>Watchlist</h1>
                    <button className="btn" onClick={handleModal}>Add item</button>


                    <div id="addItemModal" class="modal" style={modalIsOpen ? { display: "block" } : { display: "none" }}>
                        <div class="modalContent">
                            <span onClick={handleModal} class="close">&times;</span>
                            <SkinWatchlistForm onAddToWatchlistState={addToWatchlistState} onCloseModal={handleModal}/>
                        </div>
                    </div>

                    <div className="watchlist">
                        {watchlist ? watchlist.map((skin) => (
                            <WatchlistItem
                                key={skin._id}
                                itemName={skin.itemName}
                                wear={skin.wear}
                                stickerName={skin.stickerName}
                                onRemove={() => handleRemoveItem(skin._id)} 
                            />
                        )) : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;