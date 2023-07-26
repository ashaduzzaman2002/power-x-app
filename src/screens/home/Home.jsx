import React, { useContext, useEffect } from "react";
import "./home.css";
import BottomNav from "../../components/bottomNav/BottomNav";
import { bettingBanner, dice, rocket } from "../../assets";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) return navigate("/signin");
  }, [user]);
  return (
    <>
      <BottomNav />
      <div className="container">
        <div className="background-custom"></div>
        <div class="position-relative pt-3">
          <div className="heading">
            <h1 class="">Play, win, repeat,</h1>
            <p>Succeed!</p>
          </div>

          <div className="banner">
            <img src={bettingBanner} alt="" />
          </div>

          <div onClick={() => navigate('/fast-parity')} className="games">
            <div className="game">
              <img src={rocket} alt="" />
              <p>Fast Parity</p>
            </div>

            <div className="game">
              <img src={dice} />
              <p>Parity</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
