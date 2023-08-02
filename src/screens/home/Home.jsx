import React from "react";
import "./home.css";
import BottomNav from "../../components/bottomNav/BottomNav";
import { daskadum, powerx } from "../../assets";
import { useNavigate } from "react-router-dom";
import IsAuthenticate from "../../redirect/IsAuthenticate";

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <IsAuthenticate>
      <BottomNav />
      <div className="container">
        <div className="background-custom"></div>
        <div className="position-relative">

          <h1 style={{fontSize: '1.5rem'}}>All Games</h1>

          <div  className="games">
            <div onClick={() => navigate('/fast-parity')} className="game">
              <img src={powerx} alt="power x" />
            </div>

            <div onClick={() => navigate('/parity')} className="game">
              <img src={daskadum} alt="das ka dum" />
            </div>
          </div>
        </div>
      </div>
    </IsAuthenticate>
  );
};

export default Home;
