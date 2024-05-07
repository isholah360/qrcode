import './ecom.css'
import Ecomcard from './ecomcard'

function Ecom() {
  return (
    <div>
      <div className="ecom-complete">
           <div className="first-dd">
              <img src="assets/ecomsdd.jpg" alt="" />
           </div>
           <div className="feuture-product">FEATURED PRODUCTS</div>
           <div className="select-perfect-pro">Select from our new collections of products</div>
           <div className="ecom-list">
             <Ecomcard ecoImg="assets/p6.jpg" ecoDesc="Callaway 2015 Hyper-Lite 5 Golf Balls – White" ecoPrice='N56000'/>
             <Ecomcard ecoImg="assets/p3.jpg" ecoDesc="Callaway 2015 Hyper-Lite 5 Golf Balls – White" ecoPrice='N80000'/>
             <Ecomcard ecoImg="assets/p8.jpg" ecoDesc="Callaway 2015 Hyper-Lite 5 Golf Balls – White" ecoPrice='N56000'/>
             <Ecomcard ecoImg="assets/p5.jpg" ecoDesc="Callaway 2015 Hyper-Lite 5 Golf Balls – White" ecoPrice='N56000'/>
           </div>
      </div>
    </div>
  )
}

export default Ecom
