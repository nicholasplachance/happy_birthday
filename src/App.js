import "./App.css";

import OpenMe from "./openMe/openMe.component";
import React from "react";
import p5 from "p5";
import sketch from "./sketch";

const TEXT = "Happy 25th B-Day Kim!";

const HappyBirthDay = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;

    // NOTE: If you change TEXT value to something else, you'll need to make changes in sketch.js as well to make it work
    // See my comments in sketch.js
    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  });

  return (
    <div className='main'>
      <div className='canvas' ref={canvasRef} />
    </div>
  );
};

const App = () => {
  return (
    <div className='main'>
      <HappyBirthDay />
    </div>
  );
};

export default App;
