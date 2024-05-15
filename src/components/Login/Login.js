import React from "react";
import "./Login.scss";

const Login = () => {
    const handleLogin = () => {
        window.location.href = "https://backend.buffbrowser.com:/auth/google";
    };

    return (
        <div className="login">
            <button className="btn" onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;
