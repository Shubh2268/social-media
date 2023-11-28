import "./post.scss";
import { MdOutlineMoreHoriz, MdOutlineFavoriteBorder, MdOutlineFavorite, MdOutlineTextsms, MdOutlineShare } from "react-icons/md";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {

  const [commentsOpen, setCommentsOpen] = useState(false);

  // TEMPORARY
  const liked = false;

  return (
    <div className='post'>
      <div className="container">

        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MdOutlineMoreHoriz />
        </div>

        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>

        <div className="info">
          <div className="item">
              {liked ? <MdOutlineFavorite/> : <MdOutlineFavoriteBorder/>}
              12 Likes
          </div>

          <div className="item" onClick={() =>setCommentsOpen(!commentsOpen)}>
              <MdOutlineTextsms/>
              5 Comments
          </div>

          <div className="item">
              <MdOutlineShare/>
              2 Shares
          </div>
        </div>

        {commentsOpen && <Comments />}

      </div>

    </div>
  )
}

export default Post
