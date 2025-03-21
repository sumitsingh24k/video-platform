import React from 'react'
import './Sidebar.css'
import Home from '../../assets/home.png'
import Game_icon from '../../assets/Game_icon.png'
import automobile from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
const Sidebar = ({sidebar,category,setcategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"} ` }>
      <div className="sortcutlinks">
        <div className={`sidelinks ${category===0?"active":""}`} onClick={()=>setcategory(0)}>
            <img src={Home} alt="" /><p>Home</p>
        </div>
        <div className={`sidelinks ${category===20?"active":""}`} onClick={()=>setcategory(20)}>
            <img src={Game_icon} alt="" /><p>Gaming</p>
        </div>
        <div className={`sidelinks ${category===2?"active":""}`} onClick={()=>setcategory(2)}>
            <img src={automobile} alt="" /><p>Automobile</p>
        </div>
        <div className={`sidelinks ${category===17?"active":""}`} onClick={()=>setcategory(17)}>
            <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className={`sidelinks ${category===24?"active":""}`} onClick={()=>setcategory(24)}>
            <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className={`sidelinks ${category===28?"active":""}`} onClick={()=>setcategory(28)}>
            <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className={`sidelinks ${category===10?"active":""}`} onClick={()=>setcategory(10)}>
            <img src={music} alt="" /><p>Music</p>
        </div>
        <div className={`sidelinks ${category===22?"active":""}`} onClick={()=>setcategory(22)}>
            <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className={`sidelinks ${category===25?"active":""}`} onClick={()=>setcategory(25)}>
            <img src={news} alt="" /><p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribedlist">
        <h3>Subscribed</h3>
        <div className="sidelink">
            <img src={jack} alt="" /><p>PewDiePie</p>
        </div>
        <div className="sidelink">
            <img src={simon} alt="" /><p>MrBeast</p>
        </div>
        <div className="sidelink">
            <img src={tom} alt="" /><p>Justin Bieber</p>
        </div>
        <div className="sidelink">
            <img src={megan} alt="" /><p>5-minute Craft</p>
        </div>
        <div className="sidelink">
            <img src={cameron} alt="" /><p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
