import React from "react";
import Navbar from "./Pages/Components/Navbar";
import Sidebar from "./Pages/Components/Sidebar";
import SidProfile from "./Pages/Components/SidProfile";
import Requests from "./Pages/Components/Requests";
import Posts from "./Pages/Components/Posts";
import profileRequest from "./Pages/Components/Requests";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="layout-profile">
        <div style={{ width: "25%" }}>
          <Sidebar />
        </div>
        <div style={{ width: "50%" }}>
          <SidProfile />

          <Posts />
        </div>
        <div style={{ width: "25%" }}>
          <Requests />
        </div>
      </div>
    </>
  );
};

export default Profile;
