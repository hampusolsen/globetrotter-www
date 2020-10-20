import React from "react";
import DashboardFrame from "../components/frames/Dashboard/Dashboard.frame";
import ProfileFrame from "../components/frames/Profile/Profile.frame";
import HomeView from "../components/views/Home/Home.view";
import MapView from "../components/views/Map/Map.view";
import TravelView from "../components/views/Travel/Travel.view";
import LoginFrame from "../components/views/Welcome/Frames/Login.frame";
import SignupFrame from "../components/views/Welcome/Frames/Signup.frame";
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
      { path: "/", element: <DashboardFrame />, caseSensitive: false },
      { path: "profile", element: <ProfileFrame />, caseSensitive: false }
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
      { path: "/", element: <LoginFrame />, caseSensitive: false },
      { path: "signup", element: <SignupFrame />, caseSensitive: false }
    ]
  }
];

export default routesConfig;
