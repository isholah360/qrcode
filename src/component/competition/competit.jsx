import { useState } from "react";
import "./competit.css";
import Timematch from "./timematch";
import ComCard from "./comCard";

function Competit() {
  const [visibleDiv, setVisibleDiv] = useState(1); 
 
  const today = new Date().getDate()
 
  const handleButtonClick = (divNumber) => {
    setVisibleDiv(divNumber); 
  };
  return (
    <div>
      <div className="competit-comp">
        <div className="compet-time">
          <div className="nextmatch">Next Matches</div>
          <hr style={{ width: "4rem" }} />
          <div className="glorious">
            MOST GOLF MATCHES ARE PLAYED ON SUNDAYS FROM 10 AM TO APPROXIMATELY
            2 PM
          </div>
          <span onClick={() => handleButtonClick(1)}>
            <Timematch
              place="McGladrey Classic"
              maindt={today}
              nameone="Kevin Gonzales"
              nametwo="Susan Rogers"
              tyme="10:00"
            />
          </span>
          <span onClick={() => handleButtonClick(2)}>
            <Timematch
              place="Barracuda Championship"
              maindt="13"
              nameone="Susan Rogers"
              nametwo="Robert Ross"
              tyme="10:00"
            />
          </span>
          <span onClick={() => handleButtonClick(3)}>
            <Timematch
              place="WGT Virtual Tour"
              maindt="24"
              nameone="Susan Rogers"
              nametwo="Robert Ross"
              tyme="10:00"
            />
          </span>

          <span onClick={() => handleButtonClick(4)}>
            <Timematch
              place="Hero World Challenge"
              maindt="29"
              nameone="Susan Rogers"
              nametwo="Robert Ross"
              tyme="10:00"
            />
          </span>
        </div>
        <div className="the-competitors">
          <div className="competit-title">
            WE ARE VERY EXCITED TO GO OVER THIS EXCEPTIONAL TOURNAMENT THAT
            LITERALLY LEFT THE PLAYERS AND THE CROWD BREATHLESS!
          </div>
          <div className="compet-vs">
            {visibleDiv === 1 && <div><ComCard/></div>}
            {visibleDiv === 2 && <div>This is Div 2</div>}
            {visibleDiv === 3 && <div>This is Div 3</div>}
            {visibleDiv === 4 && <div>This is Div 4</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competit;
