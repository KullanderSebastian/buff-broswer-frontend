import React from "react";
import { useAuth } from "../../context/AuthContext";
import "./Logout.scss";

const Logout = () => {
    const { logout } = useAuth();

    const handleLogout = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("https://backend.buffbrowser.com:8080/logout", {
                method: "GET",
                credentials: "include",
            });

            if (response.ok) {
                logout();
                window.location.href = "/";
            } else {
                console.error("Logout failed: Server responded with an error.");
            }
        } catch (error) {
            console.error("Logout failed: ", error);
        }
    };

    return (
        <div className="logout">
            <a onClick={handleLogout}>Logout</a>
        </div>
    );
};

export default Logout;
