import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';

import news1 from "../../assets/images/section5.png"


const NewsCard1 = () => {
  return (
    <div className="news_wrap">
    <Link to={`/news-blog/news`} className="news_card">
         <img
         src="https://img.freepik.com/free-photo/person-pressing-power-button_23-2150040438.jpg" alt="news1"
       />
      <div className="news_card_content">
        <h2>Ecostruct Holdings Announces Incorporation and Secures USD 400k in Startup Capital
</h2>
         <p>February 27, 2023 - Ecostruct Holdings is overjoyed to announce its official incorporation, marking a new chapter in its mission to accelerate climate action.</p>
      </div>
    </Link>
    </div>
  );
};

export default NewsCard1;
