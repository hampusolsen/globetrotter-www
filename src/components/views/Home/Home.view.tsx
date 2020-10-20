import React from "react";
import { Outlet } from "react-router-dom";

const HomeView: React.FC = () => (
  <div>
    <Outlet />
  </div>
);

export default HomeView;
