import model from '../images/Settings.png';
import model1 from '../images/Audio.png';
import model4 from '../images/CC Active.png';
import '../App.css';
import { useState } from 'react';

export default function Background(){

    const [show, setShow] = useState(true);

    const style = {
        animation1 : "bind 500ms 1",
        animation2 : "bind1 500ms 1",
        animation3 : "wind 500ms 1",
        animation4 : "wind1 500ms 1"
      }
    
      const handleClick = () =>{
        return (show ? style.animation1 : style.animation2)
      }
    
      const handleClick1 = () =>{
        return (show ? style.animation3 : style.animation4)
      }

    return(
    <div className='background'>
        <img id="img1" className='img1' src={model} alt="Logo" onClick={() => setShow((s) => !s)} />
        <img id="img2" className='img2' src={model1} alt="Logo" style={{ opacity: show ? 1 : 0 , animation: handleClick()}} />
        <img id="img3" className='img3' src={model4} alt="Logo" style={{ opacity: show ? 1 : 0 , animation: handleClick1()}} />
    </div>
    );
}