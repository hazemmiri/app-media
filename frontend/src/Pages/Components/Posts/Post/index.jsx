import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faThumbsUp,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const Post = (post) => {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsliked] = useState(false);
  console.log(like);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsliked(!isliked);
  };
  return (
    <>
      <div className="post">
        <div className="post_user_details">
          <div className="user_image">
            <img src="https://i1.sndcdn.com/avatars-sqpFyHHydfkys2TW-eUwhog-t500x500.jpg" />
          </div>
          <div className="user_name">
            <h5>Hazem Miri</h5>
            <span>12 hours ago</span>
          </div>
        </div>
        {/* <div className="posst_actions"></div> */}
        {/* <a> Hey! Its my first post </a> */}
        <div className="post_content_details">
          <img
            src="https://images.pexels.com/photos/19539378/pexels-photo-19539378/free-photo-of-femme-cafe-veste-sourire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={likeHandler}
          />

          <div className="post_options">
            <FontAwesomeIcon icon={faThumbsUp} onClick={likeHandler} />
            <a> 32 pepole Like it</a>
            <FontAwesomeIcon icon={faComment} /> <a>9 comment</a>
            <FontAwesomeIcon icon={faShare} />
            <a>20 share</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
