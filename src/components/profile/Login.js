import React from "react";
//import { useNavigate } from "react-router-dom";

const Login = () => {
    //const navigate = useNavigate();

    const handleLogin = () => {
        //navigate("http://localhost:8080/auth/google");
        window.location.href = "http://localhost:8080/auth/google";
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;