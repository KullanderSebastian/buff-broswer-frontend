import React from "react";
import { useAuth } from "../../context/AuthContext";

const Logout = () => {
    const { logout } = useAuth();

    const handleLogout = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:8080/logout", {
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