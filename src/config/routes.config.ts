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
        element: HomeView,
        children: [
            { path: "/dashboard", element: DashboardFrame },
            { path: "/profile", element: ProfileFrame },
        ],
    },
    {
        path: "/map",
        children: MapView,
    },
    {
        path: "/travel",
        element: TravelView,
    },
    {
        path: "/welcome",
        element: WelcomeView,
    },
];
