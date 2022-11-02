import React from 'react'


export const Education = ({education}) => {
    console.log(education);
  return (
    <div>
        <div>
        <div>Estudios</div>
        <p>{education[0].name}</p>
        <p>{education[0].date}</p>
        <p>{education[0].where}</p>
        </div>
        <div>
        <p>{education[1].name}</p>
        <p>{education[1].date}</p>
        <p>{education[1].where}</p>
        </div>
        <div>
        <p>{education[2].name}</p>
        <p>{education[2].date}</p>
        <p>{education[2].where}</p>
        </div>
       
       
       </div>
  )
}

export default Education