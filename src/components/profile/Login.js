import React from "react";

const Login = () => {
    const handleLogin = (e) => {
        window.location.href = "http://localhost:8080/auth/google";
    };

    return (
        <div className="login">
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;