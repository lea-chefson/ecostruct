import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';

import news1 from "../../assets/images/section5.png"


const NewsCard1 = () => {
  return (
    <div className="news_wrap">
    <Link to={`/news-blog/news`} className="news_card">
         <img
         src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="news1"
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
