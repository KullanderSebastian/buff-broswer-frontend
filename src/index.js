import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.scss';
import App from './App';
import Login from "./components/profile/Login";
import Profile from "./components/profile/Profile";
import { AuthProvider } from "./context/AuthContext";

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