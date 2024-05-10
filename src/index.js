import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./styles/utilities.scss";
import App from './App';
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile.js";
import { AuthProvider } from "./context/AuthContext";
import './styles/responsive-styles.scss';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/profile",
		element: <Profile />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
);