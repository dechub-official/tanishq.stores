import { useState } from "react";
// import "../../assets/css/envelope.css"; 

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <div className="envelope-wrapper">
        <div id="envelope" className={isOpen ? "open" : "close"}>
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            <div className="words line1"></div>
            <div className="words line2"></div>
            <div className="words line3"></div>
            <div className="words line4"></div>
          </div>
          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Envelope;
