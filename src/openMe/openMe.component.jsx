import "./openMe.component.css";

import React from "react";

const OpenMe = (props) => {
  const birthdayText = "Happy Birthday Bud <3";
  return (
    <div className='open-me'>
      <div className='card'>
        <img
          src='https://i.pinimg.com/originals/3c/68/ac/3c68aceed894d9fb8f782815b6a737d4.jpg'
          alt='Avatar'
        />
        <div class='container'>
          <h4>
            <b>Happy Birthday Bud &#9825;</b>
          </h4>
          <button onClick={props.openCard}>open me &#128522;</button>
        </div>
      </div>
    </div>
  );
};

export default OpenMe;
