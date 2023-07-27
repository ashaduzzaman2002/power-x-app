import React, { useState } from "react";
import "./game.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { goldCoin, silverCoin } from "../../assets";
import { Header } from "../../components";

const FastParity = () => {
  const navigate = useNavigate();
  const firstCardList = ["A", "B", "C", "D"];
  const [activeBtn, setActiveBtn] = useState("probability");
  const [activeBtn2, setActiveBtn2] = useState("OtherPlayers");

  const location = useLocation();

  return (
    <div className="container">
      <Header title={'Fast Parity'} />
      <div>
        <div className="wallet-container d-flex justify-content-between align-items-center gap-2 mt-3">
          <div className="parity-top flex-column align-items-center w-100 p-2 ">
            <p>Win Wallet</p>
            <div className="input-container d-flex mb-3 align-items-center gap-2 px-2 rounded">
              <i class="bi bi-currency-rupee"></i>{" "}
              <input className="p-1 w-100" type="text" placeholder="100" />
            </div>

            <button
              className="btn text-white rounded-pill w-100 fw-medium"
              style={{
                backgroundColor: "#fc940d",
                fontSize: 13
              }}
            >
             Withdraw
            </button>

            <button
              className="btn text-white rounded-pill w-100 fw-medium mt-2"
              style={{
                backgroundColor: "#00c282",
                fontSize: 13
              }}
            >
              Transfer
            </button>
          </div>

          <div className="parity-top flex-column align-items-center w-100 p-2">
            <p>Play Wallet</p>
            <div className="input-container d-flex mb-3 align-items-center gap-2 px-2 rounded">
              <i class="bi bi-currency-rupee"></i>{" "}
              <input className="p-1 w-100" type="text" placeholder="100" />
            </div>

            <button
              className="btn text-white rounded-pill w-100 fw-medium"
              style={{
                backgroundColor: "#fc940d",
                fontSize: 13
              }}
              onClick={() => navigate('/recharge', { state: { from: location.pathname } })}
            >
              Recharge
            </button>

            <button
              className="btn text-white rounded-pill w-100 fw-medium mt-2"
              style={{
                backgroundColor: "#00c282",
                fontSize: 13
              }}
              onClick={() => navigate('/forward', { state: { from: location.pathname } })}
            >
              Forward
            </button>
          </div>
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
            <p className="m-0 border-top w-75 text-center">2X</p>
          </div>

          <div style={{ backgroundColor: "#388e3d" }}>
            <p className="m-0">green</p>
            <p className="m-0 border-top w-75 text-center">3X</p>
          </div>

          <div style={{ backgroundColor: "#1976d3" }}>
            <p className="m-0">Blue</p>
            <p className="m-0 border-top w-75 text-center">4X</p>
          </div>
        </div>

        <div className="paritynum-btns">
          {firstCardList.map((item, i) => (
            <div key={i}>
              <p className="m-0">{item}</p>
              <p className="m-0 border-top w-50 text-center">{2 + i}X</p>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn text-white rounded-pill fw-medium mt-4 px-5 py-2"
            style={{
              backgroundColor: "#00c282",
              boxShadow: "0 10px 20px -10px #00c282",
            }}
          >
            Enter
          </button>
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
