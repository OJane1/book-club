import HeroSlider from '../../components/HeroSlider/HeroSlider';
import './Trends.css';

const Trends =()=> {
    return(
         <div className='container'>
          <div className='section-title'>
          <h2 className="text-black fs-26 ls-1">Books popular among our readers</h2>
          <HeroSlider />
        </div>
        </div>
    )
 }
 export default Trends;