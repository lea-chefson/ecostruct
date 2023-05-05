import homeVideo from "../../assets/videos/mainVideo.mp4";
import logo from "../../assets/images/logo_centre.png";
import { Link } from "react-router-dom";
import SimpleSlider from "./slicker";




const Hero = (props) => {

  return (
    <>
      <div className="overlay">
        <img src={logo} alt="" className="scale-in-center"/>
        <h3 className="scale-in-center">Ecostruct is a visionary new holding company, driven by an unwavering passion for catalysing climate action worldwide. </h3>
        <Link to="/contact" className="scale-in-center"><button>Contact Us</button></Link>
      </div>
      <div className="hero">
        <video controls={false} autoPlay loop={true} muted playsInline>
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Hero;
