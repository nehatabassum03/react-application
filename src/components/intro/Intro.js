import "./intro.css"
import IntroPlant from "../../assets/hero image 2.png";
import IntroPlant2 from "../../assets/Hero image 1.png";

export default function Intro() {
  return (
    <div class="introcontainer">
        <div class="messagecontainer">
            <div class="messagebox">'As   interesting <br/>as   a   plant'</div>
        </div>
        <div class="imagecontainer">
            <div class="imagebox">
                <img src={IntroPlant} alt="Plant"/>
                <img src={IntroPlant2} alt="Plant"/>
            </div>
        </div>
    </div>
  )
}
