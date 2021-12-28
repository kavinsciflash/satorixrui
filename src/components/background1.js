import '../App.css';
import model3 from '../images/Reload.png';
import model5 from '../images/Back.png';
import model6 from '../images/Feature.png';
import model7 from '../images/Doc.png';

export default function Background1(){
    return(
        <div className='background1'>
            <img className='img4' src={model6} alt="Logo" />
            <img className='img5' src={model3} alt="Logo" />
            <img className='img6' src={model5} alt="Logo" />
            <img className='img8' src={model7} alt="Logo" />
        </div>
    );
}