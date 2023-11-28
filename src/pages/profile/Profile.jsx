import './profile.scss';
import { MdFacebook, MdOutlinePlace, MdLanguage, MdOutlineMailOutline, MdOutlineMoreVert } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className='profile'>

      <div className="images">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="cover" />
        <img src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" className="profilePic" />
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <MdFacebook size={20}/>
            </a>
            <a href="http://instagram.com">
              <FaInstagram size={20}/>
            </a>
            <a href="http://twitter.com">
              <FaTwitter size={20}/>
            </a>
            <a href="http://pinterest.com">
              <FaPinterest size={20}/>
            </a>
            <a href="http://linkedin.com">
              <FaLinkedin size={20}/>
            </a>
          </div>

          <div className="center">
            <span>Golu Baba</span>
            <div className="info">
              <div className="item">
                <MdOutlinePlace/>
                <span>IND</span>
              </div>
              <div className="item">
                <MdLanguage/>
                <span>Shubh.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>

          <div className="right">
            <MdOutlineMailOutline/>
            <MdOutlineMoreVert/>
          </div>

        </div>
        <Posts/>
      </div>

    </div>
  )
}

export default Profile
