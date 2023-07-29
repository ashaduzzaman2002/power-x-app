import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./forward.css";
import Header from '../../components/header/Header'

const Forward = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="container">
      {/* Top Navbar */}
      <Header title={'Forward'} path={location?.state?.from || "/"} />
      

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
