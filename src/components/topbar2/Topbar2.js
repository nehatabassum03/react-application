import "./topbar2.css"
import { Link } from "react-router-dom"

export default function Topbar2() {
  return (
    <div className="topbarContainer2">
        <div className="topbarLeft2">
            <span className="logo2">B.planet</span>
        </div>
        <div className="topbarRight2">
            <span className="topbarLink2">
            <Link to="/home/contact" style={{textDecoration: 'none', backgroundColor: 'rgb(212, 210, 199)', color: 'black'}}>Contact Us
        </Link>
        </span>
        </div>
    </div>
  )
}
