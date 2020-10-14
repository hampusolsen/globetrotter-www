// @ts-ignore-next-line
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
        children: [
            HomeView,
            { path: "/dashboard", children: DashboardFrame },
            { path: "/profile", children: ProfileFrame },
        ],
    },
    { path: "/map", children: MapView },
    {
        path: "/travel",
        children: [TravelView, { path: "/travel/", component: null }],
    },
    { path: "/welcome", children: WelcomeView },
];
