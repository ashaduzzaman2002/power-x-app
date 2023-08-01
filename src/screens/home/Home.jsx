import React, { useContext, useEffect } from "react";
import "./home.css";
import BottomNav from "../../components/bottomNav/BottomNav";
import { bettingBanner, dice, rocket } from "../../assets";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import IsAuthenticate from "../../redirect/IsAuthenticate";

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <IsAuthenticate>
      <BottomNav />
      <div className="container">
        <div className="background-custom"></div>
        <div className="position-relative pt-3">
          <div className="heading">
            <h1 className="">Play, win, repeat,</h1>
            <p>Succeed!</p>
          </div>

          <div className="banner">
            <img src={bettingBanner} alt="" />
          </div>

          <div  className="games">
            <div onClick={() => navigate('/fast-parity')} className="game">
              <img src={rocket} alt="" />
              <p>Fast Parity</p>
            </div>

            <div onClick={() => navigate('/parity')} className="game">
              <img src={dice} />
              <p>Parity</p>
            </div>
          </div>
        </div>
      </div>
    </IsAuthenticate>
  );
};

export default Home;
