import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Header } from '../../components';
import './transfer.css'
import { Rupee } from '../../assets/svg/CustomSVG';
import Keyboard from '../../components/keyboard/Keyboard';

const Transfer = () => {
    const location = useLocation();
    const [amount, setAmount] = useState('');
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
            <Rupee />
          </div>
          {/* <input
            type="number"
            name=""
            id=""
            value={amount}
            onChange={handleChange}
          /> */}

          <div className='w-100 input'>{amount}</div>
        </div>

        <div className="withdrawal__input__notes">
          <p className="mb-0 mt-2">Service charge 10%</p>
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

      <Keyboard setAmount={setAmount} amount={amount} />

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