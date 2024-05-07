import React from "react";
import Plan from "./plan";

function Prem() {
  return (
    <>
      <div className="pln-complete">
        <div className="pln-title">CLUMB MEMBERSHIP</div>
        <div className="select-pln">Select the your most suitable plan</div>
        <div className="the-plans">
          <Plan amount="250/mth" naming="Junior" />
          <Plan amount="350/mth" naming="Individual" />
          <Plan amount="450/mth" naming="Family" />
        </div>
        <div className="promopln">
          <div className="mnth-mem">
            <div className="get-pro-mem">
            Get One Month Free Golf Club Membership
            </div>
            <div className="pro-fone-mil">
                <div className="plan-phone">08068235454</div>
                <div className="plan-mil">isholah360@gmail.com</div>
            </div>
          </div>
          <div className="join-memb-button">
            <button>Join Now</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Prem;
