
import './ads.css'
import Count from './count'

function CountAds() {
  return (
    <div>
      <div className="the-second-ds">
         <div className="thead-cover">
            <div className="adscontent-sec">
                <span>Tee Off with the Best!</span>
                <div className='golftour'>Sign Up for Our Golf Tournament!</div>
                <Count/>
            </div>
            <div className="sec-adsimg">
                <img src="assets/gtou.png" alt="" />
            </div>
            <div className="power-by">
                by
                <div className="power-img">
                    <img src="assets/logo.png" alt="" />
                </div>
                <div className="buton"><button>Join Now</button></div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default CountAds
