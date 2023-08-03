import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Header } from '../../components';
import './transfer.css'

const Transfer = () => {
    const location = useLocation();
    const [amount, setAmount] = useState();
    const [error, setError] = useState(true);

    const handleChange = (e) => {
      const { value } = e.target;
  
      const input = Number(value);
      console.log(typeof value);
  
      if (input && typeof Number(input) == "number" && input >= 100) {
        setError(false);
      } else {
        setError(true);
      }
      setAmount(value);
    };

  return (
    <div className="container">
      <Header title={"Transfer"} path={location?.state?.from || "/"} />
      
      <div className="withdrawal__page__balance__section">
        <center>
          <div className="withdrawal__page__balance__section__top">My Balance</div>
          <div
            className="withdrawal__page__balance__section__bottom"
            style={{ fontFamily: "sans-serif" }}
          >
            ₹398.48
          </div>
        </center>
      </div>

      <div className="withdrawal__amount__field">
        <div className="withdrawal__field__header">
          Transfer Amount{" "}
          <span style={{ fontSize: 12, fontWeight: "300" }}></span>
        </div>
        <div className="withdrawal__input__field">
          <div className="withdrawal__input__field__icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path>
            </svg>
          </div>
          <input
            type="number"
            placeholder="100 - 50000"
            name=""
            id=""
            value={amount}
            onChange={handleChange}
          />
        </div>
        
        <br />
        <button
          className={`withdraw__btn ${error && "recharge__btn_disabled"}`}
          style={{
            height: 45,
          }}
          disabled={error}
        >
          Transfer
        </button>
      </div>

      <div className="withdrawal__records__section">
        <div className="withdrawal__records__section__record__top"></div>
        <div className="withdrawal__records__section__bottom">
          <div className="withdrawal__records__section__bottom__header">
            Transfer Records
          </div>
          <div className="withdrawalRecords__container">
            <div className="withdrawalRecords__container__box">
              <div className="withdrawalRecords__container__box__top">
                <div
                  className="withdrawalRecords__container__box__top__col"
                  style={{ flexBasis: "32%", width: "100%" }}
                >
                  <div className="withdrawalRecords__container__box__top__top">
                    Amount
                  </div>
                  <div
                    className="withdrawalRecords__container__box__top__bottom"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    ₹158
                  </div>
                </div>
                <div
                  className="withdrawalRecords__container__box__top__col"
                  style={{ flexBasis: "34%", width: "100%" }}
                >
                  <div className="withdrawalRecords__container__box__top__top">
                    Time
                  </div>
                  <div className="withdrawalRecords__container__box__top__bottom">
                    01/25 16:24
                  </div>
                </div>
                <div
                  className="withdrawalRecords__container__box__top__col"
                  style={{
                    flexBasis: "34%",
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  <div className="withdrawalRecords__container__box__top__top">
                    Status
                  </div>
                  <div className="withdrawalRecords__container__box__top__bottom">
                    Pending
                  </div>
                </div>
              </div>
              <div className="withdrawalRecords__container__box__bottom">
                <div className="withdrawalRecords__container__box__bottom__top">
                  <div className="withdrawalRecords__container__box__bottom__top__col">
                    Actually Arrived: 128
                  </div>
                  <div className="withdrawalRecords__container__box__bottom__top__col">
                    Bonus: 30
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transfer