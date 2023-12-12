import React from "react";
import Mypic from '../Images/Mypic.jpg';
import './Styles/User.css';
export default function About() {
  //  const pic = require('./Images/Mypic.jpg');

  return (
    <>
<div className="user-container">
  <img src={Mypic} className="my-image" alt="pic"/>
  <div>
      <h1 className="user-details">Name: Prathamesh Kumbhar</h1>
      <p className="user-email">Age: 21 </p>
      <p className="user-email">Role: Web developer</p>
  </div>
</div>
    </>
    
  );
}
