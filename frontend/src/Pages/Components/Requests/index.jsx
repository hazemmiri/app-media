import React from "react";
import "./style.css";
import Request from "./Request";

const Requests = () => {
  const requests = [
    {
      username: "Hazem Miri",
      profile_image:
        "https://images.pexels.com/photos/8059135/pexels-photo-8059135.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      username: "Ramsy",
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0CIy3mIbpe2nuLRfK5xxPcwxmTvXjJsBNw&usqp=CAU",
    },
    {
      username: "Bassem ",
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVYJnTAqcHWFAQAhWyZN2rFj8pwG3WiIHvA&usqp=CAU",
    },
    {
      username: "khalil",
      profile_image:
        "https://cdn.shortpixel.ai/spai/q_lossless+ret_img+to_webp/media.label.photo/2021/08/photo-de-profil-en-solo-Jennifer-Lescouet.jpg",
    },
    {
      username: "Hamza Miri",
      profile_image:
        "https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      username: "Md Slh",
      profile_image:
        "https://i1.sndcdn.com/avatars-sqpFyHHydfkys2TW-eUwhog-t500x500.jpg",
    },
  ];

  return (
    <>
      <div className="requests">
        <div className="requests_title">
          <div className="birthdaycontiner">
            <img
              className="birthdayImg"
              src="https://m.media-amazon.com/images/I/51IpJAAiOQL._AC_UF1000,1000_QL80_.jpg"
              alt=""
            />
            <span className="birthdayText">
              <b>Pola Foster</b> and <b> 3 other friends</b> hav a birthday
              today
            </span>
          </div>
          <img className="rightbarAD" src="" />
        </div>

        {requests.map((req, index) => (
          <Request data={req} key={index} />
        ))}
      </div>
    </>
  );
};

export default Requests;
