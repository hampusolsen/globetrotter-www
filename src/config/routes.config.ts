import { RouteProps } from "react-router-dom";
import DashboardFrame from "../components/frames/Dashboard.frame";
import ProfileFrame from "../components/frames/Profile.frame";
import HomeView from "../components/views/Home.view";
import MapView from "../components/views/Map.view";
import TravelView from "../components/views/Travel.view";
import WelcomeView from "../components/views/Welcome.view";

export const routes: RouteProps[] = [
    {
        path: "/",
        component: HomeView,
        children: [
            { path: "/dashboard", component: DashboardFrame },
            { path: "/profile", component: ProfileFrame },
        ],
    },
    { path: "/map", component: MapView },
    {
        path: "/travel",
        component: TravelView,
        children: [{ path: "/travel/", component: null }],
    },
    { path: "/welcome", component: WelcomeView },
];
