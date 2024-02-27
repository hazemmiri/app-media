import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faMagnifyingGlass,
  faHome,
  faGamepad,
  faStore,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzNMeWxPYSRXfBO59qDww3RSsqddGae5s0LZMzyPX7VTr2K54fgajCPS01iCViIog1CI&usqp=CAU" />
          <b>DARK SPACE </b>
        </div>

        <div className="navbar_right">
          <div className="navbar_profile_search">
            <FontAwesomeIcon icon={faHome} className="gray small" />
            <input type="text" placeholder="Home" />
          </div>
          <div className="navbar_profile_search">
            <FontAwesomeIcon icon={faGamepad} className="gray small" />
            <input type="text" placeholder="video" />
          </div>
          <div className="navbar_profile_search">
            <FontAwesomeIcon icon={faStore} className="gray small" />
            <input type="text" placeholder="Store" />
          </div>
          <div className="navbar_profile_search">
            <FontAwesomeIcon icon={faVideo} className="gray small" />
            <input type="text" placeholder="Video" />
          </div>

          <div className="navbar_profile_search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="gray small" />
            <input type="text" placeholder="Search ..." />
          </div>

          <button className="navbar_profile_button">
            <FontAwesomeIcon icon={faSquarePlus} /> Create
          </button>
          <div className="navbar_profile_image">
            <img src="https://scontent.ftun10-2.fna.fbcdn.net/v/t1.6435-9/47684461_513940942461094_157158617206751232_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_ohc=bv6bs_KQ27UAX-bSKoe&_nc_ht=scontent.ftun10-2.fna&oh=00_AfDNiOJMNGj9nABc5hp3BnFRRnbyksjoQlCY8iICvhcB0Q&oe=65F31C6A" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
