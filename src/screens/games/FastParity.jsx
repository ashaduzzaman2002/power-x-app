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
  const probabilityBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const location = useLocation();

  return (
    <div className="container">
      <Header title={"Fast Parity"} />

{/* Start */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <div class="modal-dialog modal-dialog-centered">
          <div className="modal-content start-box">
            <h2 className="game-name">Gold</h2>
            <p>Points</p>

            <div className="points-div">
              <h3>INR 0.0</h3>
              <button onClick={() => navigate("/recharge")}>
                <i className="fa-solid fa-clock-rotate-left"></i> Recharge
              </button>
            </div>

            <div className="contract-point">
              <p>Contract Points</p>

              <div>
                <button>10</button>
                <button>100</button>
                <button className={"contract-point-selected"}>1000</button>
                <button>10000</button>
              </div>
            </div>

            <div className="start-number-outer">
              <p>Number</p>

              <div className="start-number">
                <div>
                  <button>-5</button>
                  <button>-1</button>
                </div>
                <p>1000</p>
                <div>
                  <button>+1</button>
                  <button>+5</button>
                </div>
              </div>
            </div>

            <div className="delivery">
              <div>
                <p>Delivery</p>
                <p>50.00</p>
              </div>

              <div>
                <p>Fee</p>
                <p>0.00</p>
              </div>

              <div>
                <p>Amount</p>
                <p>+176.00</p>
              </div>
            </div>

            <div className="w-100 mt-4">
              <button
                style={{
                  backgroundColor: 'rgb(252, 148, 13)'
                }}
                className="btn w-100 text-light py-2"
                data-bs-toggle="modal"
          data-bs-target="#exampleModal"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>

        {/* Wallet */}
        <div className="wallet-container d-flex justify-content-between align-items-center gap-2 mt-3">
          <div className="parity-top flex-column align-items-center w-100 p-2 ">
            <p className="mb-1">Win Wallet</p>
            <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>₹500.00</p>

            <button
              className="btn text-white rounded-pill w-100 fw-medium"
              style={{
                backgroundColor: "#fc940d",
                fontSize: 13,
              }}
              onClick={() =>
                navigate("/withdraw", { state: { from: location.pathname } })
              }
            >
              Withdraw
            </button>

            <button
              className="btn text-white rounded-pill w-100 fw-medium mt-2"
              style={{
                backgroundColor: "#00c282",
                fontSize: 13,
              }}

              onClick={() =>
                navigate("/transfer", { state: { from: location.pathname } })
              }
            >
              Transfer
            </button>
          </div>

          <div className="parity-top flex-column align-items-center w-100 p-2">
            <p className="mb-1">Play Wallet</p>
            <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>₹500.00</p>

            <button
              className="btn text-white rounded-pill w-100 fw-medium"
              style={{
                backgroundColor: "#fc940d",
                fontSize: 13,
              }}
              onClick={() =>
                navigate("/recharge", { state: { from: location.pathname } })
              }
            >
              Recharge
            </button>

            <button
              className="btn text-white rounded-pill w-100 fw-medium mt-2"
              style={{
                backgroundColor: "#00c282",
                fontSize: 13,
              }}
              onClick={() =>
                navigate("/forward", { state: { from: location.pathname } })
              }
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
          <div data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src={goldCoin} alt="" />
          </div>

          <div data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img
              src={silverCoin}
              alt=""
              style={{ width: "87%", marginTop: "0.3rem" }}
            />
          </div>
        </div>

        <div className="prity-colors">
          <div
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="p-3"
            style={{ backgroundColor: "#d72e2a" }}
          >
            <p className="m-0">Red</p>
            <p className="m-0 border-top w-75 text-center">2X</p>
          </div>

          <div
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ backgroundColor: "#388e3d" }}
          >
            <p className="m-0">green</p>
            <p className="m-0 border-top w-75 text-center">3X</p>
          </div>

          <div
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ backgroundColor: "#1976d3" }}
          >
            <p className="m-0">Blue</p>
            <p className="m-0 border-top w-75 text-center">4X</p>
          </div>
        </div>

        <div className="paritynum-btns">
          {firstCardList.map((item, i) => (
            <div data-bs-toggle="modal" data-bs-target="#exampleModal" key={i}>
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

        {activeBtn === "continuos" && <ContinuousTab />}

        {activeBtn === "record" && <Record />}

        {activeBtn === "probability" && (
          <Probability probabilityBox={probabilityBox} />
        )}

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

function ContinuousTab({}) {
  const fastParityContinuousList = [
    0,
    7,
    "-",
    8,
    0,
    6,
    1,
    9,
    3,
    5,
    0,
    7,
    7,
    8,
    0,
    7,
    8,
    0,
    6,
    1,
    9,
    3,
  ];
  return (
    <div className="continuous-tab">
      <div className="scroll-container">
        {fastParityContinuousList?.map((item, i) => (
          <div key={i} className="parity__records__circle">
            <div className="parity__records__circle__no">{item}</div>
            <div
              className="parity__records__circle__inner"
              style={{
                backgroundColor:
                  item === "-"
                    ? "#fec007"
                    : item % 2 === 0
                    ? "#f44238"
                    : "#3b8d3c",
              }}
            >
              <div
                className="parity__records__circle__col"
                style={{
                  background:
                    item === 0 ? "#f24337" : item === 5 ? "#1f98ef" : "",
                }}
              ></div>
              <div
                className="parity__records__circle__col"
                style={{
                  background:
                    item === 0 ? "#0f45a2" : item === 5 ? "#388e3d" : "",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Record = ({}) => {
  const numberList = [
    2,
    2,
    2,
    2,
    9,
    9,
    0,
    "-",
    5,
    9,
    8,
    8,
    8,
    8,
    6,
    4,
    8,
    7,
    1,
    4,
    9,
    7,
    1,
    2,
    8,
    1,
    4,
  ];

  return (
    <div className="parity-record">
      <p>Fast Parity Record</p>
      <div className="parity-record-box">
        {numberList.map((item, i) => (
          <div key={i} className="parity__records__circle">
            <div className="parity__records__circle__no">{item}</div>
            <div
              className="parity__records__circle__inner"
              style={{
                backgroundColor:
                  item === "-"
                    ? "#fec007"
                    : item % 2 === 0
                    ? "#f44238"
                    : "#3b8d3c",
              }}
            >
              <div
                className="parity__records__circle__col"
                style={{
                  background:
                    item === 0 ? "#f24337" : item === 5 ? "#1f98ef" : "",
                }}
              ></div>
              <div
                className="parity__records__circle__col"
                style={{
                  background:
                    item === 0 ? "#0f45a2" : item === 5 ? "#388e3d" : "",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Probability = ({ probabilityBox }) => (
  <>
    <div className="probability">
      <p
        style={{
          textAlign: "center",
          marginTop: "1.2rem",
          fontSize: 15,
        }}
      >
        1 item today
      </p>
    </div>

    <div className="game-first-row">
      <div>
        <p>0</p>
      </div>

      <div>
        <p>0</p>
      </div>

      <div>
        <p>0</p>
      </div>

      <div className="game-first-row-box-out">
        <p style={{ backgroundColor: "#d72e2a" }}>R</p>
        <div
          className="game-first-row-box"
          style={{ backgroundColor: "#ffcdd2" }}
        ></div>
      </div>

      <div className="game-first-row-box-out">
        <p style={{ backgroundColor: "#1976d3" }}>B</p>
        <div
          className="game-first-row-box"
          style={{ backgroundColor: "#bbdefa" }}
        ></div>
      </div>

      <div className="game-first-row-box-out">
        <p style={{ backgroundColor: "#388e3d" }}>G</p>
        <div
          className="game-first-row-box"
          style={{ backgroundColor: "#c8e6ca" }}
        ></div>
      </div>
    </div>

    <div className="probabilty-game-second-row game-second-row">
      {probabilityBox.map((item, i) => (
        <div key={i} className="game-second-row-color">
          <p>{item}</p>
        </div>
      ))}

      {probabilityBox.map((item, i) => (
        <div key={i} className="numbers">
          <p>{item}</p>
          <p>0</p>
        </div>
      ))}
    </div>
  </>
);

export default FastParity;
