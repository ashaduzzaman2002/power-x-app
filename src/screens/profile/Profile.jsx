import React, { useContext, useState } from "react";
import "./profile.css";
import BottomNav from "../../components/bottomNav/BottomNav";
import { useNavigate } from "react-router-dom";
import { ConfirmModal, Header } from "../../components";
import { AppContext } from "../../context/AppContext";
import { dbObject } from "../../helper/constant";
import { toast } from "react-toastify";
import { toastOptions } from '../../components/toaster/Toaster'
import IsAuthenticate from "../../redirect/IsAuthenticate";
import { profile } from "../../assets";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, setUser } = useContext(AppContext);
  let navigate = useNavigate();

  const logout = async () => {
    try {
      const formData = new FormData();
      formData.append('userId', user?.id);

      const { data } = await dbObject.post('/users/logout.php', formData)
      if (!data.error) {
        toast.success(data?.message, toastOptions)

        setTimeout(() => {
          setUser(null)
          navigate("/signin");
        }, 1000);
      } else {
        toast.error(data?.message, toastOptions)
      }

    } catch (error) {
      console.log(error);
      toast.error('Internal server error', toastOptions)
    }
  };
  return (
    <IsAuthenticate>
      {showModal && (
        <ConfirmModal
          confirmFunc={logout}
          setFunc={setShowModal}
          text1={"Are you sure you want to logout?"}
          text2="Do you really want to logout?"
        />
      )}

      <div className="container">
        <BottomNav />

        <Header title={"Profile"} />

        {/* User details */}
        <div className="user__details__section">
          <div className="user__pic">
            <img
              src={profile}
              height="100%"
              alt=""
            />
          </div>
          <div className="user__details__section__right">
            <div className="user__details__section__right__col">
              <b>ID: {user?.referCode}</b>
            </div>
            <div className="user__details__section__right__col">
              Phone: {user?.phone}
            </div>
          </div>
        </div>

        {/* Game history */}
        <div className="profile__records__section">
          <div
            className="profile__records__section__col"
            onClick={() => navigate("/game-history")}
          >
            <div className="profile__records__section__col__left">
              <div className="profile__record__section__col__icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M15.5 11.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5C8.5 9.57 10.07 8 12 8s3.5 1.57 3.5 3.5zm-2.5 6h-2V19h2v-1.5zm9-5.5c0-2.76-1.12-5.26-2.93-7.07l-1.06 1.06A8.481 8.481 0 0120.5 12c0 2.34-.95 4.47-2.49 6.01l1.06 1.06A9.969 9.969 0 0022 12zM3.5 12c0-2.34.95-4.47 2.49-6.01L4.93 4.93A9.969 9.969 0 002 12c0 2.76 1.12 5.26 2.93 7.07l1.06-1.06A8.481 8.481 0 013.5 12zm14 0c0 1.52-.62 2.89-1.61 3.89l1.06 1.06A6.976 6.976 0 0019 12c0-1.93-.78-3.68-2.05-4.95l-1.06 1.06c.99 1 1.61 2.37 1.61 3.89zM7.05 16.95l1.06-1.06c-1-1-1.61-2.37-1.61-3.89s.62-2.89 1.61-3.89L7.05 7.05A6.976 6.976 0 005 12c0 1.93.78 3.68 2.05 4.95z"></path>
                </svg>
              </div>
              <div className="profile__record__section__col__name">
                Game History
              </div>
            </div>
            <div className="profile__records__section__col__right">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
              </svg>
            </div>
          </div>

          {/* Recent Transaction */}
          <div
            className="profile__records__section__col"
            style={{ marginTop: 20 }}
            onClick={() => navigate("/transaction")}
          >
            <div className="profile__records__section__col__left">
              <div className="profile__record__section__col__icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                </svg>
              </div>
              <div className="profile__record__section__col__name">
                Transaction
              </div>
            </div>

            <div className="profile__records__section__col__right">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="profile__records__section">
          {/* Follow us */}
          <div
            className="profile__records__section__col"
            onClick={() => navigate("/follow-us")}
          >
            <div className="profile__records__section__col__left">
              <div className="profile__record__section__col__icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                </svg>
              </div>
              <div className="profile__record__section__col__name">Follow Us</div>
            </div>
            <div className="profile__records__section__col__right">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Sign out */}
        <div className="profile__records__section">
          <div
            className="profile__records__section__col"
            onClick={() => setShowModal(true)}
          >
            <div className="profile__records__section__col__left">
              <div className="profile__record__section__col__icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </div>
              <div className="profile__record__section__col__name">Sign Out</div>
            </div>
            <div className="profile__records__section__col__right">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="toastContainer top-center"></div>
      </div>
    </IsAuthenticate>
  );
};

export default Profile;
