import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import WatchlistItem from "./WatchlistItem";
 
const Profile = () => {
    const [userData, setUserData] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const getTokenFromUrl = () => {
            const url = new URL(window.location.href);
            const token = url.searchParams.get("token");
            const gId = url.searchParams.get("gId");

            if (token) {
                localStorage.setItem("token", token);
                localStorage.setItem("gId", gId);

                url.searchParams.delete("token");
                url.searchParams.delete("gId");
                window.history.replaceState({}, document.title, url.toString())
            }
        };

        getTokenFromUrl();

        const isAuthenticated = localStorage.getItem("token");

        if (!isAuthenticated) {
            navigate("/login");
        }

        async function fetchData() {
            const url = "http://localhost:8080/user/getuser";
            const token = localStorage.getItem("token");

            console.log("TOKEN: " + token)

            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        gId: localStorage.getItem("gId")
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                console.log("User data:", data);
                return data;
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        fetchData()
            .then(data => {
                setUserData(data);
            })
    }, []);

    return (
        <div>
            <h1>{userData ? userData.displayName : ""}</h1>
            <p>email: {userData ? userData.email : ""}</p>
            <p>Phone: <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={setPhoneNumber}
            /></p>
            <button>Save</button>
            <h1>Watchlist</h1>
            <button>Add item</button>
            <div>
                {userData ? userData.watchlist.map((skin) => (
                    <WatchlistItem 
                        itemName={skin.itemName}
                        wear={skin.wear}
                        stickerName={skin.stickerName} 
                    />
                )) : ""}
            </div>
        </div>
    );
};

export default Profile;