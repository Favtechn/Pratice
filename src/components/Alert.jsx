import React from 'react'

const Alert = (props) => {
    const Good = () =>{
        alert("Good you click me")
    }
  return (
    <div> 
      <button onClick={Good}>This will alert you {props.near} </button>
    </div>
  )
}

export default Alert
