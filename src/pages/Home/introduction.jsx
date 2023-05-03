import React from 'react';
import { ReactComponent as Icon1 } from '../../assets/images/iconC.svg';
import { ReactComponent as Icon2 } from '../../assets/images/iconD.svg';
import { ReactComponent as Icon3 } from '../../assets/images/iconE.svg';
import { ReactComponent as Icon4 } from '../../assets/images/iconB.svg';
import { ReactComponent as Icon5 } from '../../assets/images/iconA.svg';

export default function Introduction() {
  return (
    <div className='introduction'>
        <div className="group-text">
            <Icon1 className="icon"/>
            <p >Our mission lies in bridging the gap between creativity and practicality, fostering a future marked by a thriving environment and sustainable human development. We wholeheartedly support and facilitate conversations, research, and collaborations between stakeholders across various sectors, including governments, private enterprises, non-governmental organisations, and individual citizens.</p>
            </div>
            <div className="group-text">
                <Icon2 className='icon'/>
            <p >
            Through this interconnected web of partnerships, we aim to drive impactful change by generating groundbreaking ideas, implementing effective strategies, and developing cutting-edge technologies. Our ultimate objective is to equip today's generation with the tools and knowledge necessary to shape a prosperous and sustainable future for generations to come.
            </p>
            </div>
            <div className="group-text">
            <Icon3 className='icon'/>
            <p >Join us on this global journey towards environmental resilience, as we champion and invest in unique solutions that address critical challenges head-on – from combating climate change to preserving ecosystems, optimising resource utilisation, and promoting sustainable urbanisation.</p>
            </div>
            <div className="group-text">
            <Icon4 className='icon'/>
                <p >Together, we can cultivate a vibrant ecosystem of innovation, ensuring that our beautiful planet continues to flourish and sustain life for countless years to come. Ecostruct invites you to be an integral part of this mission, as we work hand-in-hand to spark a green revolution that lays the foundation for a thriving and sustainable Earth.</p>
                </div>
            <div className="group-text">
            <Icon5 className='icon'/>
                <p >At Ecostruct, we recognize that fostering equality and embracing diversity are critical pillars in achieving a sustainable future. Emphasising these values not only fosters a fair and inclusive environment for innovation, but also helps us identify unique perspectives and creative solutions in the fields of eco-technology and sustainable development.</p>
                </div>
    </div>
  )
}
