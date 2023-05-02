import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };


  return (
   <Slider {...settings}>
              <div className="slide">
              <p className="fade-in slideHero">
              Ecostruct is a visionary new holding company, driven by an unwavering passion for catalysing climate action worldwide. 
        </p>
              </div>
              <div className="slide">
                  <p>Our mission lies in bridging the gap between creativity and practicality, fostering a future marked by a thriving environment and sustainable human development. We wholeheartedly support and facilitate conversations, research, and collaborations between stakeholders across various sectors, including governments, private enterprises, non-governmental organisations, and individual citizens.</p>
                  
              </div>
              <div className="slide">
              <p>Through this interconnected web of partnerships, we aim to drive impactful change by generating groundbreaking ideas, implementing effective strategies, and developing cutting-edge technologies. Our ultimate objective is to equip today's generation with the tools and knowledge necessary to shape a prosperous and sustainable future for generations to come.
              </p>
             
                              </div>
              <div className="slide">
              <p>Join us on this global journey towards environmental resilience, as we champion and invest in unique solutions that address critical challenges head-on – from combating climate change to preserving ecosystems, optimising resource utilisation, and promoting sustainable urbanisation.
</p>
                
              </div>
              <div className="slide">
              <p>Together, we can cultivate a vibrant ecosystem of innovation, ensuring that our beautiful planet continues to flourish and sustain life for countless years to come. Ecostruct invites you to be an integral part of this mission, as we work hand-in-hand to spark a green revolution that lays the foundation for a thriving and sustainable Earth.</p>
              </div>
              <div className="slide">
              <p>At Ecostruct, we recognize that fostering equality and embracing diversity are critical pillars in achieving a sustainable future. Emphasising these values not only fosters a fair and inclusive environment for innovation, but also helps us identify unique perspectives and creative solutions in the fields of eco-technology and sustainable development.</p>
              </div>
          </Slider>
  );
}