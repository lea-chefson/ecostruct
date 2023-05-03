import homeVideo from "../../assets/videos/mainVideo.mp4";
import logo from "../../assets/images/logo.png";
import SimpleSlider from "./slicker";




const Hero = (props) => {

  return (
    <>
      <div className="overlay">
        <img src={logo} alt="" className="scale-in-center"/>
        <h3>Ecostruct is a visionary new holding company, driven by an unwavering passion for catalysing climate action worldwide. </h3>
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
