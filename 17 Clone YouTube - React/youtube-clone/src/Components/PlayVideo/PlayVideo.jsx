import React from "react";
import "./PlayVideo.css";
import video from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video} controls autoPlay muted></video>
      <h3>Best Youtube Channel To Learn Web Development.</h3>
      <div className="play-video-info">
        <p>1331 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />
            125
          </span>
          <span>
            <img src={share} alt="" />
            125
          </span>
          <span>
            <img src={save} alt="" />
            125
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Sethi Tech</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel That Makes Learning Easy.</p>
        <p>
          Subscribe Sethi Tech Youtube Channel To Watch More Tutorial On The Web
          Development.
        </p>
        <hr />
        <h4>130 Comments</h4>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Raghav Sethi <span>1 day ago</span>
            </h3>
            <p>
              A global computer providing a variety of information and cc of
              interconnected networks using standardize communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>213</span>
              <img src={dislike} alt="" />
              <span>13</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Raghav Sethi <span>1 day ago</span>
            </h3>
            <p>
              A global computer providing a variety of information and cc of
              interconnected networks using standardize communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>213</span>
              <img src={dislike} alt="" />
              <span>13</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Raghav Sethi <span>1 day ago</span>
            </h3>
            <p>
              A global computer providing a variety of information and cc of
              interconnected networks using standardize communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>213</span>
              <img src={dislike} alt="" />
              <span>13</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Raghav Sethi <span>1 day ago</span>
            </h3>
            <p>
              A global computer providing a variety of information and cc of
              interconnected networks using standardize communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>213</span>
              <img src={dislike} alt="" />
              <span>13</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Raghav Sethi <span>1 day ago</span>
            </h3>
            <p>
              A global computer providing a variety of information and cc of
              interconnected networks using standardize communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>213</span>
              <img src={dislike} alt="" />
              <span>13</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
