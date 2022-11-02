import React from 'react'

export const Experience = ({experience}) => {
    console.log(experience);
  return (
  <div>
    <div>
    <div>Experience</div>
  </div><div>
 <p>{experience[0].name}</p>
 <p>{experience[0].date}</p>
 <p>{experience[0].where}</p>
 <p>{experience[0].description}</p>
 </div>
 <div>
 <p>{experience[1].name}</p>
 <p>{experience[1].date}</p>
 <p>{experience[1].where}</p>
 <p>{experience[1].description}</p>

 </div>
 
 
 
  </div>
   
  )
}

export default Experience