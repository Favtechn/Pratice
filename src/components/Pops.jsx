import React from 'react'

const Pops = (props) => {
  return (
    <div>
      <h2>I have a {props.tool}</h2>
      <span>Are you of {props.dan}</span>
      <nav>
        <ul>
          <li>Home</li>
          <li>Page</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Pops

