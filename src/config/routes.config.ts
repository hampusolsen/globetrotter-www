import DashboardFrame from "../components/frames/Dashboard.frame";
import ProfileFrame from "../components/frames/Profile.frame";
import HomeView from "../components/views/Home.view";
import MapView from "../components/views/Map.view";
import TravelView from "../components/views/Travel.view";
import WelcomeView from "../components/views/Welcome.view";

export interface RouteObject {
  caseSensitive: boolean;
  children?: RouteObject[];
  element: React.ReactNode;
  path: string;
}

const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: HomeView,
    caseSensitive: false,
    children: [
      { path: "dashboard", element: DashboardFrame, caseSensitive: false },
      { path: "profile", element: ProfileFrame, caseSensitive: false },
    ],
  },
  {
    path: "/map",
    element: MapView,
    caseSensitive: false,
  },
  {
    path: "/travel",
    element: TravelView,
    caseSensitive: false,
  },
  {
    path: "/welcome",
    element: WelcomeView,
    caseSensitive: false,
  },
];

export default routesConfig;
