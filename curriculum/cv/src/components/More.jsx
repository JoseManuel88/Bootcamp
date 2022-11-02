import React from 'react'

export const More = ({languages, habilities, volunteer}) => {
  return (
  <div>
    <div>
    <div>Languages</div>
    <p>{languages.language}</p>
    <p>{languages.wrlevel}</p>
    <p>{languages.splevel}</p>
    </div>
    <div>
        <div>Habilities</div>
        <p>{habilities[0]}</p>
        <p>{habilities[1]}</p>
        <p>{habilities[2]}</p>
        <p>{habilities[3]}</p>
        <p>{habilities[4]}</p>
        <p>{habilities[5]}</p>
        <p>{habilities[6]}</p>
        <p>{habilities[7]}</p>
    </div>
    <div>
        <div>Volunteer</div>
        <div>
        <p>{volunteer[0].name}</p>
      <p>{volunteer[0].where}</p>
      <p>{volunteer[0].description}</p>
        </div>
        <div>
        <p>{volunteer[1].name}</p>
      <p>{volunteer[1].where}</p>
      <p>{volunteer[1].description}</p>
        </div>
        
      
    </div>

  </div>
    
  )
}

export default More