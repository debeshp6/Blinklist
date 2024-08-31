import React from 'react'

export const About = () => {
  let myAbout = {
    paddingTop: "100px",
    paddingRight: "15px",
    paddingLeft: "15px",
    paddingBottom: "340px",
    
  }
  return (
    <div className="about" style={myAbout}>
        <p>Welcome to Blinklist, the ultimate to-do list app designed for simplicity and efficiency. Organize your tasks, set reminders, and stay productive with our intuitive interface. Sync your lists across all your devices and never miss a deadline again. Start using Blinklist today and transform the way you manage your tasks!</p>
    </div>
  )
}
