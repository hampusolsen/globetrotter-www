import React from "react";
import HomeView from "../components/views/Home/Home.view";
import Dashboard from "../components/views/Home/outlets/Dashboard/Dashboard.outlet";
import Profile from "../components/views/Home/outlets/Profile/Profile.outlet";
import MapView from "../components/views/Map/Map.view";
import TravelView from "../components/views/Travel/Travel.view";
import Login from "../components/views/Welcome/outlets/Login.outlet";
import Register from "../components/views/Welcome/outlets/Register.outlet";
import WelcomeView from "../components/views/Welcome/Welcome.view";

export interface RouteObject {
  caseSensitive: boolean;
  children?: RouteObject[];
  element: React.ReactNode;
  path: string;
}

const routesConfig: RouteObject[] = [
  {
    path: "/my",
    element: <HomeView />,
    caseSensitive: false,
    children: [
      { path: "/", element: <Dashboard />, caseSensitive: false },
      { path: "profile", element: <Profile />, caseSensitive: false }
    ]
  },
  {
    path: "map",
    element: <MapView />,
    caseSensitive: false
  },
  {
    path: "travel",
    element: <TravelView />,
    caseSensitive: false
  },
  {
    path: "welcome",
    element: <WelcomeView />,
    caseSensitive: false,
    children: [
      { path: "login", element: <Login />, caseSensitive: false },
      { path: "register", element: <Register />, caseSensitive: false }
    ]
  }
];

export default routesConfig;
