import React from 'react'


const InfoBox = (props) => {
  return (
    <>
     <div className="info-box">
        <img src={props.src}  alt="placeholder" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
     

    </>
  )
}

export default InfoBox