import React, { useEffect, useState } from "react";
import "./game.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../components";
import { database } from '../../firebase.config'
import { onValue, ref, set } from 'firebase/database';
import { dbObject } from "../../helper/constant";
import { Rupee } from "../../assets/svg/CustomSVG";
import Keyboard from "../../components/keyboard/Keyboard";

const Parity = () => {
  const navigate = useNavigate();
  const firstCardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [activeBtn, setActiveBtn] = useState("probability");
  const [activeBtn2, setActiveBtn2] = useState("OtherPlayers");
  const probabilityBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [timer, setTimer] = useState('0:00');
  const [period, setPeroid] = useState('000000000000')
  const [winWallet, setWinWallet] = useState('0.00')
  const [playWallet, setPlayWallet] = useState('0.00')
  const [amount, setAmount] = useState('')

  const location = useLocation();

  function secondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    const dusKaDamRef = ref(database, 'dus-ka-dum/timer');

    try {
      onValue(dusKaDamRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        if (data) {
          const key = Object.keys(data)[0];
          const { time, period } = data[key];
          setPeroid(period)
          setTimer(secondsToTime(time));
        }
      });
    } catch (error) {
      console.log(error)
    }
  }, []);

  const getWallet = async () => {
    try {
      const { data } = await dbObject('/dus-ka-dum/fetch-wallet.php')
      console.log(data)

      if (!data.error) {
        setWinWallet(data?.response.winWallet)
        setPlayWallet(data?.response.playWallet)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWallet()
  }, [])


  return (
    <div className="container">
      <Header title={"10 Ka Dum"} />

      {/* Start */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
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
              <p>Contract Amount</p>

              <div className="withdrawal__input__field " style={{backgroundColor: '#e5e5e5'}}>
                <div className="withdrawal__input__field__icon custon-ruppe">
                  <Rupee />
                </div>

                <div className="w-100 input" style={{fontWeight: '700', fontSize: '1.5rem'}}>{amount}</div>
              </div>
            </div>

            <div className="withdrawal__input__notes d-flex justify-content-between" >
              <p className="mb-0 mt-2">Service charge 10%</p>
              <p className="mb-0 mt-2">Delivery 50.00</p>
            </div>

            <Keyboard amount={amount} setAmount={setAmount} />

            <div className="mt-4 mb-3 d-flex justify-content-center">
              <button
                style={{
                  backgroundColor: 'rgb(252, 148, 13)'
                }}
                className="btn text-light py-3 modal-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Yes
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
            <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>₹{winWallet}</p>

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
            <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>₹{playWallet}</p>

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
                navigate("/dus-ka-dum/forward", { state: { from: location.pathname } })
              }
            >
              Forward
            </button>
          </div>
        </div>

        {/* Timer */}
        <div className="parity-top mt-4 px-4 py-2">
          <div className="parity-period">
            <p>5 Minute</p>
            <p>{period}</p>
          </div>

          <div className="parity-count">
            <p className="m-0 mt-1">Count Down</p>
            <div className="parity-count-box p-2 ">
              <p className="m-0">{timer}</p>
            </div>
          </div>
        </div>


        <div className="paritynum-btns mt-4" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {firstCardList.map((item, i) => (
            <div data-bs-toggle="modal" data-bs-target="#exampleModal" key={i}>
              <p className="m-0">{item}</p>
            </div>
          ))}
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
            className={`${activeBtn2 === "OtherPlayers" ? "gameDetails-activeBtn" : ""
              }`}
          >
            Other Players
          </button>

          <button
            onClick={() => setActiveBtn2("MyOrder")}
            className={`${activeBtn2 === "MyOrder" ? "gameDetails-activeBtn" : ""
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

function ContinuousTab() {
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

const Record = () => {
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

export default Parity