import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../css/About.css'
import full_logo from '../../imgs/currate_full-01.png'
import Footer from './Footer'
import { Button } from 'react-bootstrap'


const About = () => {
  const history = useHistory()

  const pushRegister = () => {
    return history.push('/')
  }

  return (
    <div className="about">
      <img className="full-logo" src={full_logo} alt="full logo" />
      <div className="about-body">
        <h3>
          A social platform based on illustrations.
      </h3>
        <br />
        <p >
          Enter the "studio" and create drawings as simple or complex as you desire.
          Users can add them to collections-- called galleries, and share them with friends!
        </p>
        <Button onClick={pushRegister} variant="outline-info">Get Started Here</Button>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About