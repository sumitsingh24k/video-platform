import React from 'react'
import './Navbar.css'
import menuicon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'
const Navbar = ({setSidebar}) => {
  return (
    <nav className='flexdiv'>
      <div className="navleft flexdiv">
        <img className='menuicon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menuicon}alt="" />
        <Link to='/'><img className='logo' src={logo} alt="" /></Link>
      </div>
      <div className="navmiddle flexdiv">
        <div className='searchbox flexdiv'> 
        <input type="text" placeholder='search'/>
        <img className='search' src={search_icon} alt="" />
        </div>
      </div>
      <div className="navright flexdiv" >
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='usericon'alt="" />
      </div>
    </nav>
  )
}

export default Navbar
