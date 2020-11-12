import React from "react";
import { Outlet } from "react-router";

const ProfileView: React.FC = () => {
  return (
    <div>
      Profile Page
      <nav>
        <div>Fellow travelers</div>
        <div>Edit profile</div>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProfileView;
