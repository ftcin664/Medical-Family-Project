import "./Post.scss";
import { Button, Container, Dropdown } from "react-bootstrap";
import ThreeDots from "../../assets/images/3 dots.svg";
import ThreeDotsGrey from "../../assets/images/3DotsGrey.svg";
import PPCoin from "../../assets/images/PP-coin.svg";
import ProfileImage from "../../assets/images/home-page-post.png";
import CommentImage from "../../assets/images/Comment1.png";
import LinkIcon from "../../assets/icons/post/Link-icon.svg";
import Verified from "../../assets/icons/post/Verified.svg";
import like from "../../assets/images/like.svg";
import message from "../../assets/images/message.svg";
import share from "../../assets/images/share.svg";
import commonImage from "../../assets/images/common-like-share.png";
import postImage from "../../assets/images/post-image.svg";
import postImage2 from "../../assets/images/post-2.svg";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="pb-3">
      <div className="main-post-line same_shadow_border bg_secondary py-3 px-4 mt-3 ">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex align-items-center">
            <img className="avatar me-2 rounded-pill" src={ProfileImage} />
            <div className="d-flex flex-column">
              <span className="d-flex align-items-center mb-1">
                <span className="name">Erina Yamashita</span>
                <img className="verified-icon ms-1" src={Verified} alt="" />
                <Link className="line-height-0">
                  <img className="link-icon" src={LinkIcon} alt="" />
                </Link>
              </span>
              <div className="post-location">
                1946 , Dallas , US <br />

                <span className="coins-counter">
                  <span className="number">
                    10
                  </span>
                  <img className="img-fluid" src={PPCoin} />

                  Erica Sinclair

                </span>
              </div>
            </div>
          </div>
          <Button className="post-line-btn p-0" variant="transparent">
            <img className="img-fluid" src={ThreeDots} />
          </Button>
        </div>
        <div className="post-content mb-3">
          👋🏼 Hey guys.. <br />
          check out this beautiful landing page for JW company I
          just finished for a client. 😄
        </div>
        <div className="mb-1 d-flex justify-content-between align-items-center">
          <span className="comment-likes">3.4k Comments . 46 Shares . 46 Likes</span>
          <span className="comment-likes">
            8:20 AM <span>10/12/2024</span>
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <img src={like} alt="loading-like-img" className="like-img" />
            <img src={message} alt="loading-like-img" className="like-img" />
            <img src={share} alt="loading-like-img" className="like-img" />
          </div>
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0 comment-likes">Q&A with Mark & 361k others</p>
            <img className="emojis img-fluid" src={commonImage} alt="common-img" />
          </div>
        </div>
        <hr className="horizontal-line-between-comment" />
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex">
            <img className="comment-avatar me-2 rounded-pill" src={CommentImage} />
            <div>
              <span className="comment-user-name">Mark Ramos</span>
              <br />
              <p className="m-0 post-location">
                Greet work! Well done girl. 👏🏽{" "}
              </p>
              <p className="d-flex gap-3 comment-actions mb-0">
                <span className="like">Like</span>
                <span className="reply">Reply</span>
                <span className="time">2m</span>
              </p>
            </div>
          </div>
          <Button variant="transparent comment-menu" className="p-0">
            <img className="img-fluid" src={ThreeDotsGrey} alt="" />

          </Button>
        </div>
      </div>
      <div className="main-post-line same_shadow_border bg_secondary py-3 px-4 mt-3 ">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex align-items-center">
            <img className="avatar me-2 rounded-pill" src={ProfileImage} />
            <div className="d-flex flex-column">
              <span className="d-flex align-items-center mb-1">
                <span className="name">Erina Yamashita</span>
                <img className="verified-icon ms-1" src={Verified} alt="" />
                <Link className="line-height-0">
                  <img className="link-icon" src={LinkIcon} alt="" />
                </Link>
              </span>
              <div className="post-location">
                1946 , Dallas , US <br />

                <span className="coins-counter">
                  <span className="number">
                    10
                  </span>
                  <img className="img-fluid" src={PPCoin} />

                  Erica Sinclair

                </span>
              </div>
            </div>
          </div>
          <Button className="post-line-btn p-0" variant="transparent">
            <img className="img-fluid" src={ThreeDots} />
          </Button>
        </div>
        <div className="image-post-content mb-3">
          Hey pals, guess what? 🎉 I've just wrapped up crafting these mind-blowing 3D wallpapers, drenched in the coolest of the cool colors! 🌈💎
        </div>
        <div className="d-flex justify-content-between mb-3">
          <img src={postImage} alt="post-image" className="img-fluid post-inner-img" />
          <img src={postImage2} alt="post-image" className="img-fluid post-inner-img" />
          <img src={postImage} alt="post-image" className="img-fluid post-inner-img" />
        </div>
        <div className="mb-1 d-flex justify-content-between align-items-center">
          <span className="comment-likes">3.4k Comments . 46 Shares . 46 Likes</span>
          <span className="comment-likes">
            8:20 AM <span>10/12/2024</span>
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <img src={like} alt="loading-like-img" className="like-img" />
            <img src={message} alt="loading-like-img" className="like-img" />
            <img src={share} alt="loading-like-img" className="like-img" />
          </div>
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0 comment-likes">Q&A with Mark & 361k others</p>
            <img className="emojis img-fluid" src={commonImage} alt="common-img" />
          </div>
        </div>
        <hr className="horizontal-line-between-comment" />
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex">
            <img className="comment-avatar me-2 rounded-pill" src={CommentImage} />
            <div>
              <span className="comment-user-name">Mark Ramos</span>
              <br />
              <p className="m-0 post-location">
                Greet work! Well done girl. 👏🏽{" "}
              </p>
              <p className="d-flex gap-3 comment-actions mb-0">
                <span className="like">Like</span>
                <span className="reply">Reply</span>
                <span className="time">2m</span>
              </p>
            </div>
          </div>
          <Button variant="transparent comment-menu" className="p-0">
            <img className="img-fluid" src={ThreeDotsGrey} alt="" />

          </Button>
        </div>
      </div>
      <div className="main-post-line same_shadow_border bg_secondary py-3 px-4 mt-3 ">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex align-items-center">
            <img className="avatar me-2 rounded-pill" src={ProfileImage} />
            <div className="d-flex flex-column">
              <span className="d-flex align-items-center mb-1">
                <span className="name">Erina Yamashita</span>
                <img className="verified-icon ms-1" src={Verified} alt="" />
                <Link className="line-height-0">
                  <img className="link-icon" src={LinkIcon} alt="" />
                </Link>
              </span>
              <div className="post-location">
                1946 , Dallas , US <br />

                <span className="coins-counter">
                  <span className="number">
                    10
                  </span>
                  <img className="img-fluid" src={PPCoin} />

                  Erica Sinclair

                </span>
              </div>
            </div>
          </div>
          <Button className="post-line-btn p-0" variant="transparent">
            <img className="img-fluid" src={ThreeDots} />
          </Button>
        </div>
        <div className="post-content mb-3">
          👋🏼 Hey guys.. <br />
          check out this beautiful landing page for JW company I
          just finished for a client. 😄
        </div>
        <div className="mb-1 d-flex justify-content-between align-items-center">
          <span className="comment-likes">3.4k Comments . 46 Shares . 46 Likes</span>
          <span className="comment-likes">
            8:20 AM <span>10/12/2024</span>
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <img src={like} alt="loading-like-img" className="like-img" />
            <img src={message} alt="loading-like-img" className="like-img" />
            <img src={share} alt="loading-like-img" className="like-img" />
          </div>
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0 comment-likes">Q&A with Mark & 361k others</p>
            <img className="emojis img-fluid" src={commonImage} alt="common-img" />
          </div>
        </div>
        <hr className="horizontal-line-between-comment" />
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex">
            <img className="comment-avatar me-2 rounded-pill" src={CommentImage} />
            <div>
              <span className="comment-user-name">Mark Ramos</span>
              <br />
              <p className="m-0 post-location">
                Greet work! Well done girl. 👏🏽{" "}
              </p>
              <p className="d-flex gap-3 comment-actions mb-0">
                <span className="like">Like</span>
                <span className="reply">Reply</span>
                <span className="time">2m</span>
              </p>
            </div>
          </div>
          <Button variant="transparent comment-menu" className="p-0">
            <img className="img-fluid" src={ThreeDotsGrey} alt="" />

          </Button>
        </div>
      </div>
      <div className="main-post-line same_shadow_border bg_secondary py-3 px-4 mt-3 ">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex align-items-center">
            <img className="avatar me-2 rounded-pill" src={ProfileImage} />
            <div className="d-flex flex-column">
              <span className="d-flex align-items-center mb-1">
                <span className="name">Erina Yamashita</span>
                <img className="verified-icon ms-1" src={Verified} alt="" />
                <Link className="line-height-0">
                  <img className="link-icon" src={LinkIcon} alt="" />
                </Link>
              </span>
              <div className="post-location">
                1946 , Dallas , US <br />

                <span className="coins-counter">
                  <span className="number">
                    10
                  </span>
                  <img className="img-fluid" src={PPCoin} />

                  Erica Sinclair

                </span>
              </div>
            </div>
          </div>
          <Button className="post-line-btn p-0" variant="transparent">
            <img className="img-fluid" src={ThreeDots} />
          </Button>
        </div>
        <div className="image-post-content mb-3">
          Hey pals, guess what? 🎉 I've just wrapped up crafting these mind-blowing 3D wallpapers, drenched in the coolest of the cool colors! 🌈💎
        </div>
        <div className="d-flex justify-content-between mb-3">
          <img src={postImage} alt="post-image" className="img-fluid post-inner-img" />
          <img src={postImage2} alt="post-image" className="img-fluid post-inner-img" />
          <img src={postImage} alt="post-image" className="img-fluid post-inner-img" />
        </div>
        <div className="mb-1 d-flex justify-content-between align-items-center">
          <span className="comment-likes">3.4k Comments . 46 Shares . 46 Likes</span>
          <span className="comment-likes">
            8:20 AM <span>10/12/2024</span>
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <img src={like} alt="loading-like-img" className="like-img" />
            <img src={message} alt="loading-like-img" className="like-img" />
            <img src={share} alt="loading-like-img" className="like-img" />
          </div>
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0 comment-likes">Q&A with Mark & 361k others</p>
            <img className="emojis img-fluid" src={commonImage} alt="common-img" />
          </div>
        </div>
        <hr className="horizontal-line-between-comment" />
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex">
            <img className="comment-avatar me-2 rounded-pill" src={CommentImage} />
            <div>
              <span className="comment-user-name">Mark Ramos</span>
              <br />
              <p className="m-0 post-location">
                Greet work! Well done girl. 👏🏽{" "}
              </p>
              <p className="d-flex gap-3 comment-actions mb-0">
                <span className="like">Like</span>
                <span className="reply">Reply</span>
                <span className="time">2m</span>
              </p>
            </div>
          </div>
          <Button variant="transparent comment-menu" className="p-0">
            <img className="img-fluid" src={ThreeDotsGrey} alt="" />

          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
