import routesConfigure from "~/configure/routesConfig.jsx";
import {
    Dashboard,
    Home,
    Login,
    Register,
} from "~/pages/index.jsx";
import DefaultLayout from "~/layout/DefaultLayout.jsx";

export const publicRoutes = [
    {path: routesConfigure.Home, component: Home, layout: DefaultLayout},
    {path: routesConfigure.Login, component: Login, layout: null},
    {path: routesConfigure.Register, component: Register, layout: null},
];

export const privateRoutes = [
    {path: routesConfigure.Dashboard, component: Dashboard, layout: DefaultLayout},
];
