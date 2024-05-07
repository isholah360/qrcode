import { useState } from "react";
import "./competit.css";
import Timematch from "./timematch";
import ComCard from "./comCard";

function Competit() {
  const [visibleDiv, setVisibleDiv] = useState(1);

  const today = new Date().getDate();

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
              maindt={today < 10 ? `0${today}` : today}
              nameone="Uche Aigbogo"
              nametwo="Sesan Rogers"
              tyme="10:00"
            />
          </span>
          <span onClick={() => handleButtonClick(2)}>
            <Timematch
              place="Barracuda Championship"
              maindt="13"
              nameone="Oluseyi Akin"
              nametwo="Victor David"
              tyme="10:00"
            />
          </span>
          <span onClick={() => handleButtonClick(3)}>
            <Timematch
              place="WGT Virtual Tour"
              maindt="24"
              nameone="Susan Rogers"
              nametwo="Musa Aliyu"
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
            <div className="mtch-review">Match Review </div>
            WE ARE VERY EXCITED TO GO OVER THIS EXCEPTIONAL TOURNAMENT THAT
            LITERALLY LEFT THE PLAYERS AND THE CROWD BREATHLESS!
          </div>
          <div className="compet-vs">
            {visibleDiv === 1 && (
              <div className="player-match">
                <ComCard player="Uche Aigbogo" playerImg="assets/g1.jpeg" />
                <div className="time-info">
                  <div className="match-rev-time">
                    {today < 10 ? `0${today}` : today} MAY 10:00
                  </div>
                  <div className="scores">72-69</div>
                  <div className="match-cousre">
                    OTUNBA ISLAND GOLF CLUB - SEASIDE COURSE
                  </div>
                </div>
                <ComCard player="Sesan Rogers" playerImg="assets/go.jpeg" />
              </div>
            )}
            {visibleDiv === 2 && (
              <div className="player-match">
                <ComCard player="Oluseyi Akin" playerImg="assets/g2.jpeg" />
                <div className="time-info">
                  <div className="match-rev-time">
                    13 MAY 10:00
                  </div>
                  <div className="scores">00-00</div>
                  <div className="match-cousre">
                    PAPE ISLAND GOLF CLUB - SEASIDE COURSE
                  </div>
                </div>
                <ComCard player="Victor David" playerImg="assets/g4.jpeg" />
              </div>
            )}
            {visibleDiv === 3 && (
              <div className="compet-vs">
                <div className="player-match">
                  <ComCard player="Musa Aliyu" playerImg="assets/g3.jpeg" />
                  <div className="time-info">
                    <div className="match-rev-time">
                       24 MAY 10:00
                    </div>
                    <div className="scores">00-00</div>
                    <div className="match-cousre">
                      GWAGWALADA GOLF CLUB - SEASIDE COURSE
                    </div>
                  </div>
                  <ComCard player="Sesan Rogers" playerImg="assets/go.jpeg" />
                </div>
              </div>
            )}
            {visibleDiv === 4 && <div className="compet-vs">
            <div className="player-match">
                <ComCard player="Uche Aigbogo" playerImg="assets/g1.jpeg" />
                <div className="time-info">
                  <div className="match-rev-time">
                    29 MAY 10:00
                  </div>
                  <div className="scores">00-00</div>
                  <div className="match-cousre">
                    OTUNBA ISLAND GOLF CLUB - SEASIDE COURSE
                  </div>
                </div>
                <ComCard player="Steven Polycap" playerImg="assets/g5.jpeg" />
              </div>
                </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competit;
