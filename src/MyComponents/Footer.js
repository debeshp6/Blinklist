import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        width: "100%",
        height: "53px"
    }
  return (
    <footer className="bg-dark text-light py-1" style={footerStyle}>
        <p className="text-center my-1 ">Copyright &copy; Blinklist</p>
    </footer>
  )
}
