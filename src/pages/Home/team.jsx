import React from "react";
import "./Team.css"
import nick from "../../assets/images/team/nick.jpg";
import kasima from "../../assets/images/team/kasima.jpg";
import michael from "../../assets/images/team/michael.jpg";
import sital from "../../assets/images/team/sital.jpg";
import vishal from "../../assets/images/team/vishal.jpg";
import alex from "../../assets/images/team/alex.jpg";
import yash from "../../assets/images/team/yash.jpg";
import profile2 from "../../assets/images/team/perso2.png";
import profile3 from "../../assets/images/team/perso4.png";
import profile4 from "../../assets/images/team/perso5.png";
import profile5 from "../../assets/images/team/perso3.png";

const employees = [
  {
    name: "Nick Purves",
    title: "Web Developer",
    description:  "Nick's journey began in the industrial heart of the U.K., where he worked as a project engineer on water treatment facilities. His strong problem-solving skills and staunch dedication to his work allowed him to quickly rise through the ranks. In time, Nick found himself taking on more senior positions within large-scale civil projects in Australia.\n\nIt was during his tenure in Australia that Nick broadened his skillset, learning how to develop and manage large-scale projects. He began to understand the complexities of environmental impact and the importance of incorporating sustainability into every aspect of his work. As his interest in the environment and the world around him grew, Nick realised that the next chapter of his life lay far beyond traditional engineering roles.\n\nNick’s career path took a dramatic turn when he moved into business development, applying the valuable project management skills he had developed. He played a pivotal role in conceptualising and developing numerous initiatives in the landscape of sustainable business.\n\nOne of his crowning achievements was when he joined the founding team that conceptualised and built an eco-international school in Thailand. \n\nAs his influence grew, Nick conceptualised and played a key role in the creation of a renewable energy company in Thailand. In doing so, he focused his ingenuity and forward-thinking approach on developing new ventures in the renewable energy sector. His consulting work led to the creation and award of over 150MWp of new clean energy projects. \n\nOne of Nick's latest ventures is his role as a founding member of Ecostruct, a company dedicated to transforming the future of sustainability. He plays a key role in turning visionary ideas into feasible projects, ensuring that nothing stands in the way of a greener tomorrow.",   
    contact: "john.smith@example.com",
    image: nick,
  },
  {
    name: "Yashovardhan Lohia",
    description:
      "Born in the bustling city of New Delhi and raised in the culturally rich country of Thailand, Yash Lohia is the eldest son of Aloke Lohia, the renowned founder of Indorama Ventures PCL (IVL). As a global leader in sustainable chemicals, IVL is headquartered in Thailand and employs more than 26,000 dedicated individuals across more than 35 countries.\n\nYash embarked on his academic journey at the esteemed Warwick Business School in Warwickshire, UK, where he pursued a Bachelor of Engineering Business Management degree. Eager to expand his knowledge and leadership skills, Yash enrolled in the Director Certification Program (DCP), Class 214/2015, at the Thai Institute of Directors Association (IOD) in Thailand.\n\nOver the years, Yash developed a profound personal passion for sustainability, longing to make a significant impact not only within the chemicals industry but also on a global scale. As a result, in 2019, he became IVL's first-ever Chief Recycling Officer, and later, the Chief Sustainability Officer. Since taking on these vital roles, Yash's visionary leadership has been instrumental in defining IVL's path to Sustainability, including the ambitious goal of recycling 50 billion polyethylene terephthalate (PET) bottles per year by 2025. This transformative ambition is further complemented by a staggering US $1.5 billion investment to build the recycling infrastructure necessary for diverting waste from the world's marine ecosystems.\n\nIn addition to his invaluable contributions to IVL, Yash Lohia is a successful entrepreneur and established businessman with numerous directorship roles. He frequently shares his insights on sustainability through public speaking engagements, including delivering keynote speeches at prestigious events. As a prominent member of several esteemed organisations, such as the Young Presidents' Organization (YPO), Yash continues to inspire and shape the future of sustainability in the global chemicals industry and beyond.",
    contact: "jane.doe@example.com",
    image: yash,
  },
  {
    name: "Mark Briscombe",
    description:
      "As a native Lancashire lad, Mark pursued higher education at the esteemed University of Manchester, where he excelled in physics and secured a hard-earned master's degree.\n\nAfter conquering the world of academics, Mark stepped into the realm of corporate finance, where he delved into the intricacies of the global economy. Yet, his unquenchable thirst for knowledge soon led him back to the realms of education. This time, he ventured into the field of chemical engineering, expanding his skills and aligning them with his ever-evolving interests.\n\nMark's innovative spirit shone through as he transitioned into consulting on environmental financial solutions. His expertise in diverse fields allowed him to recognize the most prudent ways to balance fiscal responsibility and ecological sustainability. Surrounded by new ideas, Mark felt the drive for intellectual growth once more and embarked on yet another academic journey, pursuing a Ph.D. in mathematics.\n\nIt was in the year 2011, a time marked by the rapid emergence of new technologies, that Mark had his first encounter with blockchain. Recognizing the transformative potential of this technology, he immersed himself in it, securing various senior positions at prominent institutions like Telenor and Aquifer Institute. As a natural innovator, Mark became a critical part of the founding team of Nahmii AS, where he leveraged his background in various fields to conceptualise groundbreaking blockchain-based products that would later be recognized by the European Patent Office.\n\nToday, Mark is a proud member of the founding team at Ecostruct. His extensive expertise in progressive technologies, finance, and environmental engineering plays an indispensable role in shaping the company's direction. With a keen eye for visionary ideas, Mark continues to push boundaries in technology and sustainability, validating novel concepts that have the potential to make a lasting impact on the world.",
    contact: "mike.johnson@example.com",
    image: profile4,
  },
  {
    name: "Michael Soon",
    description:
      "With a strong focus on manufacturing and supplying tier-1 components, Gold Stone Energy and its various subsidiaries have made significant strides in the renewable energy and storage sector. As a company, they specialise in the production of solar cells, battery components, and other state-of-the-art instruments that cater to the global market's increasing demand for sustainable resources.\n\nUnder Michael's dynamic leadership, Gold Stone Energy has spent two decades establishing itself as a trailblazer in the renewable energy and storage markets. His relentless pursuit of innovative solutions and his dedication to serving the global marketplace have cemented Michael's reputation as an industry titan.\n\nAside from his key role at Gold Stone Energy, Michael also lends his expertise as a valuable member of several high-profile boards of directors. His vast network and strong business relationships have been vital assets in creating numerous entrepreneurial opportunities, including the Ecostruct project.\n\nToday, Michael remains a prominent figure in the world of renewable energy and storage, consistently applying his knowledge and vision to foster growth and sustainability in the sector.",
    contact: "david.lee@example.com",
    image: michael,
  },

]

const employees2 = [
 
  {
    name: "Sital Gill",
    description:
      "David is a user experience designer with a strong focus on creating intuitive and user-friendly interfaces. He is skilled in wireframing, prototyping, and user testing, and has experience with popular design tools like Sketch and Figma.",
    contact: "david.lee@example.com",
    image: sital,
  },
  {
    name: "Kasima Tharnpipitchai",
    description:
      "Kasima, a highly-regarded expert in the field of computer science and digital product development, hails from the sunny state of California. After completing their studies in computer science at the prestigious Maryland University, Kasima went on to make a significant impact on a multitude of successful start-ups, holding senior positions alongside well-known entities and entrepreneurs.\n\nOver the course of their career, Kasima gained valuable experience from a range of companies, enhancing their unique skill set. As Senior Software Engineer at GutHub (sic), they undoubtedly showcased their talent for programming and problem-solving. Later, taking on the role of Chief Technology Officer for OmiseGo, Kasima further solidified their position as an expert in progressive technology. Among other accomplishments, their time as resident entrepreneur at SCB10X presented remarkable opportunities to collaborate with like-minded professionals and develop cutting-edge products.\n\nKasima's expertise in the tech industry, particularly in the blockchain space, has been crucial in successfully launching an array of new start-ups. As a founding member of Ecostruct, their innate talent for project development is instrumental to the continued growth and success of the company.\n\nOverall, Kasima's diverse exposure to different sectors, combined with their dedication and skillful approach to developing digital products, has led to a sterling professional reputation. As an experienced leader and sought-after expert, Kasima stands as an inspiration to others in the industry, continuously breaking boundaries and driving innovation.",
    contact: "david.lee@example.com",
    image: kasima,
  },
  {
    name: "Vishal Kedia",
    description:
      "Vishal, born and raised in Bangkok, Thailand, is an accomplished global business leader and entrepreneur, renowned for his impressive track record in the pharmaceutical industry. After graduating from Pace University in New York with a degree in International Business, he quickly put his entrepreneurial spirit to work, founding Vexxa Life Sciences, VE Group, and Unique Group. Through his leadership and innovative ideas, Vishal built a pharmaceutical empire that focuses on providing affordable essential medicines to international markets.\n\nOver the course of two decades, Vishal established an expansive portfolio of 18 companies, spanning multiple industries, showcasing his expert approach and invaluable experience in turning various business ideas into thriving enterprises. His remarkable achievements have made him a prominent figure in the business world.\n\nVishal's extensive knowledge of global markets and his drive for innovation have significantly benefited Ecostruct. His unwavering determination, coupled with his professional acumen, has allowed Vishal to achieve great success in the pharmaceutical industry and beyond, enhancing the lives of millions worldwide.",
    contact: "david.lee@example.com",
    image: vishal,
  },
  {
    name: "Alex Wood",
    description:
      "Alex, a highly accomplished and distinguished professional hailing from the United Kingdom, boasts an impressive academic background and over three decades of experience in the field of corporate strategy and mergers and acquisitions.\n\nAlex's educational journey encompasses a degree from the esteemed London School of Economics, followed by a Master of Studies (MSt) from the prestigious University of Oxford.\n\nThroughout Alex's 30-year career, Asia has been the primary focus, providing a depth of experience in the region's economic landscape. Demonstrating strong leadership and market acuity, Alex reached the pinnacle of success by serving as Chairman for Indochina Energy - a key organization within the Asian energy sector. Concurrently, Alex's acumen as an entrepreneur is exemplified in the co-founding of AWR Lloyd, an award-winning consultancy firm focused on sustainable strategy, where Alex holds the position of CEO.\n\nAt AWR Lloyd, Alex employs a unique blend of financial expertise and environmental consciousness to support a broad range of clients, including governments, international corporations, and innovative start-ups. With an emphasis on sustainable growth and renewable energy, Alex's influence in the energy sector significantly contributes to the development and implementation of environmentally-friendly initiatives.\n\nIn essence, Alex is an entrepreneur, financial expert, and global leader in sustainable strategy, underscored by a consistent effort to create a greener and more sustainable future. This dedication to the environment, paired with an expansive career in corporate strategy and mergers and acquisitions, allows Alex to establish a lasting impact on the world stage, building a legacy defined by excellence, innovation, and responsibility.",
    contact: "david.lee@example.com",
    image: alex,
  },
];

const Team = () => {
  const [activeCardIndex, setActiveCardIndex] = React.useState(null);

  const handleCardClick = (index) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
  };

  return (
    <div className="section">
         <h1>Our <span>Team</span></h1>
         <div className="background_cont">
    <div className="team">
      {employees.map((employee, index) => (
      <div class="container"  style={{ backgroundImage: `url(${employee.image})` }}
      key={index}>
      <div class="content">
        <h4 className="name">{employee.name}</h4>
        <p className="description" >      {employee.description.split("\n\n").map((paragraph, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>  <p>{paragraph}</p>
                </div> ))}
                </p>
      </div>
      <div class="flap"></div>
    </div>
      ))}
    </div>
     <div className="team">
     {employees2.map((employee, index) => (
     <div class="container"  style={{ backgroundImage: `url(${employee.image})` }}
     key={index}>
     <div class="content">
       <h4 className="name">{employee.name}</h4>
       <p className="description" >      {employee.description.split("\n\n").map((paragraph, index) => (
               <div key={index} style={{ marginBottom: "20px" }}>  <p>{paragraph}</p>
               </div> ))}
               </p>
     </div>
     <div class="flap"></div>
   </div>
     ))}
   </div>
   </div>
   </div>
  );
};

export default Team;
