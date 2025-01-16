import { lazy } from "react";

const Home = lazy(() => import("~/pages/Home/index.jsx"));
const Login = lazy(() => import("~/pages/Login/index.jsx"));
const Register = lazy(() => import("~/pages/Register/index.jsx"));
const Dashboard = lazy(() => import("~/pages/Dashboard/index.jsx"));

export {
    Home,
    Login,
    Register,
    Dashboard,
};
