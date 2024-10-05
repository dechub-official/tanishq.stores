import { useState } from "react";
import "../../assets/css/envelope.css"; 

const Envelope = ({isOpen}) => {


  return (
    <div className="max-w-[100%] overflow-hidden pb-24">
    <div className="flex scale-[1.4] flex-col items-center">
      <div className="envelope-wrapper">
        <div id="envelope" className={true ? "open" : "close"}>
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            <div className="words line1"></div>
            <div className="words line2"></div>
            <div className="words line3"></div>
            <div className="words line4"></div>
          </div>
          {/* <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div> */}
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Envelope;
