import "./topbar.css"
import { Link } from "react-router-dom"
import TopbarImage1 from "../../assets/profile.jpg";

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">B.planet</span>
        </div>
        <div className="topbarCenter">
          <Link to="/home/contact" style={{textDecoration: 'none', color: 'black'}}>
          <span className="topbarLink">Contact Us</span>
          </Link>
        </div>
        <div className="topbarRight">
            <span className="topbarLink">
              <Link to="/home/profile" style={{textDecoration: 'none', backgroundColor: 'rgb(185, 180, 151)'}}>
              <img src={TopbarImage1} alt="profile" className="topbarImg"/>
              </Link>
            </span>
        </div>
    </div>
  )
}
