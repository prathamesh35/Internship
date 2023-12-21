import React from "react";
import Mypic from '../Images/Mypic.jpg';
import './Styles/User.css';
import Clock from './Clock';

export default function About() {
  //  const pic = require('./Images/Mypic.jpg');

  return (
    <>
    {/* <div>
      <Clock/>
    </div> */}
<div className="user-container" id="user-con">
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
