import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Forward = () => {
    const navigate = useNavigate()
    const location = useLocation();
  return (
    <div className="container">
      {/* Top Navbar */}
      <div class="app__top__nav">
        <div class="top__nav__cols">
          <div class="top__nav__back__btn" onClick={() => navigate(location?.state?.from || "/")}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"></path>
            </svg>
          </div>
        </div>
        <div class="top__nav__cols">
          <center>
            <div class="top__nav__title">Forward</div>
          </center>
        </div>
        <div class="top__nav__cols"></div>
      </div>


      <div className='floating-btn d-flex align-items-center justify-content-center rounded-circle'>
        <button className='w-100 h-100 d-flex justify-content-center align-items-center'><i class="bi bi-plus"></i></button>
      </div>
      </div>
  )
}

export default Forward