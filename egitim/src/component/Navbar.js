import React from 'react'
import PropTypes from "prop-types"

function Navbar(props) {
  return (
    <h1>{props.title}</h1>
  )
}

Navbar.propTypes={
  title:PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:"App"
}
export default Navbar;
