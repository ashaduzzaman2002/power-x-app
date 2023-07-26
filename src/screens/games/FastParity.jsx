import React, { useState } from "react";
import "./game.css";
import { Link, useNavigate } from "react-router-dom";
import { goldCoin, silverCoin } from "../../assets";

const FastParity = () => {
  const navigate = useNavigate();
  const firstCardList = ["A", "B", "C", "D"];
  const [activeBtn, setActiveBtn] = useState("probability");
  const [activeBtn2, setActiveBtn2] = useState("OtherPlayers");
  return (
    <div className="container">
      {/* Top Navbar */}
      <div class="app__top__nav">
        <div class="top__nav__cols">
          <div class="top__nav__back__btn" onClick={() => navigate("/")}>
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
            <div class="top__nav__title">Fast Parity</div>
          </center>
        </div>
        <div class="top__nav__cols"></div>
      </div>

      <div>
        <div className="wallet-container d-flex justify-content-between align-items-center gap-5 mt-3">
          <Link
            className="btn  text-white rounded-pill w-50 fw-medium"
            style={{
              backgroundColor: "#fc940d",
              boxShadow: "0 10px 20px -10px #fc940d",
            }}
            to={"/play-wallet"}
          >
            <i class="bi bi-trophy"></i> Wallet
          </Link>
          <Link
            className="btn text-white rounded-pill w-50 fw-medium"
            style={{
              backgroundColor: "#00c282",
              boxShadow: "0 10px 20px -10px #00c282",
            }}
            to={"/play-wallet"}
          >
            <i class="bi bi-wallet"></i> Wallet
          </Link>
        </div>

        <div className="parity-top mt-4 px-4 py-2">
          <div className="parity-period">
            <p>5 Minute</p>
            <p>20230614012</p>
          </div>

          <div className="parity-count">
            <p className="m-0 mt-1">Count Down</p>
            <div className="parity-count-box p-2 ">
              <p className="m-0">3:00</p>
            </div>
          </div>
        </div>

        <div className="game-coins mt-4">
          <div>
            <img src={goldCoin} alt="" />
          </div>

          <div>
            <img
              src={silverCoin}
              alt=""
              style={{ width: "87%", marginTop: "0.3rem" }}
            />
          </div>


          
        </div>

        <div className="prity-colors">
          <div className="p-3" style={{ backgroundColor: "#d72e2a" }}>
            <p className="m-0">Red</p>
          </div>

          <div style={{ backgroundColor: "#388e3d" }}>
            <p className="m-0">green</p>
          </div>

          <div style={{ backgroundColor: "#1976d3" }}>
            <p className="m-0">Blue</p>
          </div>
        </div>

        <div className="paritynum-btns">
          {firstCardList.map((item, i) => (
            <div key={i}>
              <p className="m-0">{item}</p>
            </div>
          ))}
        </div>
        
        <div className="d-flex justify-content-center">
        <button className="btn text-white rounded-pill fw-medium mt-4 px-5 py-2" style={{
              backgroundColor: "#00c282",
              boxShadow: "0 10px 20px -10px #00c282",
            }}>Enter</button>
        </div>
        

        <div className="parity-btn">
          <button
            onClick={() => setActiveBtn("continuos")}
            className={activeBtn === "continuos" ? "parity-btn-active" : ""}
          >
            Continuos
          </button>
          <button
            onClick={() => setActiveBtn("record")}
            className={activeBtn === "record" ? "parity-btn-active" : ""}
          >
            Record
          </button>
          <button
            onClick={() => setActiveBtn("probability")}
            className={activeBtn === "probability" ? "parity-btn-active" : ""}
          >
            Probability
          </button>
        </div>

        {/* {activeBtn === 'continuos' && <ContinuousTab />}

            {activeBtn === 'record' && <Record />} */}

        {/* {activeBtn === 'probability' && (
              <Probability probabilityBox={probabilityBox} />
            )} */}

        <div className="gameDetails-btn-group">
          <button
            onClick={() => setActiveBtn2("OtherPlayers")}
            className={`${
              activeBtn2 === "OtherPlayers" ? "gameDetails-activeBtn" : ""
            }`}
          >
            Other Players
          </button>

          <button
            onClick={() => setActiveBtn2("MyOrder")}
            className={`${
              activeBtn2 === "MyOrder" ? "gameDetails-activeBtn" : ""
            }`}
          >
            My Orders
          </button>
        </div>

        {activeBtn2 === "OtherPlayers" ? (
          <div className="gameDetails-others">
            <div>
              <p>Period</p>
              <small>18:54</small>
            </div>

            <div style={{ textAlign: "center" }}>
              <p>User</p>
              <small>****18787</small>
            </div>

            <div style={{ textAlign: "center" }}>
              <p>Select</p>
              <small>2x2</small>
            </div>

            <div style={{ textAlign: "right" }}>
              <p>Point</p>
              <small>₹ 90</small>
            </div>
          </div>
        ) : (
          <div>
            <table style={{ width: "100%", marginTop: "1rem" }}>
              <thead>
                <tr className="parity-myorder-header parity-myorder">
                  <td>Period</td>
                  <td>Select</td>
                  <td>Point</td>
                  <td>Result</td>
                  <td>Amount</td>
                </tr>
              </thead>

              <tbody>
                <tr className="parity-myorder">
                  <td>18:01</td>
                  <td className="parity-selected">
                    <p
                      style={{
                        backgroundColor: "#1776d7",
                        width: "100%",
                        color: "#fff",
                      }}
                    >
                      blue
                    </p>
                  </td>
                  <td>₹10</td>
                  <td className="parity-selected parity-result">
                    <p style={{ backgroundColor: "#388e3d" }}>7</p>
                  </td>
                  <td>+₹0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default FastParity;
