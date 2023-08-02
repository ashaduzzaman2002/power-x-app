import React from 'react'
import './welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
        <div className="welcome-custom">
            <Link className='play-now' to={'/home'}>Play Now</Link>
        </div>
    </div>
  )
}

export default Welcome