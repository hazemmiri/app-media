import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faGear,
  faHome,
  faPhotoFilm,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_menu">
          <a className="active">
            {""}
            <FontAwesomeIcon icon={faHome} className="me_3" /> <b>Home</b>
          </a>
          <a>
            {""}
            <FontAwesomeIcon icon={faUsers} className="me_3" /> <b>People</b>
          </a>
          <a>
            {""}
            <FontAwesomeIcon icon={faPhotoFilm} className="me_3" />{" "}
            <b>Photos</b>
          </a>
          <a>
            {""}
            <FontAwesomeIcon icon={faCalendar} className="me_3" />{" "}
            <b>New Feed</b>
          </a>
          <a>
            {""}
            <FontAwesomeIcon icon={faUser} className="me_3" /> <b>Profile</b>
          </a>
          <a>
            {""}
            <FontAwesomeIcon icon={faGear} className="me_3" /> <b>settings</b>
          </a>
        </div>
        <div className="friend_menu">
          <div className="sidebar_friend">
            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <span className="sidbar_friend_name">Hamdi AR</span>
          </div>
          <div className="sidebar_friend">
            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <span className="sidbar_friend_name">Sawsen </span>
          </div>
          <div className="sidebar_friend">
            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <span className="sidbar_friend_name">Mayssa</span>
          </div>
          <div className="sidebar_friend">
            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <span className="sidbar_friend_name">Wafa Wafa</span>
          </div>

          <div className="sidebar_friend">
            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <span className="sidbar_friend_name">Bilel Miri</span>
          </div>
          <div className="sidebar_friend">
            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <span className="sidbar_friend_name">Bilel Miri</span>
          </div>
          <div className="sidebar_friend">
            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <span className="sidbar_friend_name">Bilel Miri</span>
          </div>
          <div className="sidebar_friend">
            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <span className="sidbar_friend_name">Bilel Miri</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
