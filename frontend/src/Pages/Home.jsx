import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UsernameCard from "./Components/usernameCard";
import Sidebar from "./Components/Sidebar";
import Storise from "./Components/Stories";
import Requests from "./Components/Requests";
import Posts from "./Components/Posts";

const Home = () => {
  const [connectedUser, setConnectedUser] = useState({});

  const navigate = useNavigate();

  const getConnectedUserData = () => {
    setConnectedUser(JSON.parse(localStorage.getItem("user_data")));

    // console.log(localStorage.getItem('user_data') )

    if (localStorage.getItem("user_data") === null) {
      // user not connected
      //rdiection vers la page login
      navigate("/login");
    }
  };

  useEffect(() => {
    getConnectedUserData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout-app">
        {/* left Box */}

        <div style={{ width: "25%" }}>
          <UsernameCard user={connectedUser} />
          <Sidebar />
        </div>

        {/* Middle Box */}

        <div style={{ width: "50%" }}>
          <Storise />
          <Posts />
        </div>

        {/* right Box */}

        <div style={{ width: "25%" }}>
          <Requests />
        </div>
      </div>

      {/* <h1>hello {connectedUser.frstname  } </h1> */}
    </>
  );
};

export default Home;
