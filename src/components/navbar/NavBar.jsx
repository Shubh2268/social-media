import React, { useContext } from 'react'
import "./navbar.scss";
import { TiHomeOutline } from "react-icons/ti";
import { FiMoon, FiSun, FiGrid } from "react-icons/fi";
import { MdNotificationsNone, MdOutlineMailOutline, MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const NavBar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>

      <div className="left">
        <Link to='/' style={{textDecoration:'none'}}>
        <span>ShubhSocial</span>
        </Link>
        <TiHomeOutline size={20}/>
        {darkMode ? <FiSun size={20} onClick={toggle}/> : <FiMoon size={20} onClick={toggle}/>}
        <FiGrid size={20}/>
        <div className="search">
          <AiOutlineSearch/> 
          <input type="text" placeholder='Search...' />
        </div>
      </div>

      <div className="right">
        <MdOutlinePersonOutline size={20}/>
        <MdOutlineMailOutline size={20}/>
        <MdNotificationsNone size={20}/>
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>

    </div>
  )
}

export default NavBar
