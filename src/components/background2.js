import { useState } from 'react';

import model2 from '../images/User Stories.png';
import model8 from '../images/u.png';
import model9 from '../images/u1.png';
import model10 from '../images/p.png';
import model11 from '../images/p1.png';
import model12 from '../images/h.png';
import model13 from '../images/h1.png';
import '../App.css';

export default function Background2(){

    const [shows, setShows] = useState(false); 
    const [hover, sethover] = useState(false);
    const [hover1, sethover1] = useState(false);
    const [hover2, sethover2] = useState(false);

    return(
        <div className='background2'>
             <img className='img7' src={model2} alt="Logo" onClick={() => setShows((s) => !s)} />
             <div className='line' style={{ opacity: shows ? 1 : 0 }}></div>
             <img className='img9' src={model8} alt="Logo" style={{ opacity: shows ? 1 : 0 }}
               src={hover ? model9 : model8} onMouseOver={() => sethover(true)} onMouseOut={() => sethover(false)}
             />
     
             <div className='line1' style={{ opacity: shows ? 1 : 0 }}></div>
             <img className='img10' src={model10} alt="Logo" style={{ opacity: shows ? 1 : 0 }}
               src={hover1 ? model11 : model10} onMouseOver={() => sethover1(true)} onMouseOut={() => sethover1(false)}
             />
     
             <div className='line2' style={{ opacity: shows ? 1 : 0 }}></div>
             <img className='img11' src={model12} alt="Logo" style={{ opacity: shows ? 1 : 0 }}
               src={hover2 ? model13 : model12} onMouseOver={() => sethover2(true)} onMouseOut={() => sethover2(false)}
             />
        </div>

    );
}