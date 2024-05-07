import { use } from "react";
import "./team.css";
import Mainteam from "./mainteam";
import ComCard from "../competition/comCard";
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Team() {
  return (
    <div style={{background:"#f3f3f3", margin:"4rem 0 0 0"}}>
      <div className="team-complete">
         <div style={{color:"#6b860e", textAlign:"center"}}>OUR TEAM</div>
        <div className="prof-team">Meet Our Professionals</div>
        <div className="active-grid">
          <Mainteam
            theIcon="assets/group.png"
            theMax={500}
            theMin={100}
            theMember="Active Members"
          />
          <Mainteam
            theIcon="assets/pro.png"
            theMax={60}
            theMin={25}
            theMember="Trainer"
          />
          <Mainteam
            theIcon="assets/coach.png"
            theMax={40}
            theMin={15}
            theMember="Professional Membr"
          />
          <Mainteam
            theIcon="assets/tro.png"
            theMax={20}
            theMin={10}
            theMember="Award"
          />
        </div>
        <div className="feature-team">
          <div className="meet-ourteam">
            <div className="our-team">FEATURED MEMBER</div>
            <div className="aweseom-team">
              {" "}
              Meet some of our awesome team members.
            </div>
            <div className="team-content">
              Dynamic, dedicated, and skillful, our golf team members are
              passionate players with unmatched teamwork, strategic acumen, and
              a winning spirit, constantly driving each other to achieve
              excellence.
            </div>
            <button>Discover More</button>
          </div>
          <ComCard player="Sesan Rogers" playerImg="assets/go.jpeg" role="Instructor"/>
          <ComCard player="Sesan Rogers" playerImg="assets/go.jpeg"role="Instructor"/>
          <ComCard player="Sesan Rogers" playerImg="assets/go.jpeg"role="Instructor"/>
        </div>
      </div>
    </div>
  );
}

export default Team;
