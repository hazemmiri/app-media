import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faPhotoFilm,
  faShare,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const NewPost = () => {
  return (
    <>
      <div className="new_post">
        <div className="new_post_details">
          <div className="new_post_porfile_image">
            <img src="https://www.japanfm.fr/wp-content/uploads/2022/09/One-Piece-Episode-1033-Release-Date-scaled.jpg" />
          </div>
          <div className="new_post_textbox">
            <textarea placeholder="what's in your mind ..."></textarea>

            <div className="messagesSender_bottom">
              <div className="new_post_image">
                <a>
                  <FontAwesomeIcon icon={faImage} />
                </a>
              </div>
              <div className="new_post_image">
                <FontAwesomeIcon icon={faPhotoFilm} />
              </div>
              <div className="new_post_image">
                <FontAwesomeIcon icon={faVideo} />
              </div>
            </div>
          </div>
        </div>
        <div className="new_post_butons">
          <button>
            <FontAwesomeIcon icon={faShare} />
            Post it !
          </button>
        </div>
      </div>
    </>
  );
};
export default NewPost;
