import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
import Dashboard from "./components/Dashboard";
import App from './App'
import ProtectedRoute from "./ProtectedRoute";
import UpdatePassword from "./components/UpdatePassword";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/dashboard", element: <ProtectedRoute><Dashboard/></ProtectedRoute>},
    {path: "update-password", element: <UpdatePassword/>},
])  