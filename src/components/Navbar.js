import React from 'react'
export default function Navbar(props) {
  return (
    <>
    <nav>
      <li>{props.logo}</li>
      <li>Home</li>
      <li>About</li>  
      <li>Service</li>
      <li>Contact</li>
    </nav>
    </>
  )
}