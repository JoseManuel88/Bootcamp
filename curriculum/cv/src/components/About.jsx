import React from 'react'
import "./About.css";
export const About = ({aboutMe}) => {
    console.log(aboutMe);
  return (
    <div className="about">
      <div>
        <div>About me</div>
        <p>{aboutMe[0].info}</p>
      <p>{aboutMe[1].info}</p>
      <p>{aboutMe[2].info}</p>
      <p>{aboutMe[3].info}</p>
       </div>
      
      </div>
  )
}

export default About