import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../components/modules/Navigation/Navigation.module";
import CreateTravel from "../components/views/CreateTravel/CreateTravel.view";
import FeedContainer from "../components/views/FeedContainer/FeedContainer.view";
import Feed from "../components/views/FeedContainer/outlets/Feed/Feed.outlet";
import Map from "../components/views/FeedContainer/outlets/Map/Map.outlet";
import NotFound from "../components/views/NotFound/NotFound.view";
import Contacts from "../components/views/Profile/outlets/Contacts.outlet";
import EditProfile from "../components/views/Profile/outlets/EditProfile.outlet";
import Followers from "../components/views/Profile/outlets/Followers.outlet";
import Following from "../components/views/Profile/outlets/Following.outlet";
import Profile from "../components/views/Profile/Profile.view";
import Welcome from "../components/views/Welcome/Welcome.view";
import RoutePaths from "../config/router.config";
import RouteGuard from "./RouteGuard";

const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={RoutePaths.ROOT} element={<Welcome />} />
      <RouteGuard>
        <Navigation />
        <Routes>
          <Route path={RoutePaths.MY} element={<Profile />}>
            <Route path={RoutePaths.CONTACTS} element={<Contacts />}>
              <Route path={RoutePaths.FOLLOWERS} element={<Followers />} />
              <Route path={RoutePaths.FOLLOWING} element={<Following />} />
            </Route>
            <Route
              path={`profile/${RoutePaths.EDIT}`}
              element={<EditProfile />}
            />
          </Route>
          <Route path={RoutePaths.FEED} element={<FeedContainer />}>
            <Route path={RoutePaths.ROOT} element={<Feed />} />
            <Route path={RoutePaths.MAP} element={<Map />} />
          </Route>
          <Route path={RoutePaths.TRAVEL}>
            <Route path={RoutePaths.NEW} element={<CreateTravel />} />
          </Route>
        </Routes>
      </RouteGuard>
      <Route path={RoutePaths.WILDCARD} element={<NotFound />} />
    </Routes>
  );
};

export default Router;
