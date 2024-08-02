import Topbar2 from "../../components/topbar2/Topbar2"
import "./description.css"
import descriptionImage from "../../assets/image 1.png";

export default function Description() {
  return (
    <>
    <Topbar2/>
    <div class="desccontainer">
    <div className="descWrap">
    <div className="description-container">
        <h4>Tree 1</h4>
        <p class="subtitle">Three Leaf Clover, symbolizes good luck and fortune in many cultures.</p>
        
        <div class="plant-care">
            <h4>Plant Care Guide</h4>
            <div class="care-item">
                <span>Water&nbsp;&nbsp;</span>
                <p>Allow the soil to dry out completely before watering.</p>
            </div>
            <div class="care-item">
                <span>Light&nbsp;&nbsp;</span>
                <p>Bright indirect light environments.</p>
            </div>
            <div class="care-item">
                <span>Tips&nbsp;&nbsp;</span>
                <p>Gently insert a toothpick into the soil to determine if your plant needs watering.</p>
            </div>
        </div>
        
        <div class="description">
            <h4>Description</h4>
            <p>A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.</p><br/>
            <p>Plants images depicted are solely for illustration purposes only</p>
        </div>
        </div>
        <div class="image-container">
            <img src={descriptionImage} alt="Three Leaf Clover"/>
        </div>
    </div>
    </div>
    </>
  )
}
