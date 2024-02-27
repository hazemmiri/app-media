import React from "react";
import "./style.css";
const usernameCard = (props) => {
  return (
    <>
      <div className="username_card">
        <div className="username_card_image">
          {props.user.picture == "" ? (
            <h3 className="profile_caractere">{props.user.firstname[0]}</h3>
          ) : (
            <img src="https://images.pexels.com/photos/20051870/pexels-photo-20051870/free-photo-of-lumineux-mode-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          )}
        </div>

        <div className="username_card_info">
          <h3 className="username">
            {""}
            {props.user.firstname + " " + props.user.lastname}
          </h3>
          <span className="small">
            {" "}
            {props.user.firstname + " " + props.user.lastname}{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default usernameCard;
