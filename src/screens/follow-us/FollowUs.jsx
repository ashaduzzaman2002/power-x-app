import React from "react";
import "./followus.css";
import Header from "../../components/header/Header";

const FollowUs = () => {
  return (
    <div className="container">
      <Header title="Follow Us" path="/profile" />

      <div className="follow-cards">
        <a href="#" target="blank" className="follow-card">
          <div>
            <i className="bi bi-telegram"></i>
          </div>
          <h2 className="mb-0">Telegram Channel</h2>
        </a>

        <a href="#" target="blank" className="follow-card">
          <div>
            <i className="bi bi-robot"></i>
          </div>
          <h2 className="mb-0">Telegram Bot</h2>
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
