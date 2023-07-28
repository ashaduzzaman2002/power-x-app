import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./forward.css";
import { rocket } from "../../assets";

const Forward = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="container">
      {/* Top Navbar */}
      <div class="app__top__nav">
        <div class="top__nav__cols">
          <div
            class="top__nav__back__btn"
            onClick={() => navigate(location?.state?.from || "/")}
          >
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

      <div>
        <div className="transaction-history-card py-0">
          <div className="info">
            <i class="bi bi-person-circle" style={{ fontSize: "3rem", color: '#b3b1b1' }}></i>
            <div>
              <p className="m-0">Ashadu Zaman</p>
              <p className="m-0">8023030340</p>
            </div>
          </div>

          <div>
          <i class="bi bi-trash3-fill text-light" style={{fontSize: '1.2rem'}}></i>
          </div>
        </div>

        <div className="transaction-history-card py-0">
          <div className="info">
            <i class="bi bi-person-circle" style={{ fontSize: "3rem", color: '#b3b1b1' }}></i>
            <div>
              <p className="m-0">Ashadu Zaman</p>
              <p className="m-0">8023030340</p>
            </div>
          </div>

          <div>
          <i class="bi bi-trash3-fill text-light" style={{fontSize: '1.2rem'}}></i>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content forward-modal">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Friend
              </h1>
              <button
                type="button"
                className="modal-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ color: "#fff" }}
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div>
                  <label for="exampleInputEmail1" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control text-light"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style={{ background: "#d3d3d33b", border: "none" }}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    class="form-control text-light"
                    id="exampleInputPassword1"
                    style={{ background: "#d3d3d33b", border: "none" }}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer gap-3">
              <button type="button" class="close-btn" data-bs-dismiss="modal">
                CLOSE
              </button>
              <button
                type="button"
                class="btn px-3 text-light"
                style={{ background: "#fec007" }}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-btn d-flex align-items-center justify-content-center rounded-circle">
        <button
          type="button"
          className="w-100 h-100 d-flex justify-content-center align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="bi bi-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Forward;
