import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import NewsCard from "../../components/Card/NewsCard";
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import news1 from "../../assets/images/com.jpg"

const NewsBlog = () => {
  const { id } = useParams()

  const [data, setAlldata] = useState([]); // <-- array
  let i = id

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:1337/api/articles?populate=%2A")
      .then((response) => response.json())
      .then(({ data }) => setAlldata(data)); // <-- save the data array
  }, []);
;

  return (
    <main className="news_detail_page">
      <div className="cs_container">
        <div className="cs_row news_detail_row">
          <div className="news_detail_sec">
          
             <Fade bottom duration={1000} delay={100}>
        <h2>Ecostruct Holdings Announces Incorporation and Secures USD 400k in Startup Capital</h2>
        </Fade>
             <Fade bottom duration={1000} delay={100}>
        <h4></h4>
        </Fade>
            <Zoom bottom duration={1500} delay={150}>
              <div className="news_detail_img d_flex justify_content_center align_items_center">
    
         <img
         src="https://img.freepik.com/free-photo/person-pressing-power-button_23-2150040438.jpg" alt={news1}
       />
              </div>
            </Zoom>
            <Fade bottom duration={1000} delay={200}>
              <p>
              February 27, 2023 - Ecostruct Holdings is overjoyed to announce its official incorporation, marking a new chapter in its mission to accelerate climate action. Alongside this significant milestone, the company has successfully secured USD 400,000 in startup capital to commence work on their flagship project, an initiative that has generated considerable excitement among industry insiders.
              </p> <p>
While specific details about the flagship project are being kept under wraps for now, Ecostruct Holdings is eager to develop their first in a series of unique startups. These ventures aim to have a profound impact on global climate action by accelerating funding and driving long-term, sustainable development in the environmental sector.
</p> <p>
The secured funds, which come from a mixture of investors and partners enthusiastic about backing Ecostruct's vision, will be instrumental in accelerating the growth of this start-up. With this startup capital, the company will be well-positioned to build a talented team, create groundbreaking technologies, and enter new markets.
</p> <p>
Ecostruct Holdings is committed to working diligently to ensure that its flagship project becomes a catalyst for innovative strategies, policies, and technologies that mitigate climate-related risks and enable a more resilient, sustainable future for all.
</p><p>
Stay tuned for more news and announcements from Ecostruct Holdings as they develop and launch groundbreaking solutions to address climate challenges on a global scale.

              </p>
            </Fade>
          </div>
          <div className="news_detail_related_sec">
            <Fade top duration={1000} delay={120}>
              <h2>Related News</h2>
            </Fade>
            <div className="news_card_row">
    
                <div className="news_col">
               
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsBlog;
