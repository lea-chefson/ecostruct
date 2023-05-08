import "./style.css";
import Hero from "./Hero";
import Introduction from "./introduction";
import Team from "./team";

//
import mainLogo from "../../assets/images/logo2.jpg";
import Subsidiaries from "./Subsidiaries";
import OurStory from "./Our Story";

const Home = () => {
  return (
    <main>
      <Hero />
      <Introduction/>
      <Subsidiaries/>
      <OurStory/>
      <Team/>
          </main>
          
  );
};

export default Home;
